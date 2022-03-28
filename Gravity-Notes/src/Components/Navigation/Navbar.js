import React from 'react'
import {FcMenu}  from "react-icons/fc";
import{IoIosSearch} from "react-icons/io";
import {MdRefresh} from "react-icons/md";
import {MdGridView} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {IoApps} from "react-icons/io5";
import {MdOutlineAccountCircle} from "react-icons/md"
import logo from "../../Assets/Images/hero-logo.png"

import "./Navbar.css";



export const Navbar = ()=>{
    return(
        <>
        <div className='header'>
            <button className='widget3'><a href="#"><FcMenu size={30}/></a></button>
            <div className="hero-logo">
          <div className="logo-mg">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="bg-color">
            {/* <Link to="/"> */}
              <div>GRAVITY</div>
              <small className="small-txt">Notes</small>
            {/* </Link> */}
          </div>
        </div>
           <div className="search">
               
                <span className='search-btn'><IoIosSearch size={25}/>
                <input type="text" placeholder='Search' /></span>
                
            </div>
            <div className="widgets">
                <div className="refresh my-3"><button> <a href="#"> <MdRefresh size={30}/></a></button></div>
                <div className="view my-3 "><button><a href="#"><MdGridView size={30}/></a></button></div>
                <div className="settings my-3 "><button><a href="#"><IoSettingsOutline size={30}/></a></button></div>
            </div>
            <div className="widgets2">
                <div className="drive"><button><a href="#"><IoApps size={30}/></a></button></div>
                <div className="logo"><button><a href="#"><MdOutlineAccountCircle size={30}/></a></button></div>
            </div>
        </div>
    </>
    );
}