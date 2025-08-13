import { AboutMe } from "./components/aboutme/aboutme";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Home />
      <AboutMe />
    </div>
  );
}
export default App;
