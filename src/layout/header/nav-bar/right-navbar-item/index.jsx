import { PureComponent } from "react";
import style from "./style.module.css"
const items = ["Movie","Tv show","people ",'More']
  


const NavItem = () => {
return (
    <div> 
        {items.map((item ,index) => <div className={style.navItem} key={index}>{item}</div>)}
    </div>)
}
export default NavItem ;