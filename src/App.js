import "./App.css";
import Guides from "./components/Guides";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <OurWork />
      <Guides />
      <Subscribe />
    </div>
  );
}

export default App;
