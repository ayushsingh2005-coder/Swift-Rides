// import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/react";
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <SpeedInsights/>
    <App />
  </BrowserRouter>
);
