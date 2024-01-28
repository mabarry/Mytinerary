import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import EditOptions from './EditOptions';
import ItineraryPage from './ItineraryPage';

const AppRoutes = () => {
  
    return (
      <Routes>
        <Route path="/edit" element={<EditOptions/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/itinerary" element={<ItineraryPage/>} />
      </Routes>
    );
  };
  
  export default AppRoutes;