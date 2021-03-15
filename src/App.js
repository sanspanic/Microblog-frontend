import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container w-full py-5 px-2 sm:py-10 m-4 mx-auto my-16 text-center bg-white border-2 border-dashed border-blueGray-300 h-full rounded-xl">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
