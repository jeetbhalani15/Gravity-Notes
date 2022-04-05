import { MdOutlineEdit, MdOutlineHealthAndSafety, MdPersonalInjury, MdWorkOutline } from "react-icons/md";
import { ArchiveCard } from "../../Components/Archive-card/ArchiveCard";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { TagCard } from "../../Components/Tags-card/TagCard";
import { useNotes } from "../../Contexts/NotesAction-context";
import {CgWorkAlt} from "react-icons";
import "./Tagpage.css"
import { ImBooks } from "react-icons/im";
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";

export const Tags = ()=>{
  const {note,noteState} = useNotes();
return(
    <>
    <Navbar />
    <div className="body-content">
      <Sidebar />
      <div className="content">
        <div className="archive-content">
          <div className="archive-heading">
             <h1 className="txt-color">
              Label/Tags({note.tags.length})
            </h1>
          </div>
        </div>
        {note.tags.length === 0 ? (
          <>
            <div className="no-note-txt">
              <MdOutlineEdit color="grey" size={175} />
              <p className="no-note-pra">Your Labels appear here</p>
            </div>
          </>
        ) : (
          <>
          <div className="tag-container">
            <section>
              <span><h1 className="tag-logo">Work <MdWorkOutline color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "work")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">Health <MdOutlineHealthAndSafety color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "health")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">Study <ImBooks color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "study")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">personal <MdPersonalInjury color="grey" size={22}/></h1> </span> 
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "personal")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">Fitness <IoIosFitness color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "fitness")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">Medication <IoFitness color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                  if(item.tags.find(tag => tag === "medication")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
            <section>
              <span><h1 className="tag-logo">Others <VscNote color="grey" size={22}/></h1> </span>
              <div className="tag-notes">
                {noteState.notes.map(item =>{
                 if(item.tags.find(tag => tag !== "work" && tag !== "personal" && tag !== "health" && tag !== "medication" && tag !== "fitness" && tag !== "study")){
                    return  <TagCard key={item._id} tag={item} />
                  }
                })}
              </div>
            </section>
          </div>
            {/* {note.tags.map((item) => (
              <TagCard key={item._id} tag={item} />
            ))} */}
          </>
        )}
      </div>
    </div>
    <Footer />
  </>
);
}