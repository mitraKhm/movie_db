import links from "./links";
import { ReactComponent as Logo} from './../../assets/pic/logos/footerLogo.svg'
//import style
import "./style.css"

const Footer = () => {
    return (
    <div className="footer">
        <div className ="footerLogo">  <Logo /></div>
      
        <div className="parts">
            {links.map( (item,index) => {
                return ( <>
                            <div className ='category' key={index}>{item.Category } </div>               
                                <div className="items"> 
                                    {item.items.map( (links,index) => { return <div>{links}</div>})}
                                </div>
                        </> )
            })}
        </div>

    </div>
        )
}
export default  Footer;