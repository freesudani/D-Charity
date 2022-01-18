import "./App.css";
import Guides from "./components/Guides";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurWork />
      <Guides />
    </div>
  );
}

export default App;
