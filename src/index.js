import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Users from './Users';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>    
    {/* or used like this*/}
    {/* <App></App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// if you did not want to export then write it in a same File.
// function App() {
//   return (
//     <>
//     <Navbar />
//     {/* <Navbar  title="Text Manager" abouttext="About Text Manager" />              passing props it is like an argument (object) */}
//     </>
//   );
// }