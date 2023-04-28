import React from 'react';
import '../Contact/contact.scss'
import moi from '../../assets/Images/bonhomme3.png'
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
                
                    {/*2eme rangé  */}
                    
                <figure className='bat30 bottom2 shadow__bat'></figure>
                <figure className='bat28 bottom2 shadow__bat'></figure>
                <figure className='bat22 bottom2 shadow__bat'></figure>
                <figure className='bat19 bottom2 shadow__bat'></figure>
                <figure className='bat20 bottom2 shadow__bat'></figure>
                <figure className='bat21 bottom2 shadow__bat'></figure>
                <figure className='bat23 bottom2 shadow__bat'></figure>
                <figure className='bat24 bottom2 shadow__bat'></figure>
                <figure className='bat25 bottom2 shadow__bat'></figure>
                <figure className='bat26 bottom2 shadow__bat'></figure>
                <figure className='bat27 bottom2 shadow__bat'></figure>
                <figure className='bat29 bottom2 shadow__bat'></figure>
                

                    {/* 1er rangé */}

                <figure className='bat1 bottom shadow__bat'></figure>
                <figure className='bat2 bottom shadow__bat'></figure>
                <figure className='bat3 bottom shadow__bat'></figure>
                <figure className='bat4 bottom shadow__bat'></figure>
                <figure className='bat5 bottom shadow__bat'></figure>
                <figure className='bat6 bottom shadow__bat'></figure>
                <figure className='bat7 bottom shadow__bat'></figure>
                <figure className='bat8 bottom shadow__bat'></figure>
                <figure className='bat9 bottom shadow__bat'></figure>
                <figure className='bat10 bottom shadow__bat'></figure>
                <figure className='bat11 bottom shadow__bat'></figure>
                <figure className='bat12 bottom shadow__bat'></figure>
                <figure className='bat13 bottom shadow__bat'></figure>
                <figure className='bat14 bottom shadow__bat'></figure>
                <figure className='bat15 bottom shadow__bat'></figure>
                <figure className='bat16 bottom shadow__bat'></figure>
                <figure className='bat17 bottom shadow__bat'></figure>
                <figure className='bat18 bottom shadow__bat'></figure>
                
                


                <figure className='bar'></figure>
                <figure className='vitre'></figure>
            </figure>
            <figure className='terrace'>
                <img className='moi' src={moi} alt='moi'/>
                <figure className='moiTalk justify--content'>
                    <p>Hey, let's talk !</p>
                    <figure></figure>
                </figure>
            </figure>
            
        </div>
    );
};

export default Contact;