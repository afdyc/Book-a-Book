import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Secret from "./component/Secret";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret/:id" element={<Secret />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
