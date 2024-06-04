import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createModule } from '../api/api';

const SubjectForm = () => {
    const formik = useFormik({
        initialValues: {
            moduleName: '',
            duration: '',
            lecturerIds: '',
            academicYear: '',
        },
        validationSchema: Yup.object({
            moduleName: Yup.string().required('Required'),
            duration: Yup.number().required('Required'),
            lecturerIds: Yup.string().required('Required'),
            academicYear: Yup.number().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                await createModule(values);
                alert('Subject created successfully');
            } catch (error) {
                alert('Failed to create subject');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Module Name</label>
                <input
                    type="text"
                    name="moduleName"
                    onChange={formik.handleChange}
                    value={formik.values.moduleName}
                />
                {formik.errors.moduleName && formik.touched.moduleName && <div>{formik.errors.moduleName}</div>}
            </div>
            <div>
                <label>Duration</label>
                <input
                    type="number"
                    name="duration"
                    onChange={formik.handleChange}
                    value={formik.values.duration}
                />
                {formik.errors.duration && formik.touched.duration && <div>{formik.errors.duration}</div>}
            </div>
            <div>
                <label>Lecturer IDs</label>
                <input
                    type="text"
                    name="lecturerIds"
                    onChange={formik.handleChange}
                    value={formik.values.lecturerIds}
                />
                {formik.errors.lecturerIds && formik.touched.lecturerIds && <div>{formik.errors.lecturerIds}</div>}
            </div>
            <div>
                <label>Academic Year</label>
                <input
                    type="number"
                    name="academicYear"
                    onChange={formik.handleChange}
                    value={formik.values.academicYear}
                />
                {formik.errors.academicYear && formik.touched.academicYear && <div>{formik.errors.academicYear}</div>}
            </div>
            <button type="submit">Create Subject</button>
        </form>
    );
};

export default SubjectForm;
