import "./App.css";
import Nav from "./Components/Nav/nav";
import Header from "./Components/header";
import About from "./Components/about";
import Experience from "./Components/experience";
import Project from "./Components/project";
import Contacts from "./Components/contacts";
import Preloader from "./Components/Preloader/preloader.jsx";

function App() {
  return (
    <>
      <Preloader />
      <Nav />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contacts />
    </>
  );
}

export default App;
