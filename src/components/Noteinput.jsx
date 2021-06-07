import React, { useState } from "react";
import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import NoteDisplay from "./NoteDisplay";
import uniqueString from "unique-string";

export default function Noteinput() {
  const [note, setNote] = useState({
    id: " ",
    title: " ",
    content: " ",
    edited: false,
    date: "",
  });
  const [notes, setNotes] = useState([]);
  const classes = useStyles();

  const getTimeStamp = () => {
    let d = new Date();
    return d.toString().slice(3, 21);
  };

  const deleteNotes = (e) => {
    const newnotes = notes.filter((value) => {
      return value.id !== e.target.value;
    });
    setNotes(newnotes);
  };

  const editNotes = (e) => {
    const noteToBeEdited = notes.find((value) => value.id === e.target.value);
    noteToBeEdited.edited = true;
    setNote(noteToBeEdited);
    console.log(noteToBeEdited);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotes = notes.filter((value) => value.edited === false);
    setNotes(newNotes);
    note.edited = false;
    note.date = getTimeStamp();
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote({ id: " ", title: " ", content: " ", edited: false });
    console.log(note);
  };

  return (
    <>
      <Paper
        elevation={3}
        className={classes.root}
        style={{ backgroundColor: "black" }}
      >
        <form onSubmit={handleSubmit} style={{ width: "90%" }}>
          <div class="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Write note</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            ></textarea>
          </div>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() =>
              setNote({ ...note, id: uniqueString(), date: getTimeStamp() })
            }
            style={{ backgroundColor: "#ff8303" }}
          >
            Add Note
          </button>
        </form>
      </Paper>
      <div className="container" style={{ position: "relative", top: 100 }}>
        <div className="row">
          {notes.length === 0
            ? null
            : notes.map((note) => (
                <div className="col-sm-3">
                  <NoteDisplay
                    note={note}
                    deleteNotes={deleteNotes}
                    editNotes={editNotes}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}