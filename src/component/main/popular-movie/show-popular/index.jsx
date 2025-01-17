
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css"
import {  STREAMING, ON_TV} from "../selector-wrapper/popType"
import { GetPopularMovieDataAction, SetPopLoading } from "../../../../store/action";
import { useEffect } from "react";

 const ShowPopularMovie = () => {
     const popularMovieList = useSelector(state => state.popularMovie);
     const types = useSelector(state => state.popularState);
     const popLoading = useSelector(state => state.popularLoading);
     const dispatch = useDispatch();


     const getData = async ( url) => {

      try{
        const res = await fetch(url)
        if(!res.ok){
          throw new Error (res.status)
         }
        const finalRes = await res.json();
        const pop = finalRes.results
       dispatch(GetPopularMovieDataAction(pop))  
       dispatch(SetPopLoading(true))   

      }catch(e){
    console.log(e);
      }
   
     
    }
    useEffect(() => {
      console.log("did mount");
    },[]);
    useEffect( () => {
        if(types == STREAMING){
       getData('https://api.themoviedb.org/3/movie/popular?api_key=893075893339d08fb28f13b616a70bff&language=en-US&page=2')
        
     }else if(types == ON_TV){
       getData('https://api.themoviedb.org/3/tv/popular?api_key=893075893339d08fb28f13b616a70bff&language=en-US&page=1')
     }
    },[types])
     return (
       
         <div>
             <div className={styles.container}>
                { popularMovieList &&
                popularMovieList.map((i , index )=> {
                    return (
                      <div className={styles.item}>
                        <div className={styles.poster_img}></div>
                       <img className={styles.img}  src ={'https://image.tmdb.org/t/p/w154/'+ i.poster_path}></img>
                        <div className={styles.box}>
                       
                       <div className={styles.rate}><div className={styles.circle}><div className={styles.num}>{(i.vote_average)*10}%</div></div></div>
                       <div key={{index}} className={styles.title}>{i.original_title} </div>

                        </div>
                      
                       
                      </div>
                    )
                })
                }
               
             </div>
            
            

         </div>
     )
 }
 export default ShowPopularMovie;
 
