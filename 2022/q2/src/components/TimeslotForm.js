import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { allocateTimeslot } from '../api/api';

const TimeslotForm = () => {
    const formik = useFormik({
        initialValues: {
            moduleId: '',
            day: '',
            startTime: '',
            endTime: '',
        },
        validationSchema: Yup.object({
            moduleId: Yup.string().required('Required'),
            day: Yup.string().required('Required'),
            startTime: Yup.string().required('Required'),
            endTime: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                await allocateTimeslot(values.moduleId, {
                    day: values.day,
                    startTime: values.startTime,
                    endTime: values.endTime,
                });
                alert('Timeslot allocated successfully');
            } catch (error) {
                alert('Failed to allocate timeslot');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Module ID</label>
                <input
                    type="text"
                    name="moduleId"
                    onChange={formik.handleChange}
                    value={formik.values.moduleId}
                />
                {formik.errors.moduleId && formik.touched.moduleId && <div>{formik.errors.moduleId}</div>}
            </div>
            <div>
                <label>Day</label>
                <input
                    type="text"
                    name="day"
                    onChange={formik.handleChange}
                    value={formik.values.day}
                />
                {formik.errors.day && formik.touched.day && <div>{formik.errors.day}</div>}
            </div>
            <div>
                <label>Start Time</label>
                <input
                    type="text"
                    name="startTime"
                    onChange={formik.handleChange}
                    value={formik.values.startTime}
                />
                {formik.errors.startTime && formik.touched.startTime && <div>{formik.errors.startTime}</div>}
            </div>
            <div>
                <label>End Time</label>
                <input
                    type="text"
                    name="endTime"
                    onChange={formik.handleChange}
                    value={formik.values.endTime}
                />
                {formik.errors.endTime && formik.touched.endTime && <div>{formik.errors.endTime}</div>}
            </div>
            <button type="submit">Allocate Timeslot</button>
        </form>
    );
};

export default TimeslotForm;
