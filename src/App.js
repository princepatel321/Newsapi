import './App.css';
import { BrowserRouter as Router,Routes,Route, Link, } from "react-router-dom";
import Taskcard from './Taskcard';
import Fnewsapi from './Fnewsapi';
import Cnewsapi from './Cnewsapi';
import Formtask from './Formtask';




function App() {
  return (
    <div>
     <Router>
     <Link to="/Taskcard">Taskcard</Link> |
     <Link to="/Fnewsapi">Fnewsapi</Link> |
     <Link to="/Cnewsapi">Cnewsapi</Link> |
     <Link to="/Formtask">Form Task</Link> |


      <Routes>
    <Route path="/Taskcard" element={<Taskcard/>}/>
    <Route path="/Fnewsapi" element={<Fnewsapi/>}/>
    <Route path="/Cnewsapi" element={<Cnewsapi/>}/>
    <Route path="/Formtask" element={<Formtask/>}/>

    
      </Routes>
     </Router>
    </div>
  )
}

export default App;
