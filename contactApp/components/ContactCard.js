import React from 'react';
import user from '../images/220513d3-정종빈7398-블루-웹용.jpg';

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
        return (
            <div>
                <div className='item'>
                    <img className='ui avatar image' src={user} alt="user" />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className='trash alternate outline icon'
                    style={{color:"red", marginTop: "7px" }}></i>
            </div>
            </div>
        );
}

export default ContactCard;