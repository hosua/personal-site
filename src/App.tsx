import { ThemeProvider } from "@/components/theme-provider";
import GamesPage from "@/pages/GamesPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavBar />
      <GamesPage />
    </ThemeProvider>
  );
}

export default App;
