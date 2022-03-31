import {createContext, useContext, useReducer} from "react"
import { notesReducer } from "../Reducers/NotesReducer";
const notesContext = createContext();

const NotesProvider =({children})=>{
    const [noteState, noteDispatch] = useReducer( notesReducer ,{notes: [], date: ''})
 return(
     <notesContext.Provider value={{noteState, noteDispatch}}>
         {children}
     </notesContext.Provider>
 );
}

const useNotes = ()=> useContext(notesContext) ;
export {useNotes, NotesProvider}
