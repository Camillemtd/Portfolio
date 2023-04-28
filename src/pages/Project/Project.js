import React from 'react';
import '../Project/project.scss'
import ProjectCard from '../../componets/ProjectCard/ProjectCard';
import projects from '../../data/projectData'
const Project = () => {
    return (
        <div className='project'>
            {projects.map((project, index) => {
                return (
                    <ProjectCard project={project} key={index} />
                )
            })}
            
        </div>
    );
};

export default Project;