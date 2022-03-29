import {MdDelete} from "react-icons/md"
import {BiBellPlus} from "react-icons/bi"
import {HiOutlineUserAdd} from "react-icons/hi"
import {BiImage} from "react-icons/bi"
import {BiArchiveIn} from "react-icons/bi"
import {MdMoreVert} from "react-icons/md"
import "./Notecard.css";
export const Notecard = ({title, content, key})=>{
    return(
        <div className='note' key={key}>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className="cardicon">
                <button><MdMoreVert size={25} /></button>
                <button onClick={() => onDelete(id)}><MdDelete size={25} /></button>
                <button><BiImage size={25} /></button>
                <button><BiArchiveIn size={25} /></button>
                <button><HiOutlineUserAdd size={24} /></button>
                <button><BiBellPlus size={25} /></button>
            </div>
        </div>
    );
}