import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Notecard } from "../Notes-card.js/Notecard";

import {useAuth} from "../../Contexts/Auth-context"
import "./Textarea.css";
import { useNotes } from "../../Contexts/NotesAction-context";
import axios from "axios";

export const Textarea = () => {
  const {authState} = useAuth();
  const {noteState, noteDispatch} = useNotes();
  const [note,setNote] = useState({title:'', content:'', date:''});
  const [isExpanded, setisExpanded] = useState(false);

  const inputHandler = (e)=>{
      setNote(pre=>({...pre,[e.target.name]:e.target.value, data: new Date(Date.now()).toLocaleString().split(','[0])}))
  }

  // handle expand of textbox on click
 const handleExpand=()=> {
    setisExpanded(true);
    console.log("hi")
  }


  const addNoteHandler = async (e,note)=>{
      e.preventDefault();
      console.log(note)
      console.log(authState.token)
     try {
       const res = await axios.post("/api/notes", { note }, { headers : {authorization: authState.token}});
       console.log(res)
       if(res.status === 201){
         setNote(pre =>({...pre, title: "", content: ""}));
         noteDispatch({type : "ADD_NOTES", payload: res.data.notes});
       }
       console.log(note)
     } catch (error) {
      //  alert(error)
       console.log(error)
     }
   

  }
  // onclick add notes 
 return (
    // Textarea Component
    <div>
      <form className="textarea-form">
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
        <button onClick={(e)=>addNoteHandler(e,note)}>
          <IoIosAdd size={35} />
        </button>

      </form>

    {/* Note card component */}

          {console.log(noteState.notes)}
          
      {noteState.notes.map((item)=>(<Notecard key={item._id} note={item}/>))}
      
  
    </div>
  );
};
