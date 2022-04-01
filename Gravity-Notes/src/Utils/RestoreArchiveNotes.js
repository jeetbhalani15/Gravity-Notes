import axios from "axios"

export const restoreArchiveNote = async (note,authState,noteDispatch)=>{
    console.log(note)
    try {
        const res = await axios.post(`/api/archives/restore/${note._id}`, {}, { headers : { authorization: authState.token } }); 
        if(res.status===200){
            noteDispatch({type:"RESTORE_ARCHIVE_NOTE", payload: res.data})
        }
        console.log("res",res)
        alert("Notes Restored")
    } catch (error) {
        alert(error)
    }

}