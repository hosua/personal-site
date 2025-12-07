import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import GamesPage from "@/pages/GamesPage";
import NavBar from "./components/NavBar";
import ShermieInvadersPage from "@/pages/games/ShermieInvadersPage";
import SDL2PathfinderPage from "@/pages/games/SDL2PathfinderPage";
import SnakePlusPlusPage from "@/pages/games/SnakePlusPlusPage";
import FlappyBirdPage from "@/pages/games/FlappyBirdPage";
import TetriPyPage from "@/pages/games/TetriPyPage";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<GamesPage />} />
          <Route
            path="/games/shermie-invaders"
            element={<ShermieInvadersPage />}
          />
          <Route
            path="/games/sdl2-pathfinder"
            element={<SDL2PathfinderPage />}
          />
          <Route
            path="/games/snake-plus-plus"
            element={<SnakePlusPlusPage />}
          />
          <Route path="/games/flappy-bird" element={<FlappyBirdPage />} />
          <Route path="/games/tetripy" element={<TetriPyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
