import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import BlogPost from './components/BlogPost';
import Daily from './pages/Daily';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/daily" element={<Daily />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
