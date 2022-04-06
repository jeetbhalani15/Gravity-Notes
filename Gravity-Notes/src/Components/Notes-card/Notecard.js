import { MdDelete, MdOutlineFormatColorReset } from "react-icons/md";
import { BiBellPlus, BiTagAlt } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BiImage } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";
import { deleteNote } from "../../Utils/DeleteNote";
import { archiveNote } from "../../Utils/ArchiveNote";
import { useState } from "react";
import { IoColorPaletteSharp } from "react-icons/io5";
import "./Notecard.css";
import { editNote } from "../../Utils/EditNote";
import { IoIosAdd } from "react-icons/io";


export const Notecard = ({ note }) => {
  const { authState } = useAuth();
  const { noteDispatch, setNote, setFilter, filter } = useNotes();
  const [colorSelector, setColorSelector] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [isExpanded, setisExpanded] = useState(false);
  let itemsInTags = [...note.tags];
  let tempTag = "";
  const date = new Date();
  const time = date.getTime();

  const editHandler = async (note) => {
    setNote((pre) => ({
      ...pre,
      title: note.title,
      content: note.content,
      _id: note._id,
      flag: true,
      color: note.color,
      time: note.time,
      date: new Date(Date.now()).toLocaleString().split(","[0]),
    }));
    setisExpanded(true);
    setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
    noteDispatch({type:"CLEAR_FILTER"});
    setFilter(pre => ({...pre, priority: ""}));
  };

  const showColorSelector = (note) => {
    setColorSelector((pre) => !pre);
  };
  const applyColorOnCard = (colorName, note) => {
    const addedColorItem = { ...note, color: colorName };
    editNote(addedColorItem, authState, noteDispatch,);
    setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
    noteDispatch({type:"CLEAR_FILTER"});
  };

  const toggleLabel = () => {
    setShowLabel((pre) => !pre);
  };

  const addTagsInArray = (tag) => {
    if (itemsInTags.find((item) => item === tag)) {
      itemsInTags = itemsInTags.filter((item) => item !== tag);
    } else {
      itemsInTags.push(tag);
    }
  };

  const tagInputHandler = (e) => {
    tempTag = e.target.value;
    console.log(tempTag)
  };

  const addTagToCard = () => {
    tempTag && itemsInTags.push(tempTag);
    const currentAddedTag = {...note, tags: itemsInTags}
    console.log("add")
    console.log(currentAddedTag)
    editNote(currentAddedTag, authState,noteDispatch,setNote)
    setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
    noteDispatch({type:"CLEAR_FILTER"});
    setShowLabel(false);
  };

  const deleteChip = (chip, note, authState, noteDispatch) => {

    const deletedChip = note.tags.filter( item => item !== chip);
    const newData = {...note, tags: deletedChip};
    editNote(newData, authState, noteDispatch, setNote);
    setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
    noteDispatch({type:"CLEAR_FILTER"});
}
const addPriority =(e)=>{
  const priorityAdded = {...note, priority: e.target.value};
  editNote(priorityAdded,authState,noteDispatch)
  setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
  noteDispatch({type:"CLEAR_FILTER"});
}

  return (
    <div className={`note ${note.color}`}>
      <div className="title-box">
        <h1 className="title-txt">{note.title}</h1>
        <small>{note.data}</small>
      </div>
      <span className={`priority-tag-${note.priority} && ${note.priority}`}>{note.priority}</span>
      <p dangerouslySetInnerHTML={{ __html: note.content }} />
      
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
      

      <div className={`cardicon ${note.color}`}>
        {/* <button className="card-action-btn">
          <MdMoreVert size={25} />
        </button> */}
        <button
          className="card-action-btn"
          onClick={() => deleteNote(note, authState, noteDispatch)}
        >
          <MdDelete size={25} />
        </button>
        <button className="card-action-btn" onClick={() => editHandler(note)}>
          <BiEditAlt size={25} />
        </button>
        <button
          className="card-action-btn"
          onClick={() => archiveNote(note, authState, noteDispatch,setFilter)}
        >
          <BiArchiveIn size={25} />
        </button>
        <button
          className="card-action-btn"
          onClick={() => showColorSelector(note)}
        >
          <IoColorPaletteSharp size={24} />
        </button>
        <button className="card-action-btn" onClick={() => toggleLabel()}>
          <BiTagAlt size={25} />
        </button>
        <select onChange={(e)=>addPriority(e)} name="priority" id="priority" value={note.priority}>
          <option value={"High"}>Priority</option>
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
      </div>


      {/* COLOR SELECTOR BOX */}
      {colorSelector && (
        <div className="card-color-box">
          <span className="card-pointer">^</span>
          <button
            onClick={() => applyColorOnCard("", note)}
            className="card-color-btn"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("red", note)}
            className="card-color-btn red"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("orange", note)}
            className="card-color-btn orange"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("yellow", note)}
            className="card-color-btn yellow"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("green", note)}
            className="card-color-btn green"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("purple", note)}
            className="card-color-btn purple"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("pink", note)}
            className="card-color-btn pink"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
          <button
            onClick={() => applyColorOnCard("brown", note)}
            className="card-color-btn brown"
          >
            {" "}
            <MdOutlineFormatColorReset size={5} visibility={"hidden"} />{" "}
          </button>
        </div>
      )}

      {/* LABEL_BOX */}
      {showLabel && (
        <div className="note-lable-container">
          <div className="tag-selection-box">
            <div className="tag-box">
              <div className="tags">
                <input
                  name="work"
                  type="checkbox"
                  onClick={() => addTagsInArray("work")}
                  checked={note.tags.find((item) => item === "work")}
                />
                <label htmlFor="work">Work</label>
              </div>
              <div className="tags">
                <input
                  name="health"
                  type="checkbox"
                  onClick={() => addTagsInArray("health")}
                  checked={note.tags.find((item) => item === "health")}
                />
                <label htmlFor="work">Health</label>
              </div>
              <div className="tags">
                <input
                  name="fitness"
                  type="checkbox"
                  onClick={() => addTagsInArray("fitness")}
                  checked={note.tags.find((item) => item === "fitness")}
                />
                <label htmlFor="work">Fitness</label>
              </div>
            </div>
            <div className="tag-box">
              <div className="tags">
                <input
                  name="personal"
                  type="checkbox"
                  onClick={() => addTagsInArray("personal")}
                  checked={note.tags.find((item) => item === "personal")}
                />
                <label htmlFor="work">Personal</label>
              </div>
              <div className="tags">
                <input
                  name="study"
                  type="checkbox"
                  onClick={() => addTagsInArray("study")}
                  checked={note.tags.find((item) => item === "study")}
                />
                <label htmlFor="work">Study</label>
              </div>
              <div className="tags">
                <input
                  name="medication"
                  type="checkbox"
                  onClick={() => addTagsInArray("medication")}
                  checked={note.tags.find((item) => item === "medication")}
                />
                <label htmlFor="work">Medication</label>
              </div>
            </div>
          </div>
          <div className="note-tag-input">
            <input
              className="txt-editor-label-input"
              type="text"
              placeholder="Enter label here..."
              onChange={tagInputHandler}
            />
            <IoIosAdd
              onClick={addTagToCard}
              className="note-tag-btn"
              size={20}
            />
          </div>
        </div>
      )}
    </div>
  );
};
