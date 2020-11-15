import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import pages
import About from "./Pages/AboutMe"

//Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper"
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
          <Wrapper>
            <Route exact path="/" component={About} />
            {/* <Route path="/projects" component={Portfolio} />
            <Route path="/contact" component={Contact} /> */}
          </Wrapper>
        <Footer />
       </div>
    </Router>
  );
}

export default App;
