import { useSelector } from "react-redux";
import styles from "./style.module.css"

const SearchResult = () => {
    const movies = useSelector(state => state.searchMovieRes);
    const onTv = useSelector(state => state.searchOnTvRes);
    const person =useSelector(state => state.searchActorRes)
  
return (
    <div className={styles.box}>
    <h3> search result</h3>
        <div>
            <div className={styles.container}>
                <div className={styles.item} >Movies</div>
                <div>{movies.length}</div>
            </div>
            <div  className={styles.container}>
                <div className={styles.item} >on tv</div>
                <div>{onTv.length}</div>
            </div>
            <div  className={styles.container}>
                <div className={styles.item} >people</div>
                <div>{person.length}</div>
            </div>      
        </div>        
  </div>
)
}
 export default SearchResult;