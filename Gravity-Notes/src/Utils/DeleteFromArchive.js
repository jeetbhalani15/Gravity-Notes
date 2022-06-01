import axios from "axios"
import toast from "react-hot-toast"

export const deleteFromArchive = async (note,authState,noteDispatch)=>{
    try {
        const res = await axios.delete(`/api/archives/delete/${note._id}`,{headers:{authorization: authState.token}})
        if(res.status === 200){
            noteDispatch({type: "DELETE_ARCHIVE_NOTE", payload: res.data.archives})
        }
        toast.success(' Archive Note Deleted!');
    } catch (error) {
        // toast.error('Something went wrong!');
    }
}