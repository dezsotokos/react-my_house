import {Routes, Route}  from 'react-router-dom'
import Header from "./components/Header";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";

import "./App.css";
import Reservation from './components/Reservation';
import Rooms from './components/Rooms';
import Sights from './components/Sights';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/sights" element={<Sights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    );
}

export default App;
