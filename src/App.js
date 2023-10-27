import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Home />
    <Work />
    <Skills />
    <Contact />
    <Toaster/>
    <Footer />
    </>
  );
}

export default App;
