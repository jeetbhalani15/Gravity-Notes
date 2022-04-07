import { FaTrashRestore } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";
import { addNoteHandler } from "../../Utils/AddNote";

export const TrashCard = ({trash})=>{
    
    const { noteDispatch, note, setNote } = useNotes();
    const {authState} = useAuth();

    const deleteFromTrash = (note)=>{
        noteDispatch({type:"DELETE_FROM_TRASH", payload: note})

    };
    const restoreFromTrash = (e,note)=>{
        addNoteHandler(e,note,setNote,noteDispatch,authState)
        noteDispatch({type:"DELETE_FROM_TRASH", payload: note})

    }
        
    return(
            <div className={`note ${trash.color}`}>
            <div className="title-box">
            <h1 className="title-txt">{trash.title}</h1>
            <small>{trash.data}</small>
            <span className={`priority-tag-${trash.priority} && ${trash.priority}`}>{trash.priority}</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: trash.content}}/>

            <div className="tag-chips">
        {note.tags.map((item) => (
          <div key={item} className="chips">
            <span>{item} </span>
            <span
              onClick={() =>
                deleteChip(item, note, authState, noteDispatch)
              }
              className="delete-chip-btn"
            >
              &times;
            </span>
          </div>
        ))}
      </div>
            <div className={`cardicon ${trash.color}`}>
                <button className="card-action-btn" onClick={()=> deleteFromTrash(trash)} ><MdDelete size={25} /></button>
                <button className="card-action-btn" onClick={(e)=> restoreFromTrash(e,trash)}><FaTrashRestore size={25} /></button>
            </div>
        </div>
        );
    
}
               
            
             