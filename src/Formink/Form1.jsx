import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import jsPDF from 'jspdf';
import './Form.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone is required'),
});

const initialValues = {
    name: '',
    email: '',
    address: '',
    phone: '',
};

const SimpleForm = () => {
    const handleSubmit = (values) => {
        generatePdf(values);
    };
    const generatePdf = (values) => {
        const pdf = new jsPDF();
        
     
        
        
        // Add title
        pdf.setFontSize(16);
        pdf.text('Form Data', 10, 20);
        
        // Add form data
        pdf.setFontSize(12);
        pdf.text(`Name: ${values.name}`, 10, 40);
        // pdf.text(Mobile Number:mobileNumber, 10, 50);
        
        pdf.save('form-data.pdf');
      };

    return (
        <div>
            <h1>Simple Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                            <label htmlFor="address">Address</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" component="div" />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SimpleForm;
