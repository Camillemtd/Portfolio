import React from 'react';
import '../Contact/contact.scss'
import moi from '../../assets/Images/bonhomme3.png'
import ModalContact from '../../components/modalContact/ModalContact';
const Contact = () => {
    return (
        <div className='contact justify--content'>
            <figure className='contact__sky'>
                <figure className='sun'>
                <div className="custom-shape-divider-top-1682098668">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                </figure>
                


                <figure className='bar'></figure>
                <figure className='vitre'></figure>
            </figure>
            <figure className='terrace'>
                <img className='moi' src={moi} alt='moi'/>
                <figure className='moiTalk justify--content'>
                    <p>Hey, let's talk !</p>
                    
                </figure>
            </figure>
            <ModalContact />
        </div>
    );
};

export default Contact;