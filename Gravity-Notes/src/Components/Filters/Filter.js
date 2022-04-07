import { useNotes } from "../../Contexts/NotesAction-context";
import { Link } from "react-router-dom";
import {BsTagsFill} from "react-icons/bs";
import "./Filter.css";


export const Filter = ()=>{
    const{setFilter} = useNotes();
    const {filter, noteDispatch} = useNotes();

    const clearFilter = ()=>{
        setFilter(pre => ({...pre, priority: "", sortByDate: ""}));
        noteDispatch({type :"CLEAR_FILTER"});
    }

    const setPriorityHigh=()=>{
        setFilter(pre => ({...pre, priority:"High"}))
        noteDispatch({type:"SET_PRIORITY_HIGH", payload:"High"})
    }
    const setPriorityMedium=()=>{
        setFilter(pre => ({...pre, priority:"Medium"}))
        noteDispatch({type:"SET_PRIORITY_MEDIUM", payload:"Medium"})
    }
    const setPriorityLow=()=>{
        setFilter(pre => ({...pre, priority:"Low"}))
        noteDispatch({type:"SET_PRIORITY_LOW", payload:"Low"})
    }

    const setNewestDate = ()=>{
        setFilter(pre => ({...pre, sortByDate: "newest"}))
        setFilter(pre => ({...pre, priority: ""}))
        noteDispatch({type:"SORT_NEWEST_DATE"})
    }
    const setOldestDate = ()=>{
        setFilter(pre => ({...pre, sortByDate: "oldest"}))
        setFilter(pre => ({...pre, priority: ""}))
        noteDispatch({type:"SORT_OLDEST_DATE"})
    }
    return(
        <div className="filter-box">
        <div className="filter-header">
          <h2>Filterts</h2>
          <h3 onClick={()=>clearFilter()} className="underline">Reset</h3>
        </div>
        <hr/>
        <div className="filter-body">
          <div className="filters">
            <h1 className="filter-sub-heading">Sort by Priority</h1>
            <ul className="filter-list">
              <li className="filter-items">
                <input type="radio" name="priority" checked={filter.priority === "High"} onChange={()=>setPriorityHigh()}/>
                <label htmlFor="high">High</label>
              </li>
              <li className="filter-items">
                <input type="radio" name="priority" checked={filter.priority === "Medium"} onChange={()=>setPriorityMedium()}/>
                <label htmlFor="high">Medium</label>
              </li>
              <li className="filter-items">
                <input type="radio" name="priority" checked={filter.priority === "Low"} onChange={()=>setPriorityLow()}/>
                <label htmlFor="high">Low</label>
              </li>
              
            </ul>
          </div>
          <div className="filters">
            <h1 className="filter-sub-heading">Sort by Date</h1>
            <hr/>
            <ul className="filter-list">
              <li className="filter-items">
                <input type="radio" name="date" checked={filter.sortByDate === "newest"} onChange={()=>setNewestDate()}/>
                <label htmlFor="newest">Newest</label>
              </li>
              <li className="filter-items">
                <input type="radio" name="date" checked={filter.sortByDate === "oldest"} onChange={()=>setOldestDate()}/>
                <label htmlFor="oldest">Oldest</label>
              </li>
            </ul>
          </div>
          <div className="filters">
                    <h1 className="filter-sub-heading">Sort by Tags</h1>
                    <hr />
                 <div className="tag-filter">
                <span className="cursor">get <strong className="bold-txt">Sort By Tags</strong>  From </span>
                <p className="underline"><Link to={"/label"}>Tags <BsTagsFill color="grey" size={12} /></Link></p>
           </div>
        </div>

        </div>
      </div>
    );
}