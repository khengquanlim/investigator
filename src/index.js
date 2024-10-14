import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(<App />);