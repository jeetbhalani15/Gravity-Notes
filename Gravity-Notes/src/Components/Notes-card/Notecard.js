import {MdDelete} from "react-icons/md"
import {BiBellPlus} from "react-icons/bi"
import {HiOutlineUserAdd} from "react-icons/hi"
import {BiImage} from "react-icons/bi"
import {BiArchiveIn} from "react-icons/bi"
import {MdMoreVert} from "react-icons/md"
import {BiEditAlt} from "react-icons/bi"
import { useAuth } from "../../Contexts/Auth-context"
import { useNotes } from "../../Contexts/NotesAction-context"
import { deleteNote } from "../../Utils/DeleteNote"
import { archiveNote } from "../../Utils/ArchiveNote"
import "./Notecard.css";

export const Notecard = ({note})=>{

   
    const {authState} = useAuth();
    const {noteDispatch, setNote} = useNotes();

    const editHandler = async (note)=>{
         setNote((pre =>({...pre,
            title: note.title,
            content: note.content,
            id: note._id,
            flag: true,
            date: new Date(Date.now()).toLocaleString().split(','[0])
         })))
    }

   
    return(
        <div className='note'>
            <div className="title-box">
            <h1 className="title-txt">{note.title}</h1>
            <small>{note.data}</small>
            </div>
            <p>{note.content}</p>
            <div className="cardicon">
                <button><MdMoreVert size={25} /></button>
                <button onClick={() => deleteNote(note,authState,noteDispatch) }><MdDelete size={25} /></button>
                <button onClick={() => editHandler(note)}><BiEditAlt size={25} /></button>
                <button onClick={() => archiveNote(note,authState,noteDispatch) }><BiArchiveIn size={25} /></button>
                <button><HiOutlineUserAdd size={24} /></button>
                <button><BiBellPlus size={25} /></button>
            </div>
        </div>
    );
}