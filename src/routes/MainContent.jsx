import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/navbar e footer/Footer";
import { About } from "../pages/About";
import { Tech } from "../pages/Tech";
import { Project } from "../pages/Projects";
import { Contato } from "../pages/Contato";

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/stacks" element={<Tech />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      {location.pathname === "/home" && <Footer />}
    </>
  );
};

export default MainContent;
