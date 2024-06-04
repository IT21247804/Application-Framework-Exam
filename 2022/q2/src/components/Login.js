import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await loginUser(values);
                setUser(response.data);
                console.log(response.data);
                alert('Login successful');
                if (response.data.user.userType === 'admin') {
                    navigate('/dashboard/admin'); // Navigate to admin dashboard path
                  } else {
                    navigate('/dashboard/lecturer-student'); // Navigate to lecturer/student dashboard path
                  }
            } catch (error) {
                alert('Login failed');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
