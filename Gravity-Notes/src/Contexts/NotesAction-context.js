import {createContext, useContext, useReducer, useState} from "react"
import { notesReducer } from "../Reducers/NotesReducer";
const notesContext = createContext();

const NotesProvider =({children})=>{

    // useState For Note Array
    const [note,setNote] = useState({title:'', content:'', date:'', _id: "", color:"", flag: false });

    // useState For Colors Array
    const [color, setColor] = useState('');
     
    // useReducer For Note Actions
    const [noteState, noteDispatch] = useReducer( notesReducer ,{notes: [], archives: [], trashNotes:[], date: ''})
    console.log(noteState.notes)
 return(
     <notesContext.Provider value={{noteState, noteDispatch, note, setNote, color, setColor}}>
         {children}
     </notesContext.Provider>
 );
}

const useNotes = ()=> useContext(notesContext) ;
export {useNotes, NotesProvider}
