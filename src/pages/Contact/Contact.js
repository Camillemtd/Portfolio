import React from 'react';
import '../Contact/contact.scss'
import moi from '../../assets/Images/bonhomme3.png'
const Contact = () => {
    let webhookUrl = process.env.REACT_APP_DISCORD_WEB_HOOK;
    
    function sendMessage(e){
        e.preventDefault();
        console.log(webhookUrl)
        const date = new Date();
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const messageContent = `
            ------------------------
            *${date}* 

            __**Username**__ : ${userName}
            __**Email**__ : ${userEmail} 
            __**Message**__ : ${message}
            `;
        
            if (userName && userEmail && message) {
                fetch(webhookUrl, {
                  body: JSON.stringify({
                    content: messageContent,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                })
                .then(function () {
                    
                    alert('message envoyé')
                  })
                  .catch(function (error) {
                    console.error(error);
                    alert("There was an error. " + error);
                  });
              } else {
                alert("Please fill in all information.");
              }
            
        

    }
    return (
        <div className='contact justify--content'>
            <h2>CONTACT</h2>
            <figure className='contact__sky justify--content'>
            <div className="custom-shape-divider-top-1684508191">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input id='name' placeholder='Greg' required type="text"></input>
                    <label htmlFor='email'>Email</label>
                    <input id='email' placeholder='gregou@hotmail.com' required type='email'></input>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' placeholder='I like your work' required rows='6'></textarea>
                    <button id='sendBtn' onClick={sendMessage}>Send</button>
                </form>
                
                <figure className='bar'></figure>
                <figure className='vitre'></figure>
            </figure>
            <figure className='terrace'>
                <img className='moi' src={moi} alt='moi'/>
                <figure className='moiTalk justify--content'>
                    <p>Hey, let's talk !</p>
                    
                </figure>
            </figure>
            
        </div>
    );
};

export default Contact;