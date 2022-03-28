import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Notecard } from "../Notes-card.js/Notecard";
import "./Textarea.css"

export const Textarea = ()=>{

    const [isExpanded, setisExpanded] = useState(false);
    const [note, setnote] = useState({
      title: "",
      content: "",
    });
  
    function handleChange(e) {
      console.log("hello");
      const { name, value } = e.target;
      setnote((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  
    function handleExpand() {
      setisExpanded(true);
    }
  
    function submitBtn(event) {
      onAdd(note);
      setnote({
        title: "",
        content: "",
      });
      event.preventDefault();
    }
    return(
        <div>
        <form>
          {isExpanded && (
            <input
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
          <button onClick={submitBtn}>
            <IoIosAdd size={35} />
          </button>
        </form>
        {/* JUST FOR PREVIEW */}
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
      </div>
    );
} 