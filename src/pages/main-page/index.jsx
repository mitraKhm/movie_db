import OnTv from "../../component/main/popular-movie/on-tv";

import Streaming from "../../component/main/popular-movie/Streaming";
import WelcomeComp from "../../component/main/welcome";
import Header from "../../layout/header"

  const MainPage = () => {
      return (
        <>
           <WelcomeComp />
           <Streaming />
           <OnTv></OnTv>
        </>

      )
  }
  export default MainPage;