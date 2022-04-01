import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import {GrUpdate} from "react-icons/gr"
import { Notecard } from "../Notes-card/Notecard";

import {useAuth} from "../../Contexts/Auth-context"
import { useNotes } from "../../Contexts/NotesAction-context";
import axios from "axios";
import "./Textarea.css";
import { addNoteHandler } from "../../Utils/AddNote";
import { editNote } from "../../Utils/EditNote";
import { MdOutlineTerrain } from "react-icons/md";

export const Textarea = () => {
  const {authState} = useAuth();
  const {noteState, noteDispatch,note,setNote} = useNotes();
  const [isExpanded, setisExpanded] = useState(false);

  const inputHandler = (e)=>{
      setNote(pre=>({...pre,[e.target.name]:e.target.value, data: new Date(Date.now()).toLocaleString().split(','[0])}))
  }

  // handle expand of textbox on click
 const handleExpand=()=> {
    setisExpanded(true);
    console.log("hi")
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    note.flag 
    ?
    editNote(note,authState,noteDispatch,setNote)
    :
    addNoteHandler(e,note,setNote,noteDispatch,authState);

  }

  // onclick add notes 
 return (
    // Textarea Component
    <div>
      <form onSubmit={(e)=> submitHandler(e)} className="textarea-form">
        {isExpanded && (<input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={inputHandler}
            required
          />
        )}
        <p>
          <textarea
            value={note.content}
            onChange={inputHandler}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            onClick={handleExpand}
            required
          ></textarea>
        </p>
        {note.flag 
         ? 
           <button >
          <GrUpdate color="white" size={20} />
          </button>
         :
          <button >
          <IoIosAdd size={35} />
          </button>
         }
        

      </form>

    {/* Note card component */}

          {/* {console.log(noteState.notes)}
          {console.log(noteState)}
           */}
      {noteState.notes.map((item)=>(<Notecard key={item._id} note={item}/>))}
      
  
    </div>
  );
};
