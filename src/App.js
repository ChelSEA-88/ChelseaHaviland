import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
// import { Container } from 'reactstrap';
// import AboutMe from './Components/Pages/AboutMe';
// import Portfolio from './Components/Pages/Projects';
// import Contact from './Components/Pages/Contact';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
// import Footer from "./components/Footer";

// library.add(faEnvelope, faCodeBranch);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          {/* <Container>
            <Route exact path="/" component={AboutMe} />
            <Route path="/projects" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Container> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
