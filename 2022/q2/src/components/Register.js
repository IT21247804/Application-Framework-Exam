import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../api/api';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            userType: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
            userType: Yup.string().oneOf(['admin', 'lecturer', 'student'], 'Invalid user type').required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                await registerUser(values);
                alert('Registration successful');
            } catch (error) {
                alert('Registration failed');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                />
                {formik.errors.userName && formik.touched.userName && <div>{formik.errors.userName}</div>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
            </div>
            <div>
                <label>User Type</label>
                <select
                    name="userType"
                    onChange={formik.handleChange}
                    value={formik.values.userType}
                >
                    <option value="" label="Select user type" />
                    <option value="admin" label="Admin" />
                    <option value="lecturer" label="Lecturer" />
                    <option value="student" label="Student" />
                </select>
                {formik.errors.userType && formik.touched.userType && <div>{formik.errors.userType}</div>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
