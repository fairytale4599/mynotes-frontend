import './Notes.css'
import axios from 'axios';
import { useEffect, useState } from "react";

const REST_API_BASE_URL = 'http://localhost:8080/api/notes';

const listNotes = () => axios.get(REST_API_BASE_URL);
const getNoteById = (noteId) => axios.get(`${REST_API_BASE_URL}/${noteId}`);

function Notes({ noteId }) {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState(null);

    useEffect(() => {
        if (noteId) {
            getNoteById(noteId).then(response => {
                setNote(response.data);
            }).catch(error => {
                console.error(error);
            });
        } else {
            listNotes().then(response => {
                setNotes(response.data);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [noteId]);

    return (
        <div className="notes-div">
            {noteId ? (
                note && (
                    <div key={note.id} className="note-container">
                        <h3>{note.note_title}</h3>
                        <p>{note.note_text}</p>
                        <footer className="note-container-footer">
                            <p>Created at: {note.created_at}</p>
                            <p>ID: {note.id}</p>
                        </footer>
                    </div>
                )
            ) : (
                notes.map(n => (
                    <div key={n.id} className="note-container">
                        <h3>{n.note_title}</h3>
                        <p>{n.note_text}</p>
                        <footer className="note-container-footer">
                            <p>Created at: {n.created_at}</p>
                            <p>ID: {n.id}</p>
                        </footer>
                    </div>
                ))
            )}
        </div>
    );
}

export default Notes;
