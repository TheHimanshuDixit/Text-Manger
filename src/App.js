// {written something inside it{} is javascript}

import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');            // whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div className='App'>
      {/* <Navbar /> */}
      {/* passing props it is like an argument (object) */}
      {/* <Navbar  title="Text Manager" abouttext="About Text Manager" /> */}
      <Navbar title="Text Manager" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Textform heading="... ENTER THE TEXT BELOW AND ANALYZE ..." mode={mode}/>
      </div>
    </div>
  );
}
export default App;

// if you not write export default then write export before function and at time of import use {App} from .....
