import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Industry from "./pages/Industry";
import Movie from "./pages/Movie";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:industryId" element={<Industry />} />
          <Route path="/:industryId/:movieId" element={<Movie />} />
          <Route path="/:industryId/:movieId/:characterId" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
