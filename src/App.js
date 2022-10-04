import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import NewsPage from './pages/News';
import SalePage from './pages/Sale';
function App() {
  return (
    <div className="App">
      <div className="nav-container">

      <nav>
          <ul>
            <li className= "menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className= "menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className= "menu-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className= "menu-item">
              <Link to="/news">News</Link>
            </li>
            <li className= "menu-item">
              <Link to="/sale">Sale</Link>
            </li>
          </ul>

      </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sale" element={<SalePage />} />
      </Routes>
    </div>
  );
}

export default App;
