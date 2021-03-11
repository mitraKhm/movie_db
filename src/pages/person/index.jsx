import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {baseUrl , api_key} from "../../services/http-client.js";
import logo from "../../assets/pic/logos/notFound.png"
import styles from "./style.module.css";

const Person = () => {
    const {person_id} = useParams();
    const actUrl = baseUrl + `/person/${person_id}`+api_key;
    const moviesUrl= baseUrl+ `/person/${person_id}/movie_credits` + api_key
    const [actors, setActors] = useState([]);
    const [movies, setMovies] = useState([]);
    const getData = async ( url , type) => {
      try{
        const res = await fetch(url);
        if(!res.ok){
          throw new Error (res.status)
         }
        const finalRes = await res.json();
       (type == 'act') ? setActors(finalRes):setMovies(finalRes.cast)
      
      }catch(e){
    console.log(e);
      }
    }
    useEffect(() => {
     getData(actUrl , "act");
     getData(moviesUrl)
    },[]);
    console.log(movies);


      return(
        <div className={styles.container}>
          <div className={styles.poster}>

          <img style={{borderRadius:"10px",width: "300px"}} src={'https://image.tmdb.org/t/p/original/'+ actors.profile_path} alt=""/>
          </div>
          <div className={styles.detail}>
              <section>
                <h2 className={styles.title}> {actors.name}</h2>
                <p>Biography </p>
                <p className={styles.overView}>
                  {actors.biography}
                </p>
              </section>
              <div>
                <h3>Known For </h3>
                <div className={styles.Known}>
                  {movies ?
                    <div  className={styles.item}> {movies.map(i => {
                          return (
                     <Link to ={ `/movie/${i.id}`}  >  
                    <div className={styles.card}>
                          <div className={styles.actImg}>
                              {i.poster_path?  <img className={styles.actImg} src={'https://image.tmdb.org/t/p/w154/'+i.poster_path} alt="poster"/> :
                                <img className={styles.noImg} src={logo} alt="Logo" />
                              }
                        </div>
                          <div className={styles.header} >
                            <p>{i.original_title}</p>
                          </div>
                        </div></Link> 
                          
                          ) 
                      })}</div>
                 : ""}
                </div>

              </div>
            
            </div>
        
        </div>
     )
}
export default Person;