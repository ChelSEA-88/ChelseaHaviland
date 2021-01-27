import React from "react";
// import Hero from "../components/Hero";

//Components
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Headshot from "../Pictures/chelseagit.png";

function About() {
  const style= {
    color: "#3e5965",
    padding: "50px",
  }
    return (
      <div>
        <Container style={{ marginTop: 80 }}>

          <Row>
            <Col size="md-12">
              <h1 className="greeting">Hey there!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
                <p>
                    I am a creative at heart. I love bringing things together, wether it's an event, a space, toppings on a pizza or a layout on a page. Although this new tech adventure is a different kind of challenge than I have ever faced, I have thoroughly enjoyed every BOOM  moment that comes after countless hours of failed attempts and bang your head on the table moments. Even as a newcomer to the tech world, I've experienced sleepless nights, tossing and turning about a coding problem I couldn't figure out that day. The happiness I feel after finding the solution, is something I'm going to keep chasing.  
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
          <Row> 
            <Col size="lg-12" padding="p-">
              <h4 className="text-center" style={style}>
                Thank you for taking the time to get to know me, and viewing my work!
              </h4>
            </Col>
           </Row>
           <Row> 
            <Col size="lg-12" padding="p-">
           
            </Col>
           </Row>
        </Container>
      </div>
    );
  }
  
  export default About;