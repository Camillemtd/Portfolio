import React from 'react';
import '../ProjectCard/projectCard.scss'
const ProjectCard = ({project}) => {
    return (
        <div className='projectCard'>
            <h2 className='projectCard__title'>{project.title}</h2>
            <img src={project.image} alt="project"/>
            <div >
                <figure className='rideau1'>
                    <figure className='rideau2'>
                        <figure></figure>
                    </figure>
                </figure>
            </div>
        </div>
    );
};

export default ProjectCard;