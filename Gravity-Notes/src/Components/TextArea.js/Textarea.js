import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import {VscFilter} from "react-icons/vsc";
import {FiFilter} from "react-icons/fi";

import { Notecard } from "../Notes-card/Notecard";
import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";
import { addNoteHandler } from "../../Utils/AddNote";
import { editNote } from "../../Utils/EditNote";
import { MdOutlineFormatColorReset, MdOutlineLightbulb } from "react-icons/md";
import { IoColorPaletteSharp, IoFilter } from "react-icons/io5";
import { BiTagAlt } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Textarea.css";
import { Filter } from "../Filters/Filter";
import toast from "react-hot-toast";
import { useTheme } from "../../Contexts/Theme-context";

export const Textarea = () => {
  const { authState } = useAuth();
  const {darkTheme}= useTheme();
  const { noteState, noteDispatch, note, setNote, searchQuery } = useNotes();
  const [isExpanded, setisExpanded] = useState(false);
  const [colorSelector, setColorSelector] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  let itemsInTags=[...note.tags];
  let tempTag = "";
  const date = new Date();
  const time = date.getTime();

  const searchResult = noteState.notes.filter((note)=> note.title.toLowerCase().includes(searchQuery?.toLowerCase().trim()))


  const inputHandler = (e) => {
    setNote((pre) => ({
      ...pre,
      title: e.target.value,
      time: time,
      data: new Date(Date.now()).toLocaleString().split(","[0]),
    }));
  };

  //  Color Selector
  const userColorSelector = (color) => {
    setNote((pre) => ({ ...pre, color: color }));
    setColorSelector(false)
  };

  // toggle for color selector
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

  // add edit notes
  const submitHandler = (e) => {
    // setisExpanded(false)
    e.preventDefault();
    note.flag
      ? editNote(note, authState, noteDispatch, setNote)
         
      : addNoteHandler(e, note, setNote, noteDispatch, authState)
  };
  const quillHander = (e) => {
    setNote((pre) => ({ ...pre, content: e }));
  };

  // add tags
  const addTagsInArray = (tag)=>{
     if(itemsInTags.find(item => item === tag)) {
     itemsInTags = itemsInTags.filter(item => item !== tag)
     } else {
       itemsInTags.push(tag)
     }
    }

    // tag input
    const tagInputHandler =(e)=>{
      tempTag = e.target.value
    }

    // add tag to card
    const addTagToCard =()=>{
      tempTag && itemsInTags.push(tempTag)
      setNote(pre => ({...pre, tags: itemsInTags}))
      toast.success('label Added to the notes!');
      setShowLabel(false)
    }

    const toggleFilter = ()=>{
      setShowFilter(pre => !pre)
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
         {/* NORMAL TEXT EDITOR */}
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

            {/* RICH TEXT EDITOR */}
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

      {/* FILTER */}
      <button onClick={toggleFilter} className="filter-btn">Apply Filters<FiFilter size={20}/></button>
       {showFilter && <Filter/> }
       

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
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Work</label>
              </div>
              <div className="tags">
                <input
                name="health"
                type="checkbox"
                onClick={()=>addTagsInArray("health")}
                checked= {note.tags.find(item => item === "health")}/>
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Health</label>
              </div>
              <div className="tags">
                <input
                name="fitness"
                type="checkbox"
                onClick={()=>addTagsInArray("fitness")}
                checked= {note.tags.find(item => item === "fitness")}/>
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Fitness</label>
              </div>
              </div>
              <div className="tag-box">
              <div className="tags">
                <input
                name="personal"
                type="checkbox"
                onClick={()=>addTagsInArray("personal")}
                checked= {note.tags.find(item => item === "personal")}/>
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Personal</label>
              </div>
              <div className="tags">
                <input
                name="study"
                type="checkbox"
                onClick={()=>addTagsInArray("study")}
                checked= {note.tags.find(item => item === "study")}/>
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Study</label>
              </div>
              <div className="tags">
                <input
                name="medication"
                type="checkbox"
                onClick={()=>addTagsInArray("medication")}
                checked= {note.tags.find(item => item === "medication")}/>
                <label className={darkTheme ? "label-txt" : null} htmlFor="work">Medication</label>
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
          {searchResult.map((item) => (
            <Notecard key={item._id} note={item} />
          ))}
        </>
      )}
    </div>
  );
};
