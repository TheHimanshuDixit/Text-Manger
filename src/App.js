// import logo from './logo.svg';
import './App.css';        // this is for CSS in react

// let name = "Harry"
let name = "<b>Harry</b>"      // it will print AS IT is react external HTML ko neglect kr deti hai
function App() {
  // returning an html Element (only one Element will return)  returning JSX 
  // "use strict"; to not get awarw of error in js
  return (

    // below content is html but here we use class as className , for as htmlForm , tabindex as tabIndex (camel case)
    // JSX fragments -- if you wants to return more then one tag then return it in <> code here </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
    <nav>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
    </nav>
    <img src="" alt="" />
    <div className="container">
      <h1>hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam ea dicta consectetur sapiente vel cupiditate dolorum neque iusto, sed cum, quos pariatur distinctio odio vero tempore quia, maiores animi.</p>
    </div>
    </>
  );
}

// npm install or npm i will install node modules
export default App;
