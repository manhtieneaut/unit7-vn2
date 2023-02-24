import React from "react";
import { Formik } from "formik";

import "./style.css"

const TextEmail = () => {


    return (
        <div className="container">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
            <h1>Editer email form.</h1>
            <Formik
                initialValues={{ name: '', title: '', sendTo: '', file: '', message: '', }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.title) {
                        errors.title = 'Required';
                    }
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.sendTo)) {
                        errors.sendTo = 'Invalid email address';
                    }

                    if (!values.file) {
                        errors.file = 'Required';
                    }
                    if (!values.message) {
                        errors.message = 'required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }} >


                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Should you have any questions, please do not hesitate to contact me :</h1>
                        <div className="contentform">
                            <div id="sendmessage"> Your message has been sent successfully. Thank you. </div>
                            <div className="leftcontact">
                                <div className="form-group">
                                    <p>Name <span>*</span></p>
                                    <span className="icon-case"><i className="fas fa-child"></i></span>
                                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                    {errors.name && touched.name && <div className="error">{errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <p>Title <span>*</span></p>
                                    <span className="icon-case"><i className="fas fa-heading"></i></span>
                                    <input type="text" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                                    {errors.title && touched.title && <div className="error">{errors.title}</div>}
                                </div>
                                <div className="form-group">
                                    <p>Send to <span>*</span></p>
                                    <span className="icon-case"><i className="fa fa-location-arrow"></i></span>
                                    <input type="email" name="sendTo" onChange={handleChange} onBlur={handleBlur} value={values.sendTo} />
                                    {errors.sendTo && touched.sendTo && <div className="error">{errors.sendTo}</div>}
                                </div>
                            </div>

                            <div className="rightcontact">
                                <div className="form-group">
                                    <p>Upload file <span>*</span></p>
                                    <span className="icon-case"><i className="fas fa-file"></i></span>
                                    <input type="file" name="file" onChange={handleChange} onBlur={handleBlur} value={values.file} />
                                    {errors.file && touched.file && <div className="error">{errors.file}</div>}
                                </div>
                                <div className="form-group">
                                    <p>Message <span>*</span></p>
                                    <span className="icon-case"><i className="fas fa-comments"></i></span>
                                    <textarea type="text" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} ></textarea>
                                    {errors.message && touched.message && <div className="error">{errors.message}</div>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="bouton-contact">Send</button>
                    </form>

                )}

            </Formik>
        </div >
    )
}

export default TextEmail; 