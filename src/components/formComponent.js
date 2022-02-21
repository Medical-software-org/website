import React from 'react';
import { Formik } from 'formik';
import { preRegisterSchema } from './validation';

function formComponent({heading, subHeading, color, buttonText, db }) {

    const preRegister = async (values) => {
        db.ref('email-list')
            .push({
                institution: values.name,
                email: values.email,
            })
            .then(() => {
                alert('Sign up has been successful!');
            });
    }

    return (
        <Formik
            initialValues={{name: '', email: ''}}
            validationSchema={preRegisterSchema}
            onSubmit={(values, actions) => {
                preRegister(values);
                actions.resetForm();
            }}
        >
            {
                props => (
                    <div className='center-container' style={{background: color}} >
                        <h1 style={styles.text2} >{heading}</h1>
                        <h2 style={styles.text} >{subHeading}</h2>
                        <div style={{marignTop: 30}} >
                            <input onChange={props.handleChange('name')} value={props.values.name} style={styles.input} placeholder='Institution Name...' className='inputBox' />
                            <p 
                                style={{color: 'red'}}>
                                {props.touched.name && props.errors.name}
                            </p>
                            <input onChange={props.handleChange('email')} value={props.values.email} style={styles.input} placeholder='Institution Email...' className='inputBox' />
                            <p 
                                style={{color: 'red'}}>
                                {props.touched.email && props.errors.email}
                            </p>
                            <button onClick={props.handleSubmit} className='btnc' >{buttonText}</button>
                        </div>
                    </div>
                )
            }
        </Formik>
    )
}

const styles = {
    text: {
        color: "white",
        marginBottom: 30,
    },
    text2: {
        color: "white",
        fontSize: 56,
    },
    input: {
        borderRadius: 10, 
        textAlign: 'center', 
        padding: 10
    },
}

export default formComponent
