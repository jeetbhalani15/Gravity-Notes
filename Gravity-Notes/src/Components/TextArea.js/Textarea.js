import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Notecard } from "../Notes-card.js/Notecard";
import {axios} from "axios";
import "./Textarea.css";

export const Textarea = () => {
  const [isExpanded, setisExpanded] = useState(false);

  // handle expand of textbox on click
 const handleExpand=()=> {
    setisExpanded(true);
  }
  // onclick add notes 
 return (
    // Textarea Component
    <div>
      <form className="textarea-form">
        {isExpanded && (<input
            value={''}
            type="text"
            placeholder="Title"
            name="title"
          />
        )}
        <p>
          <textarea
            value={''}
            onClick={handleExpand}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button>
          <IoIosAdd size={35} />
        </button>
      </form>

    {/* Note card component */}

    
        <Notecard  />
  
    </div>
  );
};
