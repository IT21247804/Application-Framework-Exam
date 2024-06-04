import React from 'react';
import Timetable from './Timetable';
import ViewLecturerProfiles from './ViewLecturerProfiles'

const LecturerStudentDashboard = ({ userType }) => {
    console.log(userType);
    return (
        <div>
            <h2>{userType === 'lecturer' ? 'Lecturer' : 'Student'} Dashboard</h2>
            <p> This dashboard is used to show the semester timetable for students and the lecturer details, since in the paper it said "You can select one user roll from Lecturer and student to develop"</p>
            <Timetable />
            <ViewLecturerProfiles userType={userType === 'lecturer' ? 'student' : 'lecturer'} />
        </div>
    );
};

export default LecturerStudentDashboard;
