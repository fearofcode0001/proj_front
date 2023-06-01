import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './mainPage/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
     </Router>

  );
}

export default App;
