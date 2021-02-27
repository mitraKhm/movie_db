

// import styles
import { useDispatch, useSelector } from "react-redux";
import Streaming from "../Streaming";
import styles from "./style.module.css"
const Selector = () => {
const popType = useSelector(state => state.popularState )
const togglePopType = useDispatch();

    const handlePopType = (type) => {
     switch(type){
        case 'Streaming':
            return togglePopType("Streaming")
            case 'onTv':
                return togglePopType("onTv");
          default:
            return 'streaming';
     }
    }
return (
    <>
    <div className={styles.popular}> What's Popular </div>
    <div className={styles.selector_wrapper}>
        <div className={styles.select_item ,styles.selected} onClick={() => handlePopType("Streaming")}> streaming</div>
        <div className={styles.select_item} onClick={() => handlePopType("onTv")}> on tv </div>
        <div className={styles.select_item}> test1 </div>
        <div className={styles.select_item}> test 2 </div>
    </div>
    </>
)

}
export default Selector;