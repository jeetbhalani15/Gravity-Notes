import { Sidebar } from "../Sidebar/Sidebar";
import { Textarea } from "../TextArea.js/Textarea";
import "./Bodycontent.css";


export const Bodycontent = ()=>{
    return(
        <>
        <div className="body-content">
         <Sidebar/>
        <div className="content">
        <Textarea/>
        </div>
        </div>
        </>
    );
}