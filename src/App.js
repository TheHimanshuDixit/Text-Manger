import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* passing props it is like an argument (object) */}
      {/* <Navbar  title="Text Manager" abouttext="About Text Manager" /> */}
      <Navbar title="Text Manager" />
      <div className="container my-3">
        <Textform heading="Enter the text to Analyze Below"/>
      </div>
    </>
  );
}
export default App;

// if you not write export default then write export before function and at time of import use {App} from .....
