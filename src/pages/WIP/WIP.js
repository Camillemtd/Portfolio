import React from 'react';
import '../WIP/wip.scss'
import WipCard from '../../components/WipCard/WipCard';
import wipProjects from '../../data/wipData'
const WIP = () => {
    

    return (
        <div className='wip__container justify--content'>
            <h2 className='wip__title'>WORK IN PROGRESS</h2>
            <div className='project justify--content'>
                
                {wipProjects.map((wip, index) => {
                    return (
                        <WipCard wip={wip} key={index} />
                    )
                })}
                
            </div>
           
        </div>
    );
};

export default WIP;