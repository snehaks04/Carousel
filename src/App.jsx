import { useState } from 'react'

import './App.css'


 
const images=["https://images.unsplash.com/photo-1692427741122-f6a9879b5aa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708074017412-be6a9e38e4ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706463661223-4e7007549823?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707417089733-500269069159?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602503108651-039ad43420bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
function App() {
  const  [present , setPresent]= useState(0);

function next(){
  setPresent(present===images.length-1?0:present+1)
}

function prev(){
  setPresent(present===0?images.length-1:present-1)
}

return (
  <div className="slider">

<div className="left" onClick={prev}>←</div>

{
  images.map((image,index)=>
    present===index && (
      <div>
        <img className="im" src={image} alt="" />
      </div>
    )
    
    
  ) 
}
<div className="Right" onClick={next}>→</div>
 

 </div>
)
}



export default App
