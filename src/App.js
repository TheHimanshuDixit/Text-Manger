// {written something inside it{} is javascript}

import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');            // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
      // changing title dynamically
      document.title = 'Text Manager - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'Text Manager - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Manager" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='App'>
          {/* <Navbar /> */}
          {/* passing props it is like an argument (object) */}
          {/* <Navbar  title="Text Manager" abouttext="About Text Manager" /> */}
          <div className="container my-3">
            <Routes>
              {/* /Users --> component 1
              /Users/home --> component 2 */}
              {/* exact keyword is like it work it went to this path  not even a small change in path */}
              <Route exact path="/about" element ={<About mode={mode}/>}>
              </Route>
              <Route exact path="/" element ={<Textform heading="... ENTER THE TEXT BELOW AND ANALYZE ..." mode={mode} showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;

// if you not write export default then write export before function and at time of import use {App} from .....
