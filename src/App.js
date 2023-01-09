import './App.css';   
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    {/* <Navbar  title="Text Manager" abouttext="About Text Manager" />              passing props it is like an argument (object) */}
    </>
  );
}
export default App;

// if you not write export default then write export before function and at time of import use {App} from .....
