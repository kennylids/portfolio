
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'
        // style={{
        //   backgroundSize: '100%', // Increase the background size to zoom out
        //   // backgroundPosition: 'center center', // Center the background image
        //   // backgroundAttachment: 'fixed' // Keep the background fixed when scrolling
        // }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
