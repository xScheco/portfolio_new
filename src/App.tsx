import { Header } from "./components/Header/header";
import { Home } from "./components/home/home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Home />
    </div>
  );
}
export default App;
