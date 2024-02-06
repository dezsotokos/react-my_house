import Header from "./components/Header";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import {Routes, Route, Link}  from 'react-router-dom'
import "./App.css";

function App() {
    return (
        <div className="App">
          <nav className="nav">
            <Link to="/" className="nav-item"> Homepage</Link>
            <a href="/about-me" className="nav-item"> About Me</a>
          </nav>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
          <Footer />
        </div>
    );
}

export default App;
