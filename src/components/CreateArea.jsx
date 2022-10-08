import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const [showInputArea, setShowInputArea] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  }

  function expandInputArea() {
    setShowInputArea(true);
  }

  return (
    <div>
      <form className="create-note">
        { showInputArea  && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          onClick={expandInputArea}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={ showInputArea  ? "3" : "1"}
          value={newNote.content}
        />
        <Zoom in={ showInputArea  ? true : false}>
          <Fab
            onClick={(event) => {
              props.addNote(newNote);
              setNewNote({
                title: "",
                content: "",
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
