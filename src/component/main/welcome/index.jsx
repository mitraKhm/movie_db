import SearchComp from "../search";

//import style 
import styles from "./style.module.css"



const WelcomeComp = () => {
    return (
        <div className={styles.welcomeComp}>
        <div >Welcome</div>
        <div> Millions of movies, TV shows and people to discover. Explore now.</div>
        <SearchComp />

    </div>)

}

export default WelcomeComp;