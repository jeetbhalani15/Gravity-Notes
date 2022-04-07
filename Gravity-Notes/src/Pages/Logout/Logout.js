import {SiCachet} from "react-icons/si"
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useTheme } from "../../Contexts/Theme-context";
import "./Logout.css";

export const Logout = ()=>{
  const {darkTheme} = useTheme();
return(
    <>
    <Navbar />
    <div className="body-content">
      <Sidebar />
      <div className="content">
       <div className="logout-box">
           <SiCachet color="green" size={35}/>
           <h1 className={darkTheme? "logout-color" : null}>You have been logged out successfully!!</h1>
        <Link to={"/login"}><button className="login-btn">Login</button></Link>
       </div>
       
      </div>
    </div>
    <Footer />
    </>
);
}