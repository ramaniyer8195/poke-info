import "./App.css";
import Header from "./components/home/Header";
import PokemonList from "./components/home/PokemonList";
import { ThemeProvider } from "./components/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-[100vh] px-10">
        <Header />
        <PokemonList />
      </div>
    </ThemeProvider>
  );
}

export default App;
