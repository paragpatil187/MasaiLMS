import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lectures from './components/Lectures';
import Home from './components/Home';
import Admin from './components/Admin';
import Lecture_upload from './components/Lecture_upload';
import Assign_upload from './components/Assign_upload';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/lectures' element={<Lectures />} /> 
      <Route path='/admin' element={<Admin />} /> 
      <Route path='/lecture_upload' element={<Lecture_upload />} /> 
      <Route path='/assignment_upload' element={<Assign_upload />} />
      <Route path='/login' element={<Login />} /> 

      </Routes>
    </div>
  );
}

export default App;
