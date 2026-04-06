import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CreateEventPage from "./pages/CreateEventPage";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-sky-500/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Explicit / layout so Outlet always resolves (pathless parent was unreliable). */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="create-events" element={<CreateEventPage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
