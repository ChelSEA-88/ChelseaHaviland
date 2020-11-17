import React, { Component } from "react";
import ProjectCard from "../Components/Card"
import {Container} from "reactstrap"
import projects from "../Projects/projects.js"



class Portfolio extends Component{

    state = {
        projects
    };

    render() {
        return(
            <Container className="text-center">
            
                <h1> Projects </h1>
                {this.state.projects.map(project =>(
                    <ProjectCard
                        key={project.id}
                        projectname={project.projectName}
                        image={project.image}
                        summary={project.summary}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                    />
                ))}
            
            </Container>
        );
    }
}
export default Portfolio;