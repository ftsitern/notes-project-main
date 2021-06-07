import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from "./styles1";
import moment from "moment";

export default function NoteDisplay({ note, deleteNotes, editNotes }) {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);
  var displayDate = moment().calendar();
  // var displayDate = currentdate.getDay() + "/" + currentdate.getMonth() 
  // + "/" + currentdate.getFullYear()+ "," + " "
  // + currentdate.getHours() + ":" 
  // + currentdate.getMinutes() + ":" + currentdate.getSeconds();

  const changeStyle = () => {
      if(isClicked)
          setClicked(false);
      else
          setClicked(true);
  }

  return (
    <>
      <Paper elevation={3} className={classes.root} style={{backgroundColor: "black"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h4>{note.title}</h4>
          <small>Created on {displayDate}</small>
        </div>
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
            style={{backgroundColor: "#ff8303"}}
          >
            Delete
          </button>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={editNotes}
            value={note.id}
            style={{backgroundColor: "#ff8303"}}
          >
            Edit ✏
          </button>
          <a type="button" onClick={changeStyle} style={{position: "relative", top: 5}}>{
              isClicked ? <FavoriteIcon style={{color: "#ff8303"}}/> : <FavoriteBorderIcon style={{color: "#ff8303"}}/>
          }
          </a>
        </div>
      </Paper>
    </>
  );
}

