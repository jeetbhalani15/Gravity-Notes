import axios from "axios"

export const deleteFromArchive = async (note,authState,noteDispatch)=>{
    try {
        const res = await axios.delete(`/api/archives/delete/${note._id}`,{headers:{authorization: authState.token}})
        if(res.status === 200){
            noteDispatch({type: "DELETE_ARCHIVE_NOTE", payload: res.data.archives})
        }
        alert("NOTES DELETED")
    } catch (error) {
        alert(error)
    }
}