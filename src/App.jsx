import './App.css'
import { Footer } from './components/footer'
import {Header} from './components/header'
import { Note } from './components/note'
//import {notes} from './data/notes.js'
import { CreateArea } from './components/createArea'
import { useEffect, useState } from 'react'
import toast,{ Toaster } from 'react-hot-toast'

function App() {
  const [notesArr,setNotesArr] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || []
  });
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notesArr))
  },[notesArr])
  function deleteNote(id){
    setNotesArr((prev) => {
      return prev.filter((item,index) => index!=id);
    })
    toast.error('Removed')
  } 
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header/>
      <CreateArea setNotesArr={setNotesArr}/>
      {
        notesArr.map((item,index) => 
          <Note 
            key={index}
            id={index} 
            title={item.title} 
            content={item.content} 
            deleteNote={deleteNote}
          />)
      }
      <Footer/>
    </>
  )
}

export default App
