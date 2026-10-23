import { Route, Routes } from "react-router-dom";

/* Páginas generales */
import BooksPage from "./pages/BooksPage";
import BookDetailPage from "./pages/books/BookDetailPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LocationsPage from "./pages/LocationsPage";
/* ——— Revistas (layout + secciones) ——— */
import DialogosArchive from "./pages/magazines/dia-logos/DialogosArchive";
import DialogosLayout from "./pages/magazines/dia-logos/DialogosLayout";
import MagazineDetailPage from "./pages/magazines/MagazineDetailPage";
import TeoriaYPraxisAbout from "./pages/magazines/teoria-y-praxis/TeoriaYPraxisAbout";
import TeoriaYPraxisArchive from "./pages/magazines/teoria-y-praxis/TeoriaYPraxisArchive";
import TeoriaYPraxisLayout from "./pages/magazines/teoria-y-praxis/TeoriaYPraxisLayout";
import SearchResultsPage from "./pages/SearchResultsPage";
import DocumentPage from "./pages/DocumentPage";

export default function AppRouter() {
  return (
    <Routes>
      {/* Sitio general */}
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<BooksPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/results" element={<SearchResultsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/ubicaciones" element={<LocationsPage />} />
      <Route path="/documentos/:slug" element={<DocumentPage />} />

      {/* ——— Teoría y Praxis (layout + rutas anidadas) ——— */}
      <Route
        path="/revistas/teoria_y_praxis"
        element={<TeoriaYPraxisLayout headerTitle={"Teoría y práxis"} />}
      >
        <Route index element={<TeoriaYPraxisArchive />} />
        <Route path="about" element={<TeoriaYPraxisAbout />} />
        <Route path="archive" element={<TeoriaYPraxisArchive />} />
        {/* <Route path="editorial-policy" element={<TP_EditorialPolicy />} /> */}
        {/* <Route path="acceptance-process" element={<TP_AcceptanceProcess />} /> */}
        {/* <Route
          path="publication-standards"
          element={<TP_PublicationStandards />}
        /> */}
        {/* <Route path="editorial-board" element={<TP_EditorialBoard />} /> */}
      </Route>

      {/* ——— Dialogos (layout + rutas anidadas) ——— */}
      <Route
        path="/revistas/dialogos"
        element={<DialogosLayout headerTitle={"Diá-logos"} />}
      >
        <Route index element={<DialogosArchive />} />
        <Route path="archive" element={<DialogosArchive />} />
      </Route>

      {/* ——— Página de detalle de revista individual ——— */}
      <Route path="/revistas/:magazineURL" element={<MagazineDetailPage />} />

      {/* Página de detalle de libro individual */}
      <Route path="/libros/:bookURL" element={<BookDetailPage />} />
    </Routes>
  );
}
