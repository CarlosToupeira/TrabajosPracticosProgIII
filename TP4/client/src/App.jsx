// -- VARIABLES GLOBALES
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// -- VARIABLES LOCALES

// -- sitios
import "./App.css";
import Index from "../pages/Index"; // inicio

// -- componentes
import Navbar from "../components/Navbar"; // -- barra de navegacion

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
