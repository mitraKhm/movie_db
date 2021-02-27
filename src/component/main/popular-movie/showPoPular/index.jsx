import { useState } from "react"
import { useSelector } from "react-redux";
import styles from "./style.module.css"
import {  STREAMING, ON_TV} from "../selector-wrapper/popType"

 const Streaming = () => {
     const [popularMovie , setPopularMovie] = useState([]);

     const types = useSelector(state => state.reducer.popType);
     const getData = async ( url) => {
       console.log(url);
    //   try{
    //     const res = await fetch(url)
    //     if(!res.ok){
    //       throw new Error (res.status)
    //      }
    //     const finalRes = await res.json();
    //     const pop = finalRes.results
    //     setPopularMovie(pop)
       
    //   }catch(e){
    // console.log(e);
    //   }
    }
     if(types == STREAMING){
       getData('https://api.themoviedb.org/3/movie/popular?api_key=893075893339d08fb28f13b616a70bff&language=en-US&page=2')

     }else if(types == ON_TV){
       getData('https://api.themoviedb.org/3/tv/popular?api_key=893075893339d08fb28f13b616a70bff&language=en-US&page=1')
     }
     


     return (
       
         <div>
             <div className={styles.container}>
                { popularMovie &&
                popularMovie.map((i , index )=> {
                    return (
                      <div className={styles.item}>
                        <div className={styles.poster_img}></div>
                     
                       <img src ={'https://image.tmdb.org/t/p/w154/'+ i.poster_path}></img>
                       <div key={{index}} >{i.original_title} </div>
                       <div> rate: {i.vote_average}</div>
                       
                      </div>
                    )
                })
                }
               
             </div>
            
            

         </div>
     )
 }
 export default Streaming;
 
