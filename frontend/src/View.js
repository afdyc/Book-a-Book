import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Secret from "./component/Secret";
import Home from "./component/Home";
import ProtectedRoute from "./ProtectedRoute";

const View = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home/:id" element={<Home />} />
            <Route path="/secret/:id" element={<Secret />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default View;
