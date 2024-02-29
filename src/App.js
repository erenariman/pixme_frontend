import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import CurrentProfile from "./pages/current_profile.js";
import Home from "./pages/home.js";
import SharedLayout from './pages/SharedLayout.js';
import Logout from "./components/Logout.js";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={'/api/social/current-profile/'} element={<CurrentProfile />} />
          <Route path={'/api/login/'} element={<Login />} />
          <Route path={'/api/registration/'} element={<Register />} />
          <Route path={'api/logout/'} element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
