import {createContext, useContext, useReducer, useState} from "react"
import { notesReducer } from "../Reducers/NotesReducer";
const notesContext = createContext();

const NotesProvider =({children})=>{

    // useState For Note Array
    const [note,setNote] = useState({title:'', content:'', date:'', _id: "", color:"", priority:"", tags:[], flag: false });

    // Search Query
    const [searchQuery, setSearchQuery] = useState("");
     
    // useState for Filter
    const [filter, setFilter] = useState({priority: "", sortByDate: ""});
    // useState For Colors Array
    const [color, setColor] = useState('');
     
    // useReducer For Note Actions
    const [noteState, noteDispatch] = useReducer( notesReducer ,{notes: [], archives: [], trashNotes:[], finalNoteData:[], date: '', })
    console.log(noteState.notes)
 return(
     <notesContext.Provider value={{noteState, noteDispatch, note, setNote, color, setColor , filter, setFilter,searchQuery,setSearchQuery}}>
         {children}
     </notesContext.Provider>
 );
}

const useNotes = ()=> useContext(notesContext) ;
export {useNotes, NotesProvider}
