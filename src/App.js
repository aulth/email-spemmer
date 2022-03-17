import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Disclaimer from './component/Disclaimer';
import Contact from './component/Contact';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
