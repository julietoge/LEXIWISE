import React, { useState } from 'react'
import './form.css'
import Header from './header/header'

const INITIAL_STATE = {
    name:'', email:'', subject:'', message:''
}

const ContactUsForm = ({submitForm}) => {

const [form, setForm] = useState(INITIAL_STATE);

const handleChange = (event) => {
    const {id, value} = event.target;
    setForm(prevState => ({
        ...prevState,
        [id]:value
    }));
    console.log(form.name+' '+form.email+' '+form.subject+' '+form.message);
};
    
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name'+form.name);
    console.log('Email'+form.email);
    console.log('Subject'+form.subject);
    console.log('Message'+form.message);

    submitForm(form)

    setForm(INITIAL_STATE);
}

    return (
        <>
            <Header />
            <div className='form-wrapper'>
                <h2>CONTACT_US</h2>
                <form onSubmit={handleSubmit}>

                    <div className='name-input-wrapper'>
                        <label htmlFor="name">NAME:</label>
                        <input type="text" id="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className='email-input-wrapper'>
                        <label htmlFor="email">EMAIL:</label>
                        <input type="email" id="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className='subject-input-wrapper'>
                        <label htmlFor="subject">SUBJECT:</label>
                        <input type="text" id="subject" value={form.subject} onChange={handleChange} />
                    </div>
                    <div className='message-input-wrapper'>
                        <label htmlFor="message">MESSAGE:</label>
                        <textarea id="message" cols="30" rows="10" value={form.message} onChange={handleChange}></textarea>
                    </div>
                    <div className='btn-wrapper'>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUsForm;