import { Textarea } from "../TextArea.js/Textarea";
import {MdOutlineLightbulb} from "react-icons/md";
import {FaRegBell} from "react-icons/fa";
import {BiTagAlt} from "react-icons/bi";
import {MdOutlineEdit} from "react-icons/md";
import {MdOutlineArchive} from "react-icons/md";
import {VscTrash} from "react-icons/vsc";
import { Notecard } from "../Notes-card/Notecard";
import { Archive } from "../../Pages/Archive/Archive-page";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNotes } from "../../Contexts/NotesAction-context";

export const Sidebar = ()=>{
    const {noteState} = useNotes();
    return(
        <>
       <div className="headermenu">
            <div className="item">
                <Link to={"/home"}>
                <button className="sidebar-btn" ><a href="#"><MdOutlineLightbulb size={30}/></a></button>
                </Link>
                <span className="tag">Notes</span><span className="badge">{noteState.notes.length}</span>
               
            </div>
            <div className="item">
                <button className="sidebar-btn" ><a href="#"><FaRegBell size={30}/></a></button>
                <span className="tag">Reminders</span>
            </div>
            <div className="item">
                <button className="sidebar-btn" ><a href="#"><BiTagAlt size={30} /></a></button>
                <span  className="tag">Array</span>
            </div>
    
            <div className="item">
                <button className="sidebar-btn" ><a href="#"><BiTagAlt size={30}/></a></button>
                <span  className="tag">String</span>
            </div>
            <div className="item">
                <button className="sidebar-btn" ><a href="#"><MdOutlineEdit size={30}/></a></button>
                <span  className="tag">Edit label</span>
            </div>
            <div className="item">
                <Link to={"/archive"}>
                <button className="sidebar-btn" ><a href="#"><MdOutlineArchive size={30}/></a></button>
                </Link>
                <span  className="tag" >Achieve</span><span className="badge">{noteState.archives.length}</span>
            </div>
            <div className="item">
                <Link to={"/trash"}>
                <button className="sidebar-btn" ><a href="#"><VscTrash size={30}/></a></button>
                </Link>
                <span  className="tag">Trash</span><span className="badge">{noteState.trashNotes.length}</span>
            </div>
        </div>
        </>
    );
}