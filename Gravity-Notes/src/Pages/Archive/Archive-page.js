import { Notecard } from "../../Components/Notes-card/Notecard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navigation/Navbar";
import "./Archive.css";
import { Footer } from "../../Components/Footer/Footer";
import { ArchiveCard } from "../../Components/Archive-card/ArchiveCard";
import { useNotes } from "../../Contexts/NotesAction-context";

export const Archive = () => {
    const {noteState} = useNotes();
  return (
    <>
      <Navbar />
      <div className="body-content">
        <Sidebar />
        <div className="content">
          <div className="archive-content">
            <div className="archive-heading">
              <h1 className="txt-color">Archive({noteState.archives.length})</h1>
            </div>
            {console.log(noteState.archives)}
            {noteState.archives.map((item)=><ArchiveCard key={item._id} archive={item}/>)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};