import { useState } from "react";
import toast from "react-hot-toast";

export function CreateArea({setNotesArr}) {
  const [note,setNote] = useState({
    title:'',
    content:''
  })
  function handleChange(e){
    const {name,value} = e.target;
    setNote({
      ...note,
      [name]: value
    })
  }
  function addNote(e){
    e.preventDefault();
    if(note.title != '' && note.content != ''){
      setNotesArr((prev) => {
        return [...prev,note];
      })
      setNote({
        title:'',
        content:''
      });
      toast.success('Added')
    }
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}