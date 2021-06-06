import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from "./styles1";

export default function NoteDisplay({ note, deleteNotes, editNotes }) {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);

  const changeStyle = () => {
      if(isClicked)
          setClicked(false);
      else
          setClicked(true);
  }

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <div
          className="car-button"
          style={{ display: "flex", "justify-content": "space-between" }}
        >
          <button
            class="btn btn-primary"
            type="submit"
            onClick={deleteNotes}
            value={note.id}
          >
            Delete
          </button>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={editNotes}
            value={note.id}
          >
            Edit ✏
          </button>
          <a type="button" onClick={changeStyle} style={{position: "relative", top: 5}}>{
              isClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />
          }
          </a>
        </div>
      </Paper>
    </>
  );
}

