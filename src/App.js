import './App.css';
import Notes from './Notes';
import NotesForm from "./NotesForm";

function App() {
  return (
    <div className="App">
      <div className="mynotes-app-background">
        <div className="mynotes-app-container">
            <header className="mynotes-container-header"><h1>My Notes</h1></header>
            <main className="mynotes-container-main">
                <section className="mynotes-container-form"><NotesForm /></section>
                <section className="mynotes-container-notes"><Notes/></section>
            </main>
        </div>
      </div>
    </div>
  );
}

export default App;
