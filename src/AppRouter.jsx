import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManualsPage from "./pages/ManualsPage";
import SchoolTextsPage from "./pages/SchoolTextsPage";
import ContactPage from "./pages/ContactPage";
import MagazinePage from "./pages/MagazinePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/magazines" element={<MagazinePage />} />
      <Route path="/manuales" element={<ManualsPage />} />
      <Route path="/textos-escolares" element={<SchoolTextsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/collections" element={<HomePage />} />
    </Routes>
  );
}
