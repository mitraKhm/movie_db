import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from  "../../../assets/pic/logos/notFound.png";
import styles from "../style.module.css"

const Movie = () => {
    const showUI = useSelector(state => state.showUiRes);
    const state = useSelector(state => state.searchResState);
    return(
          <div>
          {showUI[0].map(item => {
              return(
                  <div className={styles.card}> 
                      
                          <div className={styles.image}>
                          <Link  to ={`/movie/${item.id}`} >
                          {
                          item.poster_path ?  <img className={styles.img} src = {'https://image.tmdb.org/t/p/w92/'+ item.poster_path}></img> : 
                          <img className={styles.noImg} src={logo} alt="Logo" /> 
                          }</Link>
                          </div>
                          <div  className={styles.boxRes}>
                            <div className={styles.top_wrapper }>
                                <div className={styles.title_wrapper }>
                                    <div >
                                        <Link to ={`/movie/${item.id}`} >
                                    <h3 className={styles.name}> { (state == "movie") ? item.original_title :item.original_name }</h3>
                                    </Link>
                                    </div>
                            
                              <span>  { (state == "movie") ?  item.release_date : item.first_air_date }</span>
                              </div>
                            </div>
                             <div className={styles.overView}>
                                 <p >
                             {item.overview}
                             </p>
                             </div>
                          </div>
                 
                  </div>
              
              )
          })}
          </div>
    )
}
export default Movie;