import {MdDelete} from "react-icons/md"
import {BiArchiveOut, BiBellPlus, BiTagAlt} from "react-icons/bi"
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
    const { noteDispatch,note } = useNotes();
    const {authState} = useAuth();
    return(
        <div className={`note ${archive.color}`}>
        <div className="title-box">
        <h1 className="title-txt">{archive.title}</h1>
        <small>{archive.data}</small>
        <span className={`priority-tag-${archive.priority} && ${archive.priority}`}>{archive.priority}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: archive.content}}/>

        <div className="tag-chips">
        {note.tags.map((item) => (
          <div key={item} className="chips">
            <span>{item} </span>
            <span
              onClick={() =>
                deleteChip(item, note, authState, noteDispatch, setNote)
              }
              className="delete-chip-btn"
            >
              &times;
            </span>
          </div>
        ))}
      </div>
        <div className={`cardicon ${archive.color}`}>
            <button className="card-action-btn"><MdMoreVert size={25} /></button>
            <button className="card-action-btn" onClick={() => deleteFromArchive(archive,authState,noteDispatch) }><MdDelete size={25} /></button>
            <button className="card-action-btn" onClick={() => restoreArchiveNote(archive,authState,noteDispatch) }><BiArchiveOut size={25} /></button>
            {/* <button onClick={() => editHandler(note)}><BiEditAlt size={25} /></button> */}
            <button className="card-action-btn"><BiTagAlt size={25} /></button>
            <button className="card-action-btn"><HiOutlineUserAdd size={24} /></button>
        </div>
    </div>
    );
}

