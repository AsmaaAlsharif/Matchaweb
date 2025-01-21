import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>We couldn't find what you were looking for.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        <p>© 2025 Matcha Blog, LLC. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
