import React, { useState } from "react";
import "./Board.css";
import Note from "./Note";

function Board() {

    const [notes, setNotes] = useState([]);
    const addNote = () => {
        setNotes( arr => [...arr, { id: Date.now() }] );
    }
    const handleDelete = (id) => {
        setNotes( arr => arr.filter( note => note.id !== id ) );
    };
    
  return (
    <div>
      <div className="div-board">
        <div className="row">
          {
            notes.map((note) => {
            return <Note key={note.id} id={note.id} title={note.title} body={note.body} handleDelete={handleDelete}/>
            })
        }
        </div>
      </div>
      <div>
        <button className="btn btn-success add-button" onClick={addNote}>Add</button>
      </div>
    </div>
  );
}

export default Board;
