import './Notes.css'
import axios from 'axios';
import { useEffect, useState } from "react";

const REST_API_BASE_URL = 'http://localhost:8080/api/notes';

const listNotes = () => { return axios.get(REST_API_BASE_URL) }

function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        listNotes().then((response) => {
            setNotes(response.data)
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <div className="notes-div">
            {notes.map(note =>
                <div key={note.id} className="note-container">
                    <h3>{note.note_title}</h3>
                    <p>{note.note_text}</p>
                    <footer className="note-container-footer">
                        <p>Created at: {note.created_at}</p>
                        <p>ID: {note.id}</p>
                    </footer>
                </div>
            )}
        </div>
    )
}

export default Notes
