import React from "react";
// import Hero from "../components/Hero";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";

function About() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Hey there!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
            <p>I am a creative at heart. I love bringing things together, wether it's
              an event, a space, toppings on a pizza, or a layout on a page. Although
              this new tech adventure is a different kind of challenge than I have ever
              faced, I have thoroughly enjoyed every BOOM moment that comes after 
              countless hours of failed attempts and head scratching moments. </p>
            <p>I look for the beauty in everything, and everyone. I love  my children, even
              though they ask for too many snacks. I love anything my husband puts on the
              smoker. I love my French Bulldog and my American Foxhound. Ten months out 
              of the year I wish it were October, the other month I get to wear green. 
              I can't decide which I like better: hiking to a sweeping mountain view or 
              reading on the beach listening to oceanwaves. 
              
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default About;