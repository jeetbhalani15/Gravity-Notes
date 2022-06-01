import axios from "axios"
import toast from "react-hot-toast";

export const archiveNote = async (note,authState,noteDispatch, setFilter)=>{
    try {
        const res = await axios.post(`/api/notes/archives/${note._id}`, {note}, {headers : {authorization : authState.token}});
        if(res.status === 201){
            noteDispatch({type: "ARCHIVE_NOTE" , payload: res.data})
            setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
            noteDispatch({type:"CLEAR_FILTER"});
        }
        toast.success('Note Archived successfully!');
    } catch (error) {
        toast.error('Something went wrong!');
        console.log(error)
    }
}