import {MdDelete} from "react-icons/md"
import {BiBellPlus} from "react-icons/bi"
import {HiOutlineUserAdd} from "react-icons/hi"
import {BiImage} from "react-icons/bi"
import {BiArchiveIn} from "react-icons/bi"
import {MdMoreVert} from "react-icons/md"
import "./Notecard.css";
import { useAuth } from "../../Contexts/Auth-context"
import { useNotes } from "../../Contexts/NotesAction-context"
import axios from "axios"




export const Notecard = ({note})=>{
    const {authState} = useAuth();
    const {noteDispatch} = useNotes();

    const deleteNote = async (item)=>{
        console.log("delete")
        console.log(authState.token)
        console.log(item._id)
        try {
            
            const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization : authState.token}})
            console.log(res)
            if(res.status === 200){
                noteDispatch({type:"DELETE_NOTES", payload: res.data.notes})
            }
            
        } catch (error) {
            console.log(error)
        }
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
                <button onClick={() => deleteNote(note) }><MdDelete size={25} /></button>
                <button><BiImage size={25} /></button>
                <button><BiArchiveIn size={25} /></button>
                <button><HiOutlineUserAdd size={24} /></button>
                <button><BiBellPlus size={25} /></button>
            </div>
        </div>
    );
}