import { Notecard } from "../../Components/Notes-card/Notecard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navigation/Navbar";
import "./Archive.css";
import { Footer } from "../../Components/Footer/Footer";
import { ArchiveCard } from "../../Components/Archive-card/ArchiveCard";
import { useNotes } from "../../Contexts/NotesAction-context";
import { MdOutlineArchive } from "react-icons/md";
import { useAuth } from "../../Contexts/Auth-context";

export const Archive = () => {
  const { noteState } = useNotes();
  const {authState} = useAuth();
  return (
    <>
      <Navbar />
      <div className="body-content">
        <Sidebar />
        <div className="content">
          <div className="archive-content">
            <div className="archive-heading">
              <h1 className="txt-color">
                Archive({noteState.archives.length})
              </h1>
            </div>
          </div>
          {noteState.archives.length === 0 ? (
            <>
              <div className="no-note-txt">
                <MdOutlineArchive color="grey" size={175} />
                <p className="no-note-pra">Your archived notes appear here</p>
              </div>
            </>
          ) : (
            <>
              {noteState.archives.map((item) => (
                <ArchiveCard key={item._id} archive={item} />
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
