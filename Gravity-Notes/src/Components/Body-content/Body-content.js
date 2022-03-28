import { Textarea } from "../TextArea.js/Textarea";
import {MdOutlineLightbulb} from "react-icons/md";
import {FaRegBell} from "react-icons/fa";
import {BiTagAlt} from "react-icons/bi";
import {MdOutlineEdit} from "react-icons/md";
import {MdOutlineArchive} from "react-icons/md";
import {VscTrash} from "react-icons/vsc";
import { Notecard } from "../Notes-card.js/Notecard";
import "./Bodycontent.css"

export const Bodycontent = ()=>{
    return(
        <>
        <div className="body-content">
        <div className="headermenu">
            <div className="item1">
                <button><a href="#"><MdOutlineLightbulb size={30}/></a></button>
                {/* <span>Notes</span> */}
            </div>
            <div className="item2">
                <button><a href="#"><FaRegBell size={30}/></a></button>
                {/* <span>Reminders</span> */}
            </div>
            <div className="item3">
                <button><a href="#"><BiTagAlt size={30} /></a></button>
                {/* <span>Array</span> */}
            </div>
    
            <div className="item4">
                <button><a href="#"><BiTagAlt size={30}/></a></button>
                {/* <span>String</span> */}
            </div>
            <div className="item5">
                <button><a href="#"><MdOutlineEdit size={30}/></a></button>
                {/* <span>Edit label</span> */}
            </div>
            <div className="item6">
                <button><a href="#"><MdOutlineArchive size={30}/></a></button>
                {/* <span>Achieve</span> */}
            </div>
            <div className="item7">
                <button><a href="#"><VscTrash size={30}/></a></button>
                {/* <span>Trash</span> */}
            </div>
        </div>
        <div className="content">
        <Textarea/>
        </div>
        </div>
        </>
    );
}