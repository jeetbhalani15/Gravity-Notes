import { VscTrash } from "react-icons/vsc";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { TrashCard } from "../../Components/Trash-card/TrashCard";
import { useAuth } from "../../Contexts/Auth-context";
import { useNotes } from "../../Contexts/NotesAction-context";

export const Trash = () => {
  const { authState } = useAuth();
  const { noteState, noteDispatch, setnote } = useNotes();
  return (
    <>
      <Navbar />
      <div className="body-content">
        <Sidebar />
        <div className="content">
          <div className="archive-content">
            <div className="archive-heading">
              <h1 className="txt-color">
                Trash({noteState.trashNotes.length})
              </h1>
            </div>
          </div>
          {noteState.trashNotes.length === 0 ? (
            <>
              <div className="no-note-txt">
                <VscTrash color="grey" size={175} />
                <p className="no-note-pra">Your trash notes appear here</p>
              </div>
            </>
          ) : (
            <>
              {noteState.trashNotes.map((item) => (
                <TrashCard key={item._id} trash={item} />
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
