import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar"
import Home from './pages/Home';
import EditUser from './users/EditUser';
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
         
          <Routes>
            <Route exec path="/" element={<Home/>}></Route>
            <Route exec path="/adduser" element={<AddUser/>}></Route>
            <Route exec path="/edituser/:id" element={<EditUser/>}></Route>
            <Route exec path="/viewuser/:id" element={<ViewUser/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
