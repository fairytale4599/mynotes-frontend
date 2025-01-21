import React, { useState, useEffect, useRef } from 'react';
import FormWork from './FormWork';
import './NotesForm.css';

function NotesForm() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputID, setInputID] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("create");
    const [message, setMessage] = useState("");

    const messageRef = useRef(null);

    useEffect(() => {
        const handleRadioChange = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
        };
        handleRadioChange();
    }, [selectedRadio]);

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.id);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await FormWork(inputTitle, inputText, inputID);
        setMessage(result);

        if (result.includes("Error")) {
            messageRef.current.style.color = "#f55442";
        } else {
            messageRef.current.style.color = "#28a745";
        }
    };

    return (
        <form onSubmit={handleSubmit} id="form-notes">
            {selectedRadio === "create" && (
                <>
                    <h3 id="note-title-header">Title:</h3>
                    <input
                        type="text"
                        id="note-title"
                        placeholder="Your title"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <h3 id="note-text-header">Text:</h3>
                    <input
                        type="text"
                        id="note-text"
                        placeholder="Your text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </>
            )}
            {selectedRadio === "update" && (
                <>
                    <h3 id="note-title-header">Title:</h3>
                    <input
                        type="text"
                        id="note-title"
                        placeholder="Your title"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <h3 id="note-text-header">Text:</h3>
                    <input
                        type="text"
                        id="note-text"
                        placeholder="Your text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <h3 id="note-id-header">ID:</h3>
                    <input
                        type="text"
                        id="note-ID"
                        placeholder="Your ID"
                        value={inputID}
                        onChange={(e) => setInputID(e.target.value)}
                    />
                </>
            )}
            {selectedRadio === "delete" && (
                <>
                    <h3 id="note-id-header">ID:</h3>
                    <input
                        type="text"
                        id="note-ID"
                        placeholder="Your ID"
                        value={inputID}
                        onChange={(e) => setInputID(e.target.value)}
                    />
                </>
            )}
            <button type="submit">Submit</button>
            <div className="form-radio">
                <input
                    type="radio"
                    id="create"
                    name="radio"
                    checked={selectedRadio === "create"}
                    onChange={handleRadioChange}
                /> Create
                <input
                    type="radio"
                    id="update"
                    name="radio"
                    checked={selectedRadio === "update"}
                    onChange={handleRadioChange}
                /> Update
                <input
                    type="radio"
                    id="delete"
                    name="radio"
                    checked={selectedRadio === "delete"}
                    onChange={handleRadioChange}
                /> Delete
            </div>
            <p ref={messageRef}>{message}</p>
        </form>
    );
}

export default NotesForm;
