import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles1'

export default function NoteDisplay({note}) {
    const classes = useStyles();
    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                <div className="car-button" style={{display: "flex"}}>
                    <button class="btn btn-primary" type="submit">Delete</button>
                </div>
            </Paper>
        </>
    )
}
