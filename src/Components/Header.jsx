import "./Style.css"
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <img src="https://www.logolynx.com/images/logolynx/81/81685e6895f63fd708f6e6bce9bb89fe.jpeg" alt="" />
            </div>
            <ul>
            <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About Us</li></Link>
                <Link to={'/contact'}><li>Contact Us</li></Link>
            </ul>
        </div>
        
        </>
    )
}
export default Header;