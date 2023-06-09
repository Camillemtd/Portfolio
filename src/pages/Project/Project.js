import React from 'react';
import '../Project/project.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projectData'
const Project = () => {
    window.addEventListener("scroll", () => {
        const windowYScroll = window.scrollY;
        const allCards = document.querySelectorAll(".projectCard");
        for (let card of allCards) {
          if (card.offsetTop <= windowYScroll + 500) {
            card.classList.add("slide-in-top")
          }
        }
    })

    return (
        <div className='project__container justify--content'>
            <h2 className='project__title'>GALLERY</h2>
            <div className='project justify--content'>
                
                {projects.map((project, index) => {
                    return (
                        <ProjectCard project={project} key={index} />
                    )
                })}
                
            </div>
        </div>
    );
};

export default Project;