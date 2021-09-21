import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import{ init } from 'emailjs-com';
import emailjs from "emailjs-com";


const Contact = () => {
    init("user_f6iWN8JtxMlViKGrOLU6S");
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [successMessage, setSuccessMessage] = useState("")

    const sendEmail = (vars)=> {
        emailjs.send('service_mwj5t9q', 'template_tfdwe15', vars)
        .then(function(response) {
           setSuccessMessage("Submitted successfully! I'll be in touch soon!");
        }, function(error) {
           console.log('FAILED...', error);
        });
    }
    const onSubmit = (data, r) => {
        const vars = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        }
        sendEmail(vars)
        r.target.reset()
    }
    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Want to learn more? Fill out the form below, and I'll get back to you as soon as possible!</p>
                <span className="success-message">
                    {successMessage}
                </span>
            </div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input name="name" type="text" className="form-control" placeholder="Name" {...register('name', { required: "Please enter your name" })}/>
                        <span className="error-messages">
                            {errors.name && errors.name.message}
                        </span>
                        <input name="phone" type="text" className="form-control" placeholder="Phone" {...register('phone', { required: "Please enter your phone" })}/>
                        <span className="error-messages">
                            {errors.phone && errors.phone.message}
                        </span>
                        <input name="email" type="email" className="form-control" placeholder="Email" {...register('email', { required: "Please enter your email" })}/>
                        <span className="error-messages">
                            {errors.email && errors.email.message}
                        </span>
                        <input name="subject" type="text" className="form-control" placeholder="Subject" {...register('subject', { required: "Please enter a subject" })}/>
                        <span className="error-messages">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea name="description" type="text" className="form-control" placeholder="Description"/>
                        <button className="btn-main-offer contact-btn" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default Contact
