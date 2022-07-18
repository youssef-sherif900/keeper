import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreatArea";

function App(){

const[notes,setNotes]= useState([]);

    function addnote(note){
    setNotes(prevalue =>{
        return[...prevalue,note]
    })
    }

    function deleteNote(id){
      setNotes( prevalue =>{ return prevalue.filter((noteItem,index)=>{
          return index !== id;
      }) } )
    }


    return(
<div>
<Header />
<CreateArea
onAdd={addnote} />
{notes.map((noteItem,index) =>{ return(
<Note 
key={index}
id={index}
title={noteItem.title}
 content={noteItem.content}
 onDelete={deleteNote} />
)
})}
<Footer />
</div>
    )}
export default App;