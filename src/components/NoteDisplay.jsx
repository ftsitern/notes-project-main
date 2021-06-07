import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./styles1";
import moment from "moment";
import "./animation.css";

export default function NoteDisplay({ note, deleteNotes, editNotes }) {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);

  const changeStyle = () => {
    if (isClicked) setClicked(false);
    else setClicked(true);
  };

  return (
    <>
      <Paper
        elevation={3}
        className={classes.root}
        style={{
          backgroundColor: "black",
          "min-height": "7vh",
          margin: "10px",
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
