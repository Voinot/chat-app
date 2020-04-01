import React from 'react'
import './Contact.css'
const status = true


function Contact() {
    return (
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/men/1.jpg' alt='' ></img>

            <div className="name-status">
                <p className='name'>Liam Douglas</p>
                <div className='status'>
                    <div className='status-online'></div>
                    <div className='status-text'>{status ? "Online" : "Offline"}</div>
                </div>
            </div>
        </div>
    )
}













export default Contact