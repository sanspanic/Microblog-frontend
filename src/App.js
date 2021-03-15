import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container mx-auto w-full py-5 px-2 sm:py-10 m-4 my-4 text-center bg-white  h-full sm:rounded-xl">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
