import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { CheckSearchSubject, GetSearchResult } from "../../../store/action";
//import styles
import styles from "./style.module.css";

const SearchComp = () => {
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
        const finalRes = result.results
        dispatch(GetSearchResult(finalRes))
      }catch(e){
    console.log(e);
      }
    }; 

    const handleInput = ({target}) => {
      const{ value} =  target;
      dispatch(CheckSearchSubject(value.replace(/ /g, '%')))
    };
 
    const handleValue = ({target,keyCode }) => {
      const {value} = target;
        if (keyCode === 13) {
           dispatch(CheckSearchSubject(value.replace(/ /g,'%')))
           search()
            history.push("/search");
        }
    }
    const search = () => {
      dispatch(GetSearchResult())
      for (let i = 1; i <3; i++) {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=893075893339d08fb28f13b616a70bff&language=en-US&query=${searchSub}&page=${i}&include_adult=false`;
        getData(url);
    }           
     }
    return (
        <div className={styles.searchContainer}>

            <input className={styles.searchInput} onChange={handleInput}
             onKeyDown={handleValue} type='text' placeholder='search movie or ...' >
              </input>
            <Link to= "/search" >
            <button className={styles.btn} onClick={search}>search </button>
             </Link>
        </div>
        
        )
}


export default SearchComp;
