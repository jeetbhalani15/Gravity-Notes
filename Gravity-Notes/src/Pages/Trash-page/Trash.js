import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { TrashCard } from "../../Components/Trash-card/TrashCard";
import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";

export const Trash = ()=>{
    const {authState} = useAuth();
    const {noteState, noteDispatch, setnote} = useNotes();
    return(
        <>
        <Navbar />
        <div className="body-content">
          <Sidebar />
          <div className="content">
            <div className="archive-content">
              <div className="archive-heading">
                <h1 className="txt-color">Trash({noteState.trashNotes.length})</h1>
              </div>
              {console.log(noteState.trashNotes)}
              {noteState.trashNotes.map((item)=><TrashCard key={item._id} trash={item}/>)}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}