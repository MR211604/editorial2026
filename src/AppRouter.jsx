import { Routes, Route } from "react-router-dom";

/* Páginas generales */
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ManualsPage from "./pages/ManualsPage";
import SchoolTextsPage from "./pages/SchoolTextsPage";
import ContactPage from "./pages/ContactPage";
import MagazinePage from "./pages/MagazinePage"; // landing con todas las revistas
import SearchResultsPage from "./pages/SearchResultsPage"; // página de resultados de búsqueda

/* ——— TEORÍA Y PRAXIS (layout + secciones) ——— */
import TP_Layout from "./pages/magazines/teoria-y-praxis/Layout";
import TP_EditorialPolicy from "./pages/magazines/teoria-y-praxis/MagazineEditorialPolicy";
import TP_About from "./pages/magazines/teoria-y-praxis/MagazineAbout";
import TP_Archive from "./pages/magazines/teoria-y-praxis/MagazineArchive";
import TP_AcceptanceProcess from "./pages/magazines/teoria-y-praxis/MagazineAcceptanceProcess";
import TP_PublicationStandards from "./pages/magazines/teoria-y-praxis/MagazinePublicationStandards";
import TP_EditorialBoard from "./pages/magazines/teoria-y-praxis/MagazineEditorialBoard";
import DiaLogosIndex from "./pages/magazines/dia-logos/index";

/* ——— PÁGINA DE DETALLE DE REVISTA ——— */
import MagazineDetailPage from "./pages/magazines/MagazineDetailPage";
import GalleryPage from "./pages/GalleryPage";

export default function AppRouter() {
  return (
    <Routes>
      {/* Sitio general */}
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<BooksPage />} />
      <Route path="/manuales" element={<ManualsPage />} />
      <Route path="/textos-escolares" element={<SchoolTextsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/results" element={<SearchResultsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      {/* Landing con todas las revistas */}
      <Route path="/revistas" element={<MagazinePage />} />

      {/* ——— Teoría y Praxis (layout + rutas anidadas) ——— */}
      <Route
        path="/revistas/teoria_y_praxis"
        element={<TP_Layout headerTitle={"Teoría y práxis"} />}
      >
        <Route index element={<TP_Archive />} />
        <Route path="about" element={<TP_About />} />
        <Route path="editorial-policy" element={<TP_EditorialPolicy />} />
        <Route path="archive" element={<TP_Archive />} />
        <Route path="acceptance-process" element={<TP_AcceptanceProcess />} />
        <Route
          path="publication-standards"
          element={<TP_PublicationStandards />}
        />
        <Route path="editorial-board" element={<TP_EditorialBoard />} />
      </Route>

      {/* ——— Dialogos (layout + rutas anidadas) ——— */}
      <Route
        path="/revistas/dia-logos"
        element={<TP_Layout headerTitle={"Diá-logos"} showPills={false} />}
      >
        <Route index element={<DiaLogosIndex />} />
      </Route>

      {/* ——— Página de detalle de revista individual ——— */}
      <Route path="/revistas/:magazineURL" element={<MagazineDetailPage />} />
    </Routes>
  );
}
