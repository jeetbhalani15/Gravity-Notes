
import {MdOutlineLightbulb} from "react-icons/md";
import {FaRegBell} from "react-icons/fa";
import {BiTagAlt} from "react-icons/bi";
import {MdOutlineEdit} from "react-icons/md";
import {MdOutlineArchive} from "react-icons/md";
import {VscTrash} from "react-icons/vsc";
import { Notecard } from "../Notes-card/Notecard";
import { Archive } from "../../Pages/Archive/Archive-page";
import { Link } from "react-router-dom";
import { useNotes } from "../../Contexts/NotesAction-context";
import { IoIosAdd } from "react-icons/io";
import {BsTags} from "react-icons/bs";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Sidebar.css";
import { useTheme } from "../../Contexts/Theme-context";

export const Sidebar = ()=>{
    const {noteState, noteDispatch,note} = useNotes();
    const [isExpanded, setisExpanded] = useState(false);
    const [newLabel,setNewLabel] =useState("");
    const {darkTheme} = useTheme();

    const handleExpand = () => {
        setisExpanded(true);
        console.log("hi");
      };

    return(
        <>
       <div className="headermenu">
           <ul className="label-list">
            <li className="item">
                <Link to={"/home"}>
                <button className="sidebar-btn" ><a href="#"><MdOutlineLightbulb size={30}/></a></button>
                </Link>
                <span className={`tag ${darkTheme ? "light-txt" : null}`}>Notes</span><span className="badge">{noteState.notes.length}</span>
               
            </li>
            {/* <li className="item unused-btn">
                <button className="sidebar-btn" ><a href="#"><FaRegBell size={30}/></a></button>
                <span className={`tag ${darkTheme ? "light-txt" : null}`}>Reminders</span>
            </li>
            <li className="item unused-btn">
                <button className="sidebar-btn" ><a href="#"><BiTagAlt size={30} /></a></button>
                <span  className={`tag ${darkTheme ? "light-txt" : null}`}>Array</span>
            </li>
    
            <li className="item unused-btn">
                <button className="sidebar-btn" ><a href="#"><BiTagAlt size={30}/></a></button>
                <span  className={`tag ${darkTheme ? "light-txt" : null}`}>String</span>
            </li> */}
            <li className="item">
                <Link to="/label"><button className="sidebar-btn" ><a href="#"><BsTags size={30}/></a></button>
                </Link>
                <span className={`tag ${darkTheme ? "light-txt" : null}`}>Tags</span><span className="badge">{note.tags.length}</span>

            </li>
            {/* {noteState.label.length > 0 && (
                 <ul >
                 {noteState.label.map((label,id)=>(<div><li key={id} >{label}</li></div>))}
         </ul>
            ) } */}
           
              
            <li className="item">
                <Link to={"/archive"}>
                <button className="sidebar-btn" ><a href="#"><MdOutlineArchive size={30}/></a></button>
                </Link>
                <span  className={`tag ${darkTheme ? "light-txt" : null}`}>Achieve</span><span className="badge">{noteState.archives.length}</span>
            </li>
            <li className="item">
                <Link to={"/trash"}>
                <button className="sidebar-btn" ><a href="#"><VscTrash size={30}/></a></button>
                </Link>
                <span className={`tag ${darkTheme ? "light-txt" : null}`}>Trash</span><span className="badge">{noteState.trashNotes.length}</span>
            </li>
            {/* <li className="label-box">
                <input className="label-input" type="text" value={newLabel} onChange={(e)=> setNewLabel(e.target.value)} placeholder="Enter label"  /><IoIosAdd className="label-btn" onClick={()=> addNewLabelInList()} size={20}/>
            </li> */}
            </ul>
           
        </div>
        </>
    );
}