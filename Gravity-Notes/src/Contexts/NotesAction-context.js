import {createContext, useContext, useReducer, useState} from "react"
import { notesReducer } from "../Reducers/NotesReducer";
const notesContext = createContext();

const NotesProvider =({children})=>{

    // useState For Note Array
    const [note,setNote] = useState({title:'', content:'', date:'', id: "", flag: false });
     
    // useReducer For Note Actions
    const [noteState, noteDispatch] = useReducer( notesReducer ,{notes: [], archives: [], date: ''})
    console.log(noteState.notes)
 return(
     <notesContext.Provider value={{noteState, noteDispatch, note, setNote}}>
         {children}
     </notesContext.Provider>
 );
}

const useNotes = ()=> useContext(notesContext) ;
export {useNotes, NotesProvider}
