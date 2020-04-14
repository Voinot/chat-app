import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types'


class Contact extends React.Component {
    state = {
        online: this.props.online
    }

    render() {
        return (
            <div className='Contact'>
                <img className='avatar' src={this.props.avatar} alt='' ></img>

                <div className='name-status'>
                    <p className="name">{this.props.name}</p>
                    <div className='status'
                        onClick={event => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus });
                        }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <div className='status-text'>{this.state.online ? 'online' : 'Offline'}</div>
                    </div>
                </div>
            </div>
        )
    }

}


Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
};



export default Contact;