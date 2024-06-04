import React, { useState } from 'react';
import SubjectForm from './SubjectForm';
import TimeslotForm from './TimeslotForm';
import ViewProfiles from './AdminViewStudentProfile';
import Timetable from './Timetable';
import ViewLecturerProfiles from './AdminViewLecturerProfile'

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('subjects');

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab('subjects')}>Create Subjects</button>
                <button onClick={() => setActiveTab('timeslots')}>Allocate Timeslots</button>
                <button onClick={() => setActiveTab('profiles')}>View Student Profiles</button>
                <button onClick={() => setActiveTab('lecprofiles')}>View Lecturer Profiles</button>
                <button onClick={() => setActiveTab('timetable')}>View Timetable</button>
            </nav>

            <div>
                {activeTab === 'subjects' && <SubjectForm />}
                {activeTab === 'timeslots' && <TimeslotForm />}
                {activeTab === 'profiles' && <ViewProfiles />}
                {activeTab === 'lecprofiles' && <ViewLecturerProfiles />}
                {activeTab === 'timetable' && <Timetable />}
            </div>
        </div>
    );
};

export default AdminDashboard;
