import axios from "axios"

export const archiveNote = async (note,authState,noteDispatch, setFilter)=>{
    try {
        const res = await axios.post(`/api/notes/archives/${note._id}`, {note}, {headers : {authorization : authState.token}});
        if(res.status === 201){
            noteDispatch({type: "ARCHIVE_NOTE" , payload: res.data})
            setFilter(pre => ({...pre, priority: "", sortByDate: ""}))
            noteDispatch({type:"CLEAR_FILTER"});
        }
        alert("notes archived")
        console.log(res)
    } catch (error) {
        alert(error);
        console.log(error)
    }
}