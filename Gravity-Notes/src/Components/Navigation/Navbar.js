import React from 'react'
import {FcMenu}  from "react-icons/fc";
import{IoIosSearch} from "react-icons/io";
import {MdRefresh} from "react-icons/md";
import {MdGridView} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {IoApps} from "react-icons/io5";
import {MdOutlineAccountCircle} from "react-icons/md"
import {AiOutlineLogout} from "react-icons/ai"
import logo from "../../Assets/Images/hero-logo.png"
import {Link} from "react-router-dom";

import "./Navbar.css";
import { useAuth } from '../../Contexts/Auth-context';



export const Navbar = ()=>{
  const {authState} = useAuth();

  const logOutHandler =()=>{
    console.log(authState.token)
   authState.token = null
   console.log(authState.token)
  }
    return(
        <>
        <div className='header'>
            <button className='nav-btn widget3'><a href="#"><FcMenu size={30}/></a></button>
            <div className="hero-logo">
          <div className="logo-mg">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="bg-color">
            <Link to="/Landingpage">
              <div>GRAVITY</div>
              <small className="small-txt">Notes</small>
            </Link>
          </div>
        </div>
           <div className="search">
               
                <span className='search-btn'><IoIosSearch size={25}/>
                <input type="text" placeholder='Search' /></span>
                
            </div>
            <div className="widgets">
                <div className="refresh my-3"><button className='nav-btn'> <a href="#"> <MdRefresh size={30}/></a></button></div>
                <div className="view my-3 "><button className='nav-btn'><a href="#"><MdGridView size={30}/></a></button></div>
                {/* <div className="settings my-3 "><button className='nav-btn'><a href="#"><IoSettingsOutline size={30}/></a></button></div> */}
            </div>
            <div className="widgets2">
                <div className="user flex"> <button className='nav-btn'><MdOutlineAccountCircle size={30}/></button><span>User Profile</span></div>
                {authState.token === null 
                ? 
                 <div className="logout flex"><Link to={"/login"}><button className='nav-btn'><a href="#"><AiOutlineLogout size={30}/></a></button></Link><spank>Log In</spank></div> 
               :
                <div className="logout flex"><Link to={"/logout"}><button onClick={()=> logOutHandler()} className='nav-btn'><a href="#"><AiOutlineLogout size={30}/></a></button></Link><span>Log Out</span></div>
                }
                
            </div>
        </div>
    </>
    );
}