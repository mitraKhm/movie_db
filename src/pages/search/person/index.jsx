import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from  "../../../assets/pic/logos/notFound.png";
import styles from "../style.module.css"

const Person = () => {
    const showUI = useSelector(state => state.showUiRes);
    console.log(showUI);
    return(
    <div> 
        {showUI[0].map((item, index) => {
            return (
                < div className={styles.card}>
                    <div>
                    <div className={styles.image}>
                          <Link  to ={`/people/${item.id}`} >
                          {
                          item.profile_path ?  <img className={styles.img} src = {'https://image.tmdb.org/t/p/w92/'+ item.profile_path}></img> : 
                          <img className={styles.noImg} src={logo} alt="Logo" /> 
                          }</Link>
                          </div>
                        <div>

                        </div>
                    
              </div>
                    <div  className={styles.boxRes}>
                    <div className={styles.top_wrapper }>
                                <div className={styles.title_wrapper }>
                                    <div >
                                        <Link to ={`/people/${item.id}`} >
                                    <h3 className={styles.name}> { item.name}</h3>
                                    </Link>
                                    </div>
                    
                              </div>
                            </div>
                    </div>     </div>
          )
        })}

    </div>
    )
}
export default Person;