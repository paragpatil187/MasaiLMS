import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lectures from './components/Lectures';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/lectures' element={<Lectures />} /> 

      </Routes>
    </div>
  );
}

export default App;
