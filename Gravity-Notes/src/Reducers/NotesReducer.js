export const notesReducer =(state,{type,payload})=>{
        switch (type) {
            case "ADD_NOTES":
                return {...state, notes: payload}
            case "DELETE_NOTES":
                return {...state, notes: payload}
            case "EDIT_NOTE":
                return {...state, notes: payload}
            case "ARCHIVE_NOTE":
                return {...state, notes: payload.notes, archives: payload.archives}
            case "RESTORE_ARCHIVE_NOTE":
                return {...state, notes: payload.notes, archives: payload.archives}
            case "DELETE_ARCHIVE_NOTE":
                return {...state, archives: payload}
            case "TRASH_NOTE":
                return {...state, trashNotes: [...state.trashNotes, payload]}
            case "DELETE_FROM_TRASH":
                return {...state, trashNotes: state.trashNotes.filter((item)=> item._id !== payload._id) }
            case "RESTORE_FROM_TRASH":
                return {...state, trashNotes: state.trashNotes.filter((item)=> item._id !== payload._id)}
                
            
        
            default:
                return{...state};
        }
    
}  

// const deleteNotes = state.notes.filter((item)=> item._id !== payload._id)