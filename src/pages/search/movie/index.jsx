import { useSelector } from "react-redux";
import logo from  "../../../assets/pic/logos/notFound.png";
import styles from "../style.module.css"

const Movie = () => {
    const showUI = useSelector(state => state.showUiRes)
    console.log(showUI[0]);
    return(
          <di>
          {showUI[0].map(item => {
              return(
                  <div className={styles.card}> 
                      
                          <div className={styles.image}>
                          {
                          item.poster_path ?  <img className={styles.img} src = {'https://image.tmdb.org/t/p/w92/'+ item.poster_path}></img> : 
                          <img className={styles.noImg} src={logo} alt="Logo" />
                          }
                          </div>
                          <div  className={styles.boxRes}>
                            <div className={styles.top_wrapper }>
                                <div className={styles.title_wrapper }>
                                    <div >
                                    <h3 className={styles.name}> {item.original_title}</h3>
                                    </div>
                            
                              <span>  {item.release_date}</span>
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
          </di>
    )
}
export default Movie;