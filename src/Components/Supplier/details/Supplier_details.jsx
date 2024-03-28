import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Supplier_details.scss';
import { Link } from 'react-router-dom';


const validationSchema = yup.object({

    companyname: yup

        .string('Enter your Company name')
        .required('Name is required'),

    name: yup
        .string('Enter your name')
        .email('Enter a valid email')
        .required('Email is required'),

    email: yup
        .string('Enter your email')
        .required('email is required')
        .min(30)
        .max(100),

    phone: yup
        .string('Enter your phone no.')
        .min(10)
        .required('Phone no. is required'),
    
    location: yup
        .string('Enter you location')
        .required('location is required')




});

const Supplier_details = () => {
    const formik = useFormik({
        initialValues: {
            companyname: '',
            name: '',
            phone: '',
            email: '',
            location: ''

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },

    });
  return (
    <div className='main_sd'>
        <h1>Login</h1>
        <div className="form">
        <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="company name"
                    name="company name"
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    label="Company Name"
                    variant="standard" /><br />


                <TextField
                    id="name"
                    name="name"

                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Owner Name"
                    variant="standard" /><br />

                <TextField
                    id="phone"
                    name="phone"

                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    label="Phone Number"
                    variant="standard" /><br />


                <TextField
                    id="email"
                    name="email"

                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email"
                    variant="standard" /><br />

             <TextField
                    id="location"
                    name="location"

                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}
                    label="Location"
                    variant="standard" /><br />
<br />

               <Link to='/supplierhome'> <Button variant="contained" className='SM' type='submit'>Submit</Button></Link>

            </form> 
            

            </div>
    </div>
  )
}

export default Supplier_details