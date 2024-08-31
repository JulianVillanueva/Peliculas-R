import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeliculaForm from './components/PeliculaForm';
import PeliculaDetail from './components/PeliculaDetail'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/peliculas/crear" element={<PeliculaForm />} />
          <Route path="/peliculas/editar/:id" element={<PeliculaForm />} />
          <Route path="/peliculas/:id" element={<PeliculaDetail />} /> {/* Nueva ruta para detalles */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
