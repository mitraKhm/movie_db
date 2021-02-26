import PopularContent from "../../component/main/popular-movie/main";
import OnTv from "../../component/main/popular-movie/on-tv";
import Streaming from "../../component/main/popular-movie/Streaming";
import WelcomeComp from "../../component/main/welcome";


  const MainPage = () => {
      return (
        <>
           <WelcomeComp />
           <PopularContent />
           <Streaming />
           <OnTv></OnTv>
        </>

      )
  }
  export default MainPage;