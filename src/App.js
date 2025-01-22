import './App.css';
import Notes from './Notes';
import NotesForm from "./NotesForm";
import { useState } from 'react';

function App() {
    const [noteId, setNoteId] = useState('');

    const handleInputChange = (e) => {
        setNoteId(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <div className="mynotes-app-background">
                <div className="mynotes-app-container">
                    <header className="mynotes-container-header"><h1>My Notes</h1></header>
                    <main className="mynotes-container-main">
                        <section className="mynotes-container-form">
                            <NotesForm />
                            <form onSubmit={handleFormSubmit} className="input-search">
                                <input
                                    type="text"
                                    placeholder="Enter note ID"
                                    value={noteId}
                                    onChange={handleInputChange}
                                />
                            </form>
                        </section>
                        <section className="mynotes-container-notes">
                            <Notes noteId={noteId} />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
