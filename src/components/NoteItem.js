import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(noteContext)
    const {deleteNote, editNote} = context;
    return (
        <>
            <div className="col-md-3 my-3">
                <div className="card">
                    <div className="card-header">
                        {note.tag}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="far fa-trash-alt" onClick={()=>deleteNote(note._id)}></i>
                        <i className="far fa-edit mx-3" onClick={()=>editNote()}></i>
                    </div>
                    <div className="card-footer text-muted">
                        {note.date}
                    </div>
                </div>
            </div>
        </>
    )
}