import { useSelector } from "react-redux";

const Tv = () => {
    const showUI = useSelector(state => state.showUiRes)
    return(
    <div> 
        {showUI.map((item, index) => {
            console.log(item);
            return (
                <div>
              </div>

            )
        })}

    </div>
    )
}
export default Tv;