import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PixelArt from "./pages/PixelArt";
import RenderModalPixel from "./pages/ModalPixel";
import RenderModalFurry from "./pages/ModalFurry";
import FurryArt from "./pages/FurryArt";
import Commission from "./pages/Commission";
import NoPage from "./pages/NoPage";
import LegalMentions from "./pages/LegalMentions";
import './style/index.css';

import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pixelart" element={<PixelArt />} />
          <Route path="furryart" element={<FurryArt />} />
          <Route path="commission" element={<Commission />} />
          <Route path="legalmentions" element={<LegalMentions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* OUTSIDE OF THE LAYOUT */}
        <Route path="">
          <Route path="pixelart/:id" element={<RenderModalPixel/>} />
          <Route path="furryart/:id" element={<RenderModalFurry/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
