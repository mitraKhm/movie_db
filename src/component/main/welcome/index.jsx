import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchComp from "../search-input/index";

//import style 
import styles from "./style.module.css"



const WelcomeComp = () => {

//     const [img , setImg]= useState([]);

//     const num =(Math.floor(Math.random() * 20));
//     const movieImg = useSelector(state => state.popularMovie[num].backdrop_path);
//     console.log(movieImg);
// //  
// // useEffect(() => {
// //     movieImg[num]?setImg(movieImg[num].backdrop_path):console.log('nist');
// // },img)  ;
// // console.log( "img",img);
    return (
        <div className={styles.welcomeComp}>
        <div className={styles.wel}>
            <h2>Welcome.</h2>
             <div> Millions of movies, TV shows and people to discover. Explore now.</div> </div>
        <SearchComp />

    </div>)

}

export default WelcomeComp;