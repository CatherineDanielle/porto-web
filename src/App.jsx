import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

// Debug component to show current route
const RouteDebugger = () => {
  const location = useLocation();
  console.log('Current route:', location.pathname);
  return null;
};

export default function App() {
  return (
    <Router>
      <RouteDebugger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}