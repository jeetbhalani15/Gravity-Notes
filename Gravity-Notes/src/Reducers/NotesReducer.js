export const notesReducer =(state,{type,payload})=>{
        switch (type) {
            case "ADD_NOTES":
                return {...state, notes: payload, finalNoteData: payload }
            case "DELETE_NOTES":
                return {...state, notes: payload, finalNoteData: payload}
            case "EDIT_NOTE":
                return {...state, notes: payload, finalNoteData: payload}
            case "ARCHIVE_NOTE":
                return {...state, notes: payload.notes, archives: payload.archives, finalNoteData: payload.notes}
            case "RESTORE_ARCHIVE_NOTE":
                return {...state, notes: payload.notes, archives: payload.archives, finalNoteData: payload.notes}
            case "DELETE_ARCHIVE_NOTE":
                return {...state, archives: payload}
            case "TRASH_NOTE":
                return {...state, trashNotes: [...state.trashNotes, payload]}
            case "DELETE_FROM_TRASH":
                return {...state, trashNotes: state.trashNotes.filter((item)=> item._id !== payload._id) }
            case "RESTORE_FROM_TRASH":
                return {...state, trashNotes: state.trashNotes.filter((item)=> item._id !== payload._id)}
            case "ADD_COLOR_ON_CARD":
                return {...state, notes :payload, finalNoteData : payload}
            case "ADD_LABEL":
                return {...state, label: [...state.label, payload ]}      
            case "SET_PRIORITY_HIGH":
                return {...state, notes: state.finalNoteData.filter(item => item.priority === payload)}      
            case "SET_PRIORITY_MEDIUM":
                return {...state, notes: state.finalNoteData.filter(item => item.priority === payload)}      
            case "SET_PRIORITY_LOW":
                return {...state, notes: state.finalNoteData.filter(item => item.priority === payload)}      
            case "SORT_NEWEST_DATE":
                return {...state, notes: state.notes.sort((a,b) => Number(b.time) - Number(a.time)) }      
            case "SORT_OLDEST_DATE":
                return {...state, notes: state.notes.sort((a,b) => Number(a.time) - Number(b.time)) } 
            case "CLEAR_FILTER":
                return {...state, notes: state.finalNoteData}        
            default:
                return{...state};
        }
    
}  

