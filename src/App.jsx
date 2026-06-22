import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  CodeBackground,
  SpiderCursor,
  CustomCursor,
  IntroScreen,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <IntroScreen />
        <CustomCursor />

        {/* subtle global red/blue ambience behind every section */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, rgba(255,34,71,0.10), transparent 60%), radial-gradient(55% 50% at 85% 85%, rgba(0,212,255,0.10), transparent 60%)",
          }}
        />

        <CodeBackground />
        <SpiderCursor />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <Education />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
