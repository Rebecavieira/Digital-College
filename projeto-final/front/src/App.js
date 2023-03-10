import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Categorias from './pages/Categorias';
import Home from './pages/Home';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import Navbar from './components/Navbar';
import Menu from './components/Menu';


export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Menu />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />}/>
            <Route path="/Categorias" element={<Categorias />} />
            <Route path="/MeusPedidos" element={<MeusPedidos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}