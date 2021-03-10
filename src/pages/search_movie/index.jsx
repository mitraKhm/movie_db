import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actors from "./actors"
import styles from "./style.module.css"


const CompleteSearchResult = () => {
    const {movie_id} = useParams();
    const baseUrl = 'https://api.themoviedb.org/3';
    const api_key = "?api_key=893075893339d08fb28f13b616a70bff&language=en-US";
    const movieUrl = baseUrl+`/movie/${movie_id}`+api_key;

    const [data, setData] = useState([]);

    
const convert = (t) =>{
   const hours  = Math.floor(t/60);
   const minutes  = (t -( hours *60))
  return hours + "h " + minutes + "m";
}
const getData = async ( url) => {
    try{
      const res = await fetch(url);
      if(!res.ok){
        throw new Error (res.status)
       }
      const finalRes = await res.json();
    setData(finalRes)
    }catch(e){
  console.log(e);
    }
  }
  useEffect(() =>{
    getData(movieUrl);
  
  },[])


 return (
     <div> 
       {data.backdrop_path ?<> <div className={styles.back_drop} 
       style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`} }> </div>
   
       </>
       : 
       <div className={styles.back_drop}  style={{backgroundColor :'red'}}> </div> 
       }
           <div className={styles.back_color}>
         <div className={styles.detail}>
           <div className={styles.poster}>
             <img style={{borderRadius:"10px"}} src={'https://image.tmdb.org/t/p/original/'+data.poster_path} alt="poster"/>
           </div>
           <div className={styles.box}>
             <div className={styles.container}> 
               <div className={styles.title}>
                 <h2>{data.original_title}  <span  style={{}}> ( {data.release_date ? data.release_date.slice(0, 4) :""} )</span> </h2>
               
                <div className={styles.fact}>
                <span> { data.release_date ? data.release_date.replace(/-/g, "/") : ""} </span>
                <span className={styles.fact} >{ data.genres? data.genres.map((i, index) => {
                 return <p className={styles.fact} key={index}>. {i.name} </p>
                }) : ""}</span>
                <span>{convert(data.runtime)}</span>
                </div>

                 <span></span>
               </div>
               <ul className={ styles.list}>
                 <li>{data.vote_average}</li>
                 <li></li>
                 <li></li>
                 <li></li>
               </ul>
               <div className={styles.overView}> 
               <p>{data.tagline? <p>{data.tagline}</p> : "" }</p>
               <h3>Overview</h3>
                <span>{data.overview}</span>
               </div>
              
             </div>
           </div>
         </div>

       </div>
       <div>
  <Actors />
       </div>
   </div>
 )
}

export default CompleteSearchResult;