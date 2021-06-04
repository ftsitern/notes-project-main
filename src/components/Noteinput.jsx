import React, { useState } from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import NoteDisplay from './NoteDisplay';

export default function Noteinput() {
    const [note, setNote] = useState({ title: " " , content: " " });
    const [notes, setNotes] = useState([]);
    const classes = useStyles();

    // const deleteNotes = () => {  to done by chand
        
    // }

    // const editNotes = () => {  to do by satwik

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes((prevNotes) => {
            return [...prevNotes, note]
        });
    }

    return (
        
        <>
            <Paper elevation={3} className={classes.root}>
                <form onSubmit={handleSubmit} style={{width: '90%'}}>
                <div class="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={note.title} onChange={(e) => setNote({...note, title: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Write note</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={note.content} onChange={(e) => setNote({...note, content : e.target.value})}></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Add Note</button>
                </form>
            </Paper>
            <div className="container" style={{position: 'relative', top: 100}}>
                <div className="row">
                    {notes.length === 0 ? null : 
                    notes.map((note) => (
                        <div className="col-sm-3">
                            <NoteDisplay note={note}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}
