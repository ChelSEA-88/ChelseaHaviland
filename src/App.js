import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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
    <Router>
      <div>
        <Navbar />
          {/* <Container>
            <Route exact path="/" component={AboutMe} />
            <Route path="/projects" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Container> */}
        <Footer />
       </div>
    </Router>
  );
}

export default App;
