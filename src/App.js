import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Import pages
import About from "./Pages/AboutMe"
import Portfolio from "./Pages/Portfolio";

//Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import { Container } from "reactstrap";




function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Container>
            <Route exact path="/" component={About} />
            {/* <Route exact path="/AboutMe" component={About} /> */}
            <Route path="/Portfolio" component={Portfolio} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Container>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
