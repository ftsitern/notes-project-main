import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles1'

export default function NoteDisplay({note, deleteNotes}) {
    const classes = useStyles();
    const [color, setColor] = useState("fdfdfd");

    

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                <div className="car-button" style={{display: "flex"}}>
                    <button class="btn btn-primary" type="submit" onClick={deleteNotes} value={note.id}>Delete</button>
                    <button class="btn btn-primary" type="submit" onClick={()=>setStyle("#12B0E8")}>Bookmark</button>
                </div>
            </Paper>
        </>
    )
}
