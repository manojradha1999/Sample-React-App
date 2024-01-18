import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greet from './Greet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Greet />} />
          <Route path="Home" element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
