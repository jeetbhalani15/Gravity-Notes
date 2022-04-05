import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { Notecard } from "../Notes-card/Notecard";

import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";
import axios from "axios";
import "./Textarea.css";
import { addNoteHandler } from "../../Utils/AddNote";
import { editNote } from "../../Utils/EditNote";
import { MdOutlineFormatColorReset, MdOutlineLightbulb } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BiTagAlt } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Textarea = () => {
  const { authState } = useAuth();
  const { noteState, noteDispatch, note, setNote } = useNotes();
  const [isExpanded, setisExpanded] = useState(false);
  const [colorSelector, setColorSelector] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  let itemsInTags=[...note.tags];
  let tempTag = ""

  const inputHandler = (e) => {
    setNote((pre) => ({
      ...pre,
      title: e.target.value,
      data: new Date(Date.now()).toLocaleString().split(","[0]),
    }));
  };

  const userColorSelector = (color) => {
    setNote((pre) => ({ ...pre, color: color }));
    setColorSelector(false)
  };

  const showColorSelector = (note) => {
    setColorSelector((pre) => !pre);
  };
  const toggleLabel = () => {
    setShowLabel((pre) => !pre);
  };

  // handle expand of textbox on click
  const handleExpand = () => {
    setisExpanded(true);
    console.log("hi");
  };
  const submitHandler = (e) => {
    // setisExpanded(false)
    e.preventDefault();
    note.flag
      ? editNote(note, authState, noteDispatch, setNote)
      : addNoteHandler(e, note, setNote, noteDispatch, authState);
  };
  const quillHander = (e) => {
    setNote((pre) => ({ ...pre, content: e }));
  };

  const addTagsInArray = (tag)=>{
     if(itemsInTags.find(item => item === tag)) {
     itemsInTags = itemsInTags.filter(item => item !== tag)
     } else {
       itemsInTags.push(tag)
     }
    }

    const tagInputHandler =(e)=>{
      tempTag = e.target.value
    }

    const addTagToCard =()=>{
      tempTag && itemsInTags.push(tempTag)
      setNote(pre => ({...pre, tags: itemsInTags}))
      setShowLabel(false)
    }

  // onclick add notes
  return (
    // Textarea Component
    <div className="txt-editor-box">
      <form
        onSubmit={(e) => submitHandler(e)}
        className={`textarea-form ${note.color}`}
        style={isExpanded ? { height: "18rem" } : { height: "3rem" }}
      >
        <input
          className={note.color}
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={inputHandler}
          onClick={handleExpand}
          required
        />

        <p>
          {/* <textarea className={note.color}
            value={note.content}
            onChange={inputHandler}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            onClick={handleExpand}
            required
            > </textarea> */}
          {isExpanded && (
            <ReactQuill
              className={`quill-editor ${note.color} `}
              value={note.content}
              placeholder={"Take a note..."}
              onChange={(e) => quillHander(e)}
            />
          )}
        </p>
        <div className="action-btn">
          {isExpanded ? (
            <IoColorPaletteSharp
              onClick={showColorSelector}
              className="color-selector-btn"
              color="grey"
              size={25}
            />
          ) : null}
          {isExpanded ? (
            <BiTagAlt
              onClick={toggleLabel}
              className="color-selector-btn"
              color="grey"
              size={25}
            />
          ) : null}
        </div>
        {note.flag ? (
          <button className="add-note-btn">
            <GrUpdate color="white" size={18} />
          </button>
        ) : (
          <button className="add-note-btn">
            <IoIosAdd size={35} />
          </button>
        )}
      </form>

      {/* COLOR SELECTOR BOX */}
      {colorSelector && (
        <div className="color-box">
          <span className="pointer">^</span>
          <button onClick={() => userColorSelector("")} className="color-btn">
            {" "}
            <MdOutlineFormatColorReset size={12} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("red")}
            className="color-btn red"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("orange")}
            className="color-btn orange"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("yellow")}
            className="color-btn yellow"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("green")}
            className="color-btn green"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("purple")}
            className="color-btn purple"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("pink")}
            className="color-btn pink"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => userColorSelector("brown")}
            className="color-btn brown"
          >
            {" "}
            <MdOutlineFormatColorReset size={12} visibility={"hidden"} />{" "}
          </button>
        </div>
      )}

      {/* LABEL_BOX */}
      {showLabel && (
        <div className="lable-container">
          <div className="tag-selection-box">
            <div className="tag-box">
              <div className="tags">
                <input
                name="work"
                type="checkbox"
                onClick={()=>addTagsInArray("work")}
                checked= {note.tags.find(item => item === "work")}/>
                <label htmlFor="work">Work</label>
              </div>
              <div className="tags">
                <input
                name="health"
                type="checkbox"
                onClick={()=>addTagsInArray("health")}
                checked= {note.tags.find(item => item === "health")}/>
                <label htmlFor="work">Health</label>
              </div>
              <div className="tags">
                <input
                name="fitness"
                type="checkbox"
                onClick={()=>addTagsInArray("fitness")}
                checked= {note.tags.find(item => item === "fitness")}/>
                <label htmlFor="work">Fitness</label>
              </div>
              </div>
              <div className="tag-box">
              <div className="tags">
                <input
                name="personal"
                type="checkbox"
                onClick={()=>addTagsInArray("personal")}
                checked= {note.tags.find(item => item === "personal")}/>
                <label htmlFor="work">Personal</label>
              </div>
              <div className="tags">
                <input
                name="study"
                type="checkbox"
                onClick={()=>addTagsInArray("study")}
                checked= {note.tags.find(item => item === "study")}/>
                <label htmlFor="work">Study</label>
              </div>
              <div className="tags">
                <input
                name="medication"
                type="checkbox"
                onClick={()=>addTagsInArray("medication")}
                checked= {note.tags.find(item => item === "medication")}/>
                <label htmlFor="work">Medication</label>
              </div>
              </div>
          </div>
          <input
            className="txt-editor-label-input"
            type="text"
            placeholder="Enter label here..."
            onChange={tagInputHandler}
          />
          <IoIosAdd onClick={()=> addTagToCard()} className="tag-btn" size={20} />
        </div>
      )}

      {/* Note card component */}
      {noteState.notes.length === 0 ? (
        <>
          {" "}
          <div className="no-note-txt">
            <MdOutlineLightbulb color="grey" size={175} />
            <p className="no-note-pra">Notes you add appear here</p>
          </div>
        </>
      ) : (
        <>
          {noteState.notes.map((item) => (
            <Notecard key={item._id} note={item} />
          ))}
        </>
      )}
    </div>
  );
};
