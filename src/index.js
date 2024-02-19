import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
      <SpeedInsights />
    </DataProvider>
  </BrowserRouter>,
);
