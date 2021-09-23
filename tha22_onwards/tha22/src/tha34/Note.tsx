import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addNote } from './actions';
import { NewNoteInput } from './NewNoteInput';
import {NotesState} from './notesReducer';
function App() {
  const notes= useSelector<NotesState,NotesState["notes"]>((state)=> state.notes)

  const dispatch= useDispatch()


  const onAddNote= (note: string)=>{
    dispatch(addNote(note))
  };
  return (
    <>
    <NewNoteInput addNote={onAddNote} />
    <hr/>
    <ul>
      {notes.map((note)=>{
      return  <li key={note}>{note}</li>;
      })}
    </ul>
    </>
  );
}

export default App;