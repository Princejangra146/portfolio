import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='min-h-screen'>
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        <div className='min-h-screen'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
