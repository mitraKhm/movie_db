
//import styles 
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { CheckSearchSubject, GetSearchResult } from "../../../store/action";
//import styles
import styles from "./style.module.css";

const SearchComp = (Props) => {
    const searchResultA = useSelector(state => state.searchResult);
    const searchSub = useSelector(state => state.searchSubject);
    const dispatch = useDispatch();
    const history = useHistory();
    const getData = async ( url) => {
      try{
        const res = await fetch(url)
        if(!res.ok){
          throw new Error (res.status)
         }
        const result = await res.json();
        const finalRes=result.results
        dispatch(GetSearchResult(finalRes))
      }catch(e){
    console.log(e);
      }
    }
    const handleValue = (e) => {
        if (e.keyCode === 13) {
            const inputValue = e.target.value.replace(/ /g, '%');
            dispatch(GetSearchResult())
            for (let i = 1; i <3; i++) {
                const url = `https://api.themoviedb.org/3/search/multi?api_key=893075893339d08fb28f13b616a70bff&language=en-US&query=${inputValue}&page=${i}&include_adult=false`;
                getData(url)
                dispatch(CheckSearchSubject(e.target.value))
            }           
            history.push("/search")
        }
    }

    return (
        <div className={styles.searchContainer}>
       
            <input className={styles.searchInput}
             onKeyDown={ (e) => handleValue(e)} type='text' placeholder='search movie or ...' >
              </input>
            <Link to= "/search" >
            <button onClick={ (e) => handleValue(e)}>search</button>
             </Link>
        </div>
        
        )
}


export default SearchComp;