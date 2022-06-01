import axios from "axios"
import toast from "react-hot-toast";

 export const editNote = async (note, authState, noteDispatch, setNote) => {
    console.log(note)
    try {
        
        const res = await axios.post(`/api/notes/${note._id}`, { note }, { headers : { authorization: authState.token } }); 
            noteDispatch({type : "EDIT_NOTE", payload : res.data.notes });
            setNote(pre => ({ ...pre, title : "", content : "", color:"", flag: false  }));
            toast.success('Note Edited Successfully!')
        
    } catch (error) {
        // toast.error('Something went wrong!');
        return
       
    }
}