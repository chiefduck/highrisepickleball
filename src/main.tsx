import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Events from './pages/Events.tsx';
import Training from './pages/Training.tsx';
import ProShop from './pages/ProShop.tsx';
import Contact from './pages/Contact.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="training" element={<Training />} />
          <Route path="pro-shop" element={<ProShop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
