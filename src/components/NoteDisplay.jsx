import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
<<<<<<< HEAD
=======
import { useStyles } from "./styles1";
>>>>>>> fa693501b86e7ec6392088d241953a3e6c4d05a9
import moment from "moment";
import "./animation.css";

export default function NoteDisplay({ note, deleteNotes, editNotes }) {
  const [isClicked, setClicked] = useState(false);

  const changeStyle = () => {
    if (isClicked) setClicked(false);
    else setClicked(true);
  };

  return (
    <>
      <Paper
        elevation={3}
<<<<<<< HEAD
=======
        className={classes.root}
>>>>>>> fa693501b86e7ec6392088d241953a3e6c4d05a9
        style={{
          backgroundColor: "black",
          "min-height": "7vh",
          margin: "10px",
<<<<<<< HEAD
          padding: 10,
        }}
        className="bounce-in-top"
      >
      <div style={{position: "relative", bottom: 20}}>
            <div style={{
                textAlign: 'right',
                position: 'relative',
                top: 20,
                color: 'white'
            }}>
            <small>
                {note.date}
            </small>
            </div>
            <div style={{ "margin-left": "10px" }}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
            </div>
      </div>
=======
        }}
        className="bounce-in-top"
      >
        <h4
          style={{
            "text-align": "right",
            "margin-right": "10px",
            color: "white",
          }}
        >
          {note.date}
        </h4>
        <div style={{ "margin-left": "10px" }}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
>>>>>>> fa693501b86e7ec6392088d241953a3e6c4d05a9
        <div
          className="car-button"
          style={{
            display: "flex",
            "justify-content": "space-around",
            "align-items": "space-around",
          }}
        >
          <button
            class="btn btn-primary"
            type="submit"
            onClick={deleteNotes}
            value={note.id}
            style={{ backgroundColor: "#ff8303" }}
          >
            Delete
          </button>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={editNotes}
            value={note.id}
            style={{ backgroundColor: "#ff8303" }}
          >
            Edit ✏
          </button>
          <a
            type="button"
            onClick={changeStyle}
            style={{ position: "relative", top: 5 }}
          >
            {isClicked ? (
              <FavoriteIcon style={{ color: "#ff8303" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "#ff8303" }} />
            )}
          </a>
        </div>
      </Paper>
    </>
  );
}
