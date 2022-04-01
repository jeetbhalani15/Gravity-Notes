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
                
            
        
            default:
                return{...state};
        }
    
}  

// const deleteNotes = state.notes.filter((item)=> item._id !== payload._id)