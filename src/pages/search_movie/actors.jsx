
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import logo from "../../assets/pic/logos/notFound.png";
import styles from "./style.module.css";
const Actors = (props) => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const api_key = "?api_key=893075893339d08fb28f13b616a70bff&language=en-US";
    const {movie_id} = useParams();
    const actUrl = baseUrl+`/movie/${movie_id}/credits`+api_key;
  
    const [actors, setActors] = useState([]);
    const getData = async ( url) => {
        try{
          const res = await fetch(url);
          if(!res.ok){
            throw new Error (res.status)
           }
          const finalRes = await res.json();
        setActors(finalRes.cast)
        }catch(e){
      console.log(e);
        }
      }
      useEffect(() =>{
        getData(actUrl);
      },[]);
     
return (
    <div className={styles.cast}>
    <h2>Top Billed Cast</h2>
     { actors ? <div  className={styles.item}> {actors.slice(0,15).map(i => {
      return (
       
 <div className={styles.card}>
       <div className={styles.actImg}>
           {i.profile_path ?  <img className={styles.actImg} src={'https://image.tmdb.org/t/p/w154/'+i.profile_path} alt="profile"/> :
             <img className={styles.noImg} src={logo} alt="Logo" />
           }
       
     </div>
       <div className={styles.header} >
         <Link to={`/people/${i.id}`} >
         <h3>{i.name}</h3></Link>
         <span>{i.character}</span>
       </div>
    </div>
       
      ) 
   })}</div>
    : <div>nist</div>}
    </div>
)
} 
export default Actors;
