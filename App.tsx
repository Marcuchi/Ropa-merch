import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Merch from './components/Merch';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sq-dark selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Merch />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;