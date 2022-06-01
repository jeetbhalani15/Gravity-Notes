import axios from "axios"
import toast from "react-hot-toast"

  export const deleteNote = async (item,authState,noteDispatch, setNote, setFilter)=>{
    try {
        
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization : authState.token}})
        console.log(res)
        if(res.status === 200){
            noteDispatch({type:"DELETE_NOTES", payload: res.data.notes})
            toast.success('Moved to Trash!');
            noteDispatch({type: "TRASH_NOTE", payload: item})
            setNote((pre)=>({...pre, title:'', content: '', flag: false}))
            setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
            noteDispatch({type:"CLEAR_FILTER"});
            
        }
        
    } catch (error) {
        // toast.error('Something went wrong!');
        console.log(error)
    }
 }