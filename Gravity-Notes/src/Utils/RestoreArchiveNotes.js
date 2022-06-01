import axios from "axios"
import toast from "react-hot-toast";

export const restoreArchiveNote = async (note,authState,noteDispatch)=>{
    console.log(note)
    try {
        const res = await axios.post(`/api/archives/restore/${note._id}`, {}, { headers : { authorization: authState.token } }); 
        if(res.status===200){
            noteDispatch({type:"RESTORE_ARCHIVE_NOTE", payload: res.data})
        }
        console.log("res",res)
        toast.success('Note Restore Successfully!');
    } catch (error) {
        toast.error('Something went wrong!');
        alert(error)
    }

}