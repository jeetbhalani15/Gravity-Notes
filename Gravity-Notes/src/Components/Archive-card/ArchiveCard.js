import {MdDelete} from "react-icons/md"
import {BiArchiveOut, BiBellPlus} from "react-icons/bi"
import {HiOutlineUserAdd} from "react-icons/hi"
import {BiImage} from "react-icons/bi"
import {BiArchiveIn} from "react-icons/bi"
import {MdMoreVert} from "react-icons/md"
import {BiEditAlt} from "react-icons/bi"
import { useAuth } from "../../Contexts/Auth-context"
import { useNotes } from "../../Contexts/NotesAction-context"
import axios from "axios"
import { deleteNote } from "../../Utils/DeleteNote"
import { restoreArchiveNote } from "../../Utils/RestoreArchiveNotes"
import { deleteFromArchive } from "../../Utils/DeleteFromArchive"

export const ArchiveCard = ({ archive })=>{
    const { noteDispatch } = useNotes();
    const {authState} = useAuth();
    return(
        <div className='note'>
        <div className="title-box">
        <h1 className="title-txt">{archive.title}</h1>
        <small>{archive.data}</small>
        </div>
        <p>{archive.content}</p>
        <div className="cardicon">
            <button><MdMoreVert size={25} /></button>
            <button onClick={() => deleteFromArchive(archive,authState,noteDispatch) }><MdDelete size={25} /></button>
            <button onClick={() => restoreArchiveNote(archive,authState,noteDispatch) }><BiArchiveOut size={25} /></button>
            {/* <button onClick={() => editHandler(note)}><BiEditAlt size={25} /></button> */}
            <button><HiOutlineUserAdd size={24} /></button>
            <button><BiBellPlus size={25} /></button>
        </div>
    </div>
    );
}