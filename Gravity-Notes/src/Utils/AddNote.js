import axios from "axios";
import toast from "react-hot-toast";

 export const addNoteHandler = async (e,note, setNote, noteDispatch, authState)=>{
    e.preventDefault();
  
    
   try {
     const res = await axios.post("/api/notes", { note }, { headers : {authorization: authState.token}});
     
     if(res.status === 201){
       setNote(pre =>({...pre, title: "", content: "", color:""}));
       noteDispatch({type : "ADD_NOTES", payload: res.data.notes});
       toast.success('Note Add Successfully!');
     }
     
   } catch (error) {
     toast.error('Something went wrong!');
     console.log(error)
   }
 

}