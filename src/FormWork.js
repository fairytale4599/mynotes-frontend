import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/notes';
const consoleLogElement = document.getElementById("cons-log")

const FormWork = async (noteTitle, noteText, noteID) => {
    let consoleLog = "";
    for (var i = 0; i < document.getElementsByName("radio").length; i++) {
        if (document.getElementsByName("radio")[i].checked) {
            if (i === 0) {
                try {
                    await axios.post(REST_API_BASE_URL, {
                        "note_title": noteTitle,
                        "note_text": noteText,
                    });
                    consoleLog = "Note has been added, please restart the page";
                } catch (error) {
                    consoleLog = "Error adding note: " + error;
                }
            } else if (i === 1) {
                try {
                    await axios.put(`http://localhost:8080/api/notes/${noteID}`, {
                        "id": noteID,
                        "note_title": noteTitle,
                        "note_text": noteText,
                    });
                    consoleLog = "Note has been updated, please restart the page";
                } catch (error) {
                    consoleLog = "Error updating note: " + error;
                }
            } else if (i === 2) {
                try {
                    await axios.delete(`http://localhost:8080/api/notes/${noteID}`);
                    consoleLog = "Note has been deleted, please restart the page";
                } catch (error) {
                    consoleLog = "Error deleting note: " + error;
                }
            }
        }
    }
    return consoleLog;
};

export default FormWork;