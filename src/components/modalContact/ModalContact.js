import React, {useState} from 'react';
import '../modalContact/modalContact.scss'

const ModalContact = () => {
    const [openModal, setOpenModal] = useState(false)
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


    return openModal ? (
        <div className='modalBack'>
            <div  className='modalOpen'>

                <form>
                    <label htmlFor='name'>Name</label>
                    <input id='name' placeholder='Greg' required type="text"></input>
                    <label htmlFor='email'>Email</label>
                    <input id='email' placeholder='gregou@hotmail.com' required type='email'></input>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' placeholder='I like your work' required rows='6'></textarea>
                    <button id='sendBtn' onClick={sendMessage}>Send</button>
                </form>
            </div>
            
        </div>
    ) : (
        <button className='modalClose' onClick={() => setOpenModal(true)}>
            Send a message
        </button>
    );
};

export default ModalContact;