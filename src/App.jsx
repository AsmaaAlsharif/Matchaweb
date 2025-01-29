import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import MainLayout from './Mainlayout';

/*
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
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout title="Home">
              <Home />
            </MainLayout>
          }        
        />
        <Route
          path="/about"
          element={
            <MainLayout title="About">
              <About />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route 
          path="/matcha-to-avoid" 
          element={<NotFound />}
        />
        <Route 
          path="/hidden-gems" 
          element={<NotFound />}
        />
        <Route 
          path="/best-of-drive-thru" 
          element={<NotFound />}
        />
        <Route 
          path="/cozy-spots" 
          element={<NotFound />}
        />
        <Route 
          path="/aesthetic-for-the-gram" 
          element={<NotFound />}
        />
        <Route 
          path="/orem" 
          element={<NotFound />}
        />
        <Route 
          path="/provo" 
          element={<NotFound />}
        />
        <Route 
          path="/slc" 
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;