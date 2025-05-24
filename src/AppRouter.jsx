import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ManualsPage from "./pages/ManualsPage";
import SchoolTextsPage from "./pages/SchoolTextsPage";
import ContactPage from "./pages/ContactPage";
import MagazinePage from "./pages/MagazinePage";
import MagazineAbout from "./components/ui/magazines/MagazineAbout";
import MagazineEditorialPolicy from "./components/ui/magazines/MagazineEditorialPolicy";
import MagazineArchive from "./components/ui/magazines/MagazineArchive";
import MagazineAcceptanceProcess from "./components/ui/magazines/MagazineAcceptanceProcess";
import MagazinePublicationStandards from "./components/ui/magazines/MagazinePublicationStandards";
import MagazineEditorialBoard from "./components/ui/magazines/MagazineEditorialBoard";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/magazines" element={<MagazinePage />}>
        <Route index element={<MagazineEditorialPolicy />} />
        <Route path="about" element={<MagazineAbout />} />
        <Route path="editorial-policy" element={<MagazineEditorialPolicy />} />
        <Route path="archive" element={<MagazineArchive />} />
        <Route path="acceptance-process" element={<MagazineAcceptanceProcess />} />
        <Route path="publication-standards" element={<MagazinePublicationStandards />} />
        <Route path="editorial-board" element={<MagazineEditorialBoard />} />
      </Route>
      <Route path="/manuales" element={<ManualsPage />} />
      <Route path="/textos-escolares" element={<SchoolTextsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/collections" element={<BooksPage />} />
    </Routes>
  );
}
