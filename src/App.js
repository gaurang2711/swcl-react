import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingOverlay from './components/LoadingOverlay';
import './styler.css';  // Import the CSS

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme'); // Use localStorage
        if (savedTheme === 'light') {
            setDarkMode(false);
        }

        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', darkMode ? 'dark' : 'light'); // Use localStorage
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    

    return (
        <div className="App">
            {loading ? (
                <LoadingOverlay />
            ) : (
                <>
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <div className="container">
                        <Home />
                        <About />
                        <Services />
                        <Team />
                        <Contact />
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;