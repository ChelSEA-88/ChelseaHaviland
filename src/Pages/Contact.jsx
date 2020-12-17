import React from "react";
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, Row, Col, NavLink
} from 'reactstrap';
import Headshot from "../Pictures/chelseagit.png";
import resume from "../Pictures/techResume.pdf"
import creativeResume from "../Pictures/Resume1.pdf"

function Contact() {
    return (
        <div>    
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card>
                        <CardHeader tag="h3" >
                          <h6 className="text-center">Thank you for your time, let's talk!</h6>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col size="lg-5"><img className="headshot shadow bg-white rounded mt-3" src={Headshot} alt="Headshot"/></Col>
                                <Col size="lg-5">
                                    <CardTitle >Some links!</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:chelsea.haviland13@gmail.com"> Email: Chelsea Haviland
                                    </NavLink>
                                    <NavLink href="https://www.linkedin.com/in/chelseahaviland13/"> View my LinkedIn</NavLink>
                                    <NavLink href="https://github.com/: chelSEA-88"> View my GitHub</NavLink>  
                                    <Row className="padding: 20px">
                                    <Button color="secondary"style={{ margin: "10px" }} className="mr-5" href={resume} target="_blank">View my tech resume Here!</Button>
                                    </Row> 
                                    <Row className="padding: 50px"> 
                                    <Button color="secondary" style={{ margin: "10px" }} className="mr-5" href={creativeResume} target="_blank">View my creative resume Here!</Button>
                                    </Row>            
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
           </div>
    );
}

export default Contact;

