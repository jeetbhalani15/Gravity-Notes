import {MdDelete, MdOutlineFormatColorReset} from "react-icons/md"
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
import { useState } from "react"
import { IoColorPaletteSharp } from "react-icons/io5"
import "./Notecard.css";
import { editNote } from "../../Utils/EditNote"
export const Notecard = ({note})=>{

   
    const {authState} = useAuth();
    const {noteDispatch, setNote} = useNotes();
    const [colorSelector,setColorSelector] = useState(false)

    const editHandler = async (note)=>{
         setNote((pre =>({...pre,
            title: note.title,
            content: note.content,
            _id: note._id,
            flag: true,
            color:note.color,
            date: new Date(Date.now()).toLocaleString().split(','[0])
         })))
    }

    const showColorSelector = (note)=>{
        setColorSelector(pre => !pre)
      }
      const applyColorOnCard = (colorName, note) => {
        const addedColorItem = {...note, color : colorName};
        editNote(addedColorItem, authState , noteDispatch, setNote);
     }

   
    return(
        <div className={`note ${note.color}`}>
            <div className="title-box">
            <h1 className="title-txt">{note.title}</h1>
            <small>{note.data}</small>
            </div>
            <p dangerouslySetInnerHTML={{ __html: note.content}}/>
            <div className={`cardicon ${note.color}`}>
                <button className="card-action-btn"><MdMoreVert size={25} /></button>
                <button className="card-action-btn" onClick={() => deleteNote(note,authState,noteDispatch) }><MdDelete size={25} /></button>
                <button className="card-action-btn" onClick={() => editHandler(note)}><BiEditAlt size={25} /></button>
                <button className="card-action-btn" onClick={() => archiveNote(note,authState,noteDispatch) }><BiArchiveIn size={25} /></button>
                <button className="card-action-btn" onClick={ ()=> showColorSelector(note)} ><IoColorPaletteSharp size={24} /></button>
                <button className="card-action-btn"><BiBellPlus size={25} /></button>
            </div>
        

         {/* COLOR SELECTOR BOX */}
      {colorSelector
        && 
       <div className="card-color-box">
         <span className="card-pointer">^</span>
       <button onClick={()=>applyColorOnCard("",note)} className="card-color-btn"> <MdOutlineFormatColorReset size={5}/>  </button>
       <button onClick={()=>applyColorOnCard("red",note)} className="card-color-btn red"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("orange",note)} className="card-color-btn orange"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("yellow",note)} className="card-color-btn yellow"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("green",note)} className="card-color-btn green"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("purple",note)} className="card-color-btn purple"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("pink",note)} className="card-color-btn pink"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
       <button onClick={()=>applyColorOnCard("brown",note)} className="card-color-btn brown"> <MdOutlineFormatColorReset size={5}  visibility={"hidden"} />  </button>
     </div> }
     </div>
    );
}