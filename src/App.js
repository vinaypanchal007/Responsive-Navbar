import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Servies' element={<Services/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
