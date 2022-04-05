import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context"

export const TagCard = ({tag})=>{
    
    const { noteDispatch, setNote,note } = useNotes();
    const {authState} = useAuth();
    
    return(
            <div className={`note ${tag.color}`}>
            <div className="title-box">
            <h1 className="title-txt">{tag.title}</h1>
            <small>{tag.data}</small>
            </div>
            <p dangerouslySetInnerHTML={{ __html: tag.content}}/>
            <div className={`cardicon ${tag.color}`}>
                {/* <button className="card-action-btn" onClick={()=> deleteFromTrash(tag)} ><MdDelete size={25} /></button> */}
                {/* <button className="card-action-btn" onClick={(e)=> restoreFromTrash(e,trash)}><FaTrashRestore size={25} /></button> */}
            </div>
        </div>
        );
    
}
    