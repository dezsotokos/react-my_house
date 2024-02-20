import Header from "./components/Header";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import {Routes, Route}  from 'react-router-dom'
import "./App.css";

function App() {
    return (
        <div className="App">
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
