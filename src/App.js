import "./App.css";
import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PostsContextProvider from "./Context/PostsContextProvider";

function App() {
  return (
    <div className="App background">
      <Navbar />
      <div className="shadow sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto w-full py-5 px-2 sm:py-10 m-4 my-4 text-center bg-white  h-full rounded-xl">
        <PostsContextProvider>
          <Routes />
        </PostsContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
