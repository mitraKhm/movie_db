import { useSelector } from "react-redux";

const Person = () => {
    const showUI = useSelector(state => state.showUiRes)
    return(
    <div> 
        {showUI.map((item, index) => {
            return (
                <div>
              </div>

            )
        })}

    </div>
    )
}
export default Person;