export const notesReducer =(state,{type,payload})=>{
        switch (type) {
            case "ADD_NOTES":
                return {...state, notes: payload}
            case "DELETE_NOTES":
                return {...state, notes: payload}
                
            
        
            default:
                return{...state};
        }
    
}  

// const deleteNotes = state.notes.filter((item)=> item._id !== payload._id)