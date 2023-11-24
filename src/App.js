import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//all pages navigation
import Home from "./Pages/Home";
import Destaques from "./Pages/Destaques.js";
import Estoque from "./Pages/Estoque.js";
import Promocao from "./Pages/Promocao.js";
import Contato from "./Pages/Contato.js";
import Licenca from "./Pages/Licenca.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destaques" element={<Destaques />} />
          <Route path="/Estoque" element={<Estoque />} />
          <Route path="/Promocao" element={<Promocao />} />
          <Route path="/Licenca" element={<Licenca />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;