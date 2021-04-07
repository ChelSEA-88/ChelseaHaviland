import React from "react";
// import Hero from "../components/Hero";

//Components
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Headshot from "../Pictures/chelseagit.png";
import Portfolio from "./Portfolio";
import Charlesst from "../Pictures/Charlesst.jpg";

function About() {
  const style= {
    color: "#3e5965",
    padding: "50px",
  }
    return (
      <div>
        <Container style={{ marginTop: 80, marginBottom: 80, backgroundColor: 'e6ffff'}}>

          <Row style={{ marginLeft: 80}}>
            <Col size="md-12" style={{marginBottom: 80}}>
              <h1 className="greeting">Hey there!</h1>
            </Col>
          
            <Col size="md-6">
                <p>
                    I am a creative at heart. I love bringing things together, wether it's an event, a space, toppings on a pizza, or a layout on a page. With my design background, and newly developed coding skills, I am ready to tackle every challenge that comes my way. I am happiest when I am solving a unique coding problem, or even doing the simplest of page layouts.   
                </p>
                <p>
                    Best advice I have recieved following code school: 
                </p>  
                <h5>
                  "Be optimistic and don't give up!"
                </h5>
                <p>
                    And I'm going to to just that!
                </p>
            </Col>
            <Col size="6">
                <img src={Headshot} alt="Headshot"/>
            </Col>
          </Row>
          
        </Container>

        <Portfolio></Portfolio>
      </div>
    );
  }
  
  export default About;