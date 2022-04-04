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

  const inputHandler = (e) => {
    setNote((pre) => ({
      ...pre,
      title: e.target.value,
      data: new Date(Date.now()).toLocaleString().split(","[0]),
    }));
  };

  const userColorSelector = (color) => {
    setNote((pre) => ({ ...pre, color: color }));
  };

  const showColorSelector = (note) => {
    setColorSelector((pre) => !pre);
  };

  // handle expand of textbox on click
  const handleExpand = () => {
    setisExpanded(true);
    console.log("hi");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    note.flag
      ? editNote(note, authState, noteDispatch, setNote)
      : addNoteHandler(e, note, setNote, noteDispatch, authState);
  };
  const quillHander = (e) => {
    setNote((pre) => ({ ...pre, content: e }));
  };

  // onclick add notes
  return (
    // Textarea Component
    <div>
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
            <BiTagAlt className="color-selector-btn" color="grey" size={25} />
          ) : null}
        </div>
        {note.flag ? (
          <button className="add-note-btn">
            <GrUpdate color="white" size={20} />
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
