import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col} from "reactstrap";
import Button from 'react-bootstrap/Button';
import "./style.css";

const ContactCard = (props)  => {

    return (
        <div>
        <Card className="card">
            <Card.Title tag="h3" className="p-3">
                {props.projectName}
            </Card.Title>
            <Row>
                <Col>
                    <Card.Img width="75%" className="md-5"src={props.image} alt="Project Pic" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Text className="md-3">
                            <h5>Project summary:</h5>
                            {props.summary}
                        </Card.Text>
                        <br />
                        <Button className="btn" variant="btn-margin-l" variant="secondary" href={props.deployedLink} target="blank">
                            Deployed App</Button>
                        <Button className="btn" variant="btn-margin-l" variant="secondary" href={props.githubLink} target="blank">
                            Github Repo</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        </div>
    )
}

export default ContactCard;