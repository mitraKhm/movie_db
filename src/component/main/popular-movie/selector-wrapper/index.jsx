

// import styles
import styles from "./style.module.css"
const Selector = () => {
return (
    <>
    <div className={styles.popular}> What's Popular </div>
    <div className={styles.selector_wrapper}>
        <div className={styles.select_item ,styles.selected}> streaming</div>
        <div className={styles.select_item}> on tv </div>
        <div className={styles.select_item}> test1 </div>
        <div className={styles.select_item}> test 2 </div>
    </div>
    </>
)

}
export default Selector;