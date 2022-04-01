import axios from "axios"

  export const deleteNote = async (item,authState,noteDispatch)=>{
    console.log("delete")
    console.log(authState.token)
    console.log(item._id)
    try {
        
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization : authState.token}})
        console.log(res)
        if(res.status === 200){
            noteDispatch({type:"DELETE_NOTES", payload: res.data.notes})
        }
        
    } catch (error) {
        console.log(error)
    }
 }