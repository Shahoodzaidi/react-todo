
import './App.css';
import Navbar from './components/Nav';
import TexTarea from './components/Textarea';
import React,{useState} from 'react'

function App() {
  const [mode,setMode]=useState("black")
  const modeChange=()=>{
   if (mode == "black") {
       setMode("white")
      
   }
   else{
    setMode("black")
   
   }

  }
  return (
    <div>
         <Navbar mode = {mode} change = {modeChange}/>
        <TexTarea mode = {mode} />
    
    </div>
  );
}

export default App;
