import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShowUiSearchActin, ToggleSearchResStateAction } from "../../store/action";
import styles from "./style.module.css"

const SearchResult = () => {
    const resState = useSelector(state => state.searchResState);
    const movies = useSelector(state => state.searchMovieRes);
    const onTv = useSelector(state => state.searchOnTvRes);
    const person =useSelector(state => state.searchActorRes);
 
    const dispatch = useDispatch();
    
    const handleClick = (type) =>{
       dispatch(ToggleSearchResStateAction(type))
    }
    useEffect(() =>{
        if(resState == "movie"){
            dispatch(ShowUiSearchActin(movies))
            }else if(resState == "tv"){
                 dispatch(ShowUiSearchActin(onTv))
            }else if (resState == "person"){
                 dispatch(ShowUiSearchActin(person))
            }

    },[resState])
  
return (
    <div className={styles.box}>
    <h3 style={{paddingLeft:"20px"}}> search result</h3>
        <div>
            <div className={ styles.container } onClick={() =>handleClick('movie')}>
                <div className={(resState == "movie") ?styles.selected:  styles.item} >Movies
                <div>{movies.length}</div></div>
            </div>
            <div  className={ styles.container}  onClick={() =>handleClick('tv')}>
                <div className={ (resState == "tv") ?styles.selected:styles.item} >on tv
                <div>{onTv.length}</div></div>
            </div>
       
            <div  className={styles.container} onClick={() =>handleClick('person')}>
                <div className={(resState == "person") ?styles.selected: styles.item} >people
                <div>{person.length}</div></div>
            </div>      
        </div>    
          
  </div>
)
}
 export default SearchResult;