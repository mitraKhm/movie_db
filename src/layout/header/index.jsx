import NavBar from "./nav-bar";
import { ReactComponent as Logo} from './../../assets/pic/logos/logo.svg'
//import style
import "./style.css"


 const Header = ( ) => {
 return (
     <div className ={'header'}>
         <div className = 'logo'>
         {/* <imag src={logo} alt ='logo' /> */}
         <Logo />
         </div>
       
          <NavBar />
          </div>
     
 ) 
}

export default Header;