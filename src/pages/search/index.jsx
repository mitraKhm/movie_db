import { useDispatch, useSelector } from "react-redux";
import SearchComp from "../../component/main/search-input";
import { GetActorRes, GetMovieResAction, GetOnTvRes, ShowUiSearchActin } from "../../store/action";
import SearchResult from "./searchRes";
import ShowSearchRes from "./showSearchRes.jsx"
import styles from "./style.module.css"


const SearchPage = () => {
    const searchRes = useSelector(state => state.searchResult);
    const resState = useSelector(state => state.searchResState);
    const dispatch = useDispatch()

    const movies = searchRes.filter( item => item.media_type == "movie");
    const onTv = searchRes.filter( item => item.media_type == "tv");
    const person =searchRes.filter( item => item.media_type == "person");
    dispatch(ShowUiSearchActin(movies))
     dispatch(GetActorRes(person));
     dispatch(GetMovieResAction(movies));
     dispatch(GetOnTvRes(onTv))
    return (<>
    <div style={{backgroundColor:"#03254117"}}>
    <SearchComp />
    </div>
       
    
    <div className={styles.container}>
    <SearchResult />
    <ShowSearchRes />
    </div>
      

    </>)
}

export default SearchPage;