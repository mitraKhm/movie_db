import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ShowUiSearchActin } from "../../store/action";
import Movie from "./movie";
import Person from "./person";
import Tv from "./tv";



const ShowSearchRes = () => {

  const resState = useSelector(state => state.searchResState);
  if(resState == "movie"){
      return <Movie />
    }else if(resState == "tv"){
      return <Tv />
    }else if (resState == "person"){
      return <Person />
    }

return null
}
export default ShowSearchRes;