import axios from "axios"

  export const deleteNote = async (item,authState,noteDispatch, setNote)=>{
    console.log("delete")
    console.log(authState.token)
    console.log(item._id)
    try {
        
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization : authState.token}})
        console.log(res)
        if(res.status === 200){
            noteDispatch({type:"DELETE_NOTES", payload: res.data.notes})
            noteDispatch({type: "TRASH_NOTE", payload: item})
            setNote((pre)=>({...pre, title:'', content: '', flag: false}))
        }
        
    } catch (error) {
        console.log(error)
    }
 }