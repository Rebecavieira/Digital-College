import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Categorias from './pages/Categorias';
import Home from './pages/Home';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import "./index.css";
import DetalhesProduto from './pages/DetalhesProduto';


export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />}/>
            <Route path="/Categorias" element={<Categorias />} />
            <Route path="/MeusPedidos" element={<MeusPedidos />} />
            <Route path="/produtos/:id" element={<DetalhesProduto />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}