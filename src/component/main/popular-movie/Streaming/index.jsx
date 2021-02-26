import { useState } from "react"
import styles from "./style.module.css"

 const Streaming = () => {
     const [popularMovie , setPopularMovie] = useState([]);
     const [obj , setObj] = useState({});

const getData = async () => {
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=893075893339d08fb28f13b616a70bff&language=en-US&page=2')
    if(!res.ok){
      throw new Error (res.status)
     }
    const finalRes = await res.json();
    const pop = finalRes.results
    setPopularMovie(pop)
   
  }catch(e){
console.log(e);
  }
}
     return (
       
         <div>
            <button onClick={getData}>click to see streaming movie</button>
             <div className={styles.container}>
                {
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
 
