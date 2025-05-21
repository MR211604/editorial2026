import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManualsPage from "./pages/ManualsPage";
import SchoolTextsPage from "./pages/SchoolTextsPage";

export default function AppRouter() {
  return (
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manuales" element={<ManualsPage />} />
      <Route path="/textos-escolares" element={<SchoolTextsPage />} />
    </Routes>
  );
}
