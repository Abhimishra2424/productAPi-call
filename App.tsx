import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import NavBar from './components/NavBar';
import Table from './components/Table';

import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </React.Fragment>
  );
}
