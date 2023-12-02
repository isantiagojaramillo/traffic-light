import { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState("");
  const style1 = {backgroundColor: "red"};
  const style2 = {backgroundColor: "yellow"};
  const style3 = {backgroundColor: "green"};

  const [colors, setColors] = useState();
  
  const text = () => {
    setColors(style1);
    setContent("Red - Stop");
  };

  const image = () => {
    setContent("Yellow - Alert");
    setColors(style2);
  }; 

  const background = () => {
    setColors(style3);
    setContent("Green - Go ahead"); 
  }; 

  return (
    <>
      <button onClick={()=>{text()}} >Click me</button>
      <button onClick={()=>{image()}} >Click me 2</button>
      <button onClick={()=>{background()}} >Click me 3</button>

      <div className='container'>
        <div className="traffic" style={colors}>
          {content}
        </div> 
      </div>
    </>
  );
}

export default App;
