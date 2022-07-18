import React,{useState} from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@mui/material/Fab';



function CreateArea(props) {


  const[isExpanded,setExpanded]=useState(false);

    const[note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevalue =>{
            return{
                ...prevalue,
                [name] : value
            }
        } )
    }

function handleClick(event){
    props.onAdd(note)
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
}

  
  function expand(){
    setExpanded(true)
  };

  return (
    <div>
      <form className="create-note">


     {isExpanded && (
        <input onChange={handleChange}
         name="title" 
         placeholder="Title" 
          value={note.title}
        />
        )}

        
        <textarea onChange={handleChange} name="content" onClick={expand} placeholder="Take a note..." rows={isExpanded?3:1} value={note.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={handleClick} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
