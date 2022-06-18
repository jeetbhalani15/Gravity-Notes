import React from 'react'
import {FcMenu}  from "react-icons/fc";
import{IoIosSearch} from "react-icons/io";
import {MdDarkMode, MdRefresh} from "react-icons/md";
import {MdGridView} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {IoApps} from "react-icons/io5";
import {MdOutlineAccountCircle} from "react-icons/md"
import {AiOutlineLogout} from "react-icons/ai"
import logo from "../../Assets/Images/hero-logo.png"
import {Link} from "react-router-dom";

import "./Navbar.css";
import { useAuth } from '../../Contexts/Auth-context';
import { BsToggleOn } from 'react-icons/bs';
import { useTheme } from '../../Contexts/Theme-context';
import { HiSun } from 'react-icons/hi';
import { ImSun } from 'react-icons/im';
import { FaSun } from 'react-icons/fa';
import { useNotes } from '../../Contexts/NotesAction-context';



export const Navbar = ()=>{
  const {authState} = useAuth();
  const {darkTheme , setDarkTheme} = useTheme();
  const {noteState,setSearchQuery,searchQuery} = useNotes();

  const logOutHandler =()=>{
    console.log(authState.token)
   authState.token = null
   console.log(authState.token)
  }

  const toggleDarkMode =()=>{
    setDarkTheme(!darkTheme)
  }
    return(
        <>
        <div className='header' style={{backgroundColor: darkTheme ? "#222223" : null }}>
            <button className='nav-btn widget3'><FcMenu size={30}/></button>
            <div className="hero-logo">
          <div className="logo-mg">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="bg-color ">
            <Link to="/">
              <div className="logo-txt">GRAVITY</div>
              <small className="small-txt">Notes</small>
            </Link>
          </div>
        </div>
           <div className="search">
               
                <span className='search-btn'><IoIosSearch size={25}/>
                <input type="text" placeholder='Search' onChange={(e)=>setSearchQuery(e.target.value)} /></span>
                
            </div>
            <div className="widgets">
              {darkTheme 
              ? (
                 <div className="refresh my-3"><button className='nav-btn' onClick={()=>toggleDarkMode()} > <a href="#"> <MdDarkMode color={"grey"}  size={30}/></a></button></div>
              )
              : ( <div className="refresh my-3"><button className='nav-btn' onClick={()=>toggleDarkMode()} > <a href="#"> <FaSun color={"grey"}  size={30}/></a></button></div>) 
              }
               
                {/* <div className="view my-3 "><button className='nav-btn'><MdGridView size={30}/></button></div> */}
                {/* <div className="settings my-3 "><button className='nav-btn'><a href="#"><IoSettingsOutline size={30}/></a></button></div> */}
            </div>

            <div className="widgets2">
                {/* <div className="hidden flex"> <button className='nav-btn'><MdOutlineAccountCircle color='grey' size={30}/></button><span className={darkTheme ? "nav-btn-txt" : null}>User Profile</span></div> */}

                {authState.token === null 
                ? 
                 <div className="logout flex"><Link to={"/login"}><button className='nav-btn'><AiOutlineLogout color={"grey"} size={30}/></button></Link><spank  className={darkTheme ? "nav-btn-txt" : null} >Log In</spank></div> 
               :
                <div className="logout flex"><Link to={"/logout"}><button onClick={()=> logOutHandler()} className='nav-btn'><AiOutlineLogout color={"grey"} size={30}/></button></Link><span  className={darkTheme ? "nav-btn-txt" : null}>Log Out</span></div>
                }
                
            </div>
        </div>
    </>
    );
}