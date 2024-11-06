import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Media from './components/Media';
import About from './components/About';
import Navigation from './components/Navigation';
import Calculator from './components/Calculator';


function LabFive() {
    return (
        <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />

        </Routes>
      </div>
    </Router>
    );
}

export default LabFive;