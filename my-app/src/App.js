import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
// import Map from './components/Map.jsx'
import Resources from './components/Resources.js'
// import NameForm from './components/Form.js';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Resources' element={<Resources />} />
          {/* <Route path='/' exact component={Resources} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
