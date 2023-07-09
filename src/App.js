import "./App.css";
import Iteration01 from './Iteration01/Main.js'
import Iteration02 from './Iteration02/Main.js'
import Iteration03 from './Iteration03/Main.js'
import Iteration04 from './Iteration04/Main.js'
import Iteration05 from './Iteration05/Main.js'

function App() {
  return (
  <div className="App">
    {false && <Iteration01 />}
    {false && <Iteration02 />}
    {false && <Iteration03 />}
    {false && <Iteration04 />}
    {true && <Iteration05 />}
  </div>
  );
}

export default App;

// https://github.com/jBenitoLopez/lab-react-ironcontacts
