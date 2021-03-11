
import { useDispatch, useSelector } from "react-redux";
import { TogglePopularTypeAction } from "../../../../store/action";
import { togglePopularType } from "../../../../store/reducers";
import Streaming from "../show-popular";
import {  STREAMING, ON_TV} from "./popType";
// import styles

import styles from "./style.module.css"
const Selector = () => {
    // const popType = useSelector(state => state.reducer.popType);
    const popType = useSelector (state => state.popularState)

const dispatch = useDispatch();

    const handlePopType = (type) => {
     switch(type){
        case STREAMING:
            return dispatch(TogglePopularTypeAction (STREAMING))
            case ON_TV:
                return  dispatch(TogglePopularTypeAction (ON_TV))
      
     }

    }
return (
    <div className={styles.container}>
    <div className={styles.popular}> What's Popular </div>
    <div className={styles.selector_wrapper}>
        <div className={(popType === STREAMING)?styles.selected:styles.items}  onClick={() => handlePopType(STREAMING)}> streaming</div>
        <div className={ ( popType === ON_TV)?styles.selected: styles.items} onClick={() => handlePopType(ON_TV)}> on tv </div>
      
    </div>
    </div>
)

}
export default Selector;