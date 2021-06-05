import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles1'
import { colors } from '@material-ui/core';


export default function NoteDisplay({note, deleteNotes}) {
    const classes = useStyles();
    const [color, setColor] = useState("fdfdfd");

    const setStyle = (color) =>{
        setColor(color);
    }
    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                <style>{color}</style>
                <div className="car-button" style={{display: "flex"}}>
                    <button class="btn btn-primary" type="submit" onClick={deleteNotes} value={note.id}>Delete</button>
                    <span/>
                    <button class="btn btn-primary" type="submit" onClick={()=>setStyle("#12B0E8")}>Bookmark</button>
                </div>
            </Paper>
        </>
    )
}
