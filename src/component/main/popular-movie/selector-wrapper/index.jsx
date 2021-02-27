
import { useDispatch, useSelector } from "react-redux";
import { TogglePopularTypeAction } from "../../../../store/action";
import { togglePopularType } from "../../../../store/reducers";
import Streaming from "../showPoPular";
import {  STREAMING, ON_TV} from "./popType";
// import styles

import styles from "./style.module.css"
const Selector = () => {
    const types = useSelector(state => state.reducer.popType);

const dispatch = useDispatch();

    const handlePopType = (type) => {
        console.log(types);
     switch(type){
        case STREAMING:
            return dispatch( togglePopularType(STREAMING))
            case ON_TV:
                return  dispatch(togglePopularType(ON_TV))
      
     }

    }
return (
    <>
    <div className={styles.popular}> What's Popular </div>
    <div className={styles.selector_wrapper}>
        <div className={styles.select_item ,styles.selected} onClick={() => handlePopType(STREAMING)}> streaming</div>
        <div className={styles.select_item} onClick={() => handlePopType(ON_TV)}> on tv </div>
        <div className={styles.select_item}> test1 </div>
        <div className={styles.select_item}> {types}</div>
    </div>
    </>
)

}
export default Selector;