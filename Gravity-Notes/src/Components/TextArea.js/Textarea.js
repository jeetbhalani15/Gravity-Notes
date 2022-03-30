import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Notecard } from "../Notes-card.js/Notecard";
import {axios} from "axios";
import "./Textarea.css";

export const Textarea = () => {
  const [isExpanded, setisExpanded] = useState(false);
  const [note, setnote] = useState({ title: "", content: "" });
  const [notearray, setNoteArray] = useState([]);

  // handle Changes in textarea
 const handleChange=(e)=> {
    console.log("hello");
    const { name, value } = e.target;
    setnote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  // handle expand of textbox on click
 const handleExpand=()=> {
    setisExpanded(true);
  }
  // adding noted obj into an array
  const addNote=(newNote)=> {
    setNoteArray((preValue) => {
      return [...preValue, newNote];
    });
  }
   
  // onclick add notes 
  const submitBtn = async(note)=> {
    // e.preventDefault();
    try {
      console.log('try')
      const response = await axios.post("/api/notes",{ note }); 
      addNote(note);
      setnote({
        title: "",
        content: "",
      });
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  console.log(note);
  console.log(notearray);
 
 
  return (
    // Textarea Component
    <div>
      <form>
        {isExpanded && (<input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpand}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={()=>submitBtn(notearray)}>
          <IoIosAdd size={35} />
        </button>
      </form>

    {/* Note card component */}

      {notearray.map((item, index) => (
        <Notecard title={item.title} content={item.content} key={index} />
      ))}
    </div>
  );
};
