// import React, { useState, useEffect } from 'react';
// import { viewTimetable } from '../api/api';

// const Timetable = () => {
//     const [timetable, setTimetable] = useState([]);

//     useEffect(() => {
//         const fetchTimetable = async () => {
//             try {
//                 const response = await viewTimetable();
//                 setTimetable(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch timetable:', error);
//             }
//         };

//         fetchTimetable();
//     }, []);

//     return (
//         <div>
//             <h2>Timetable</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Module</th>
//                         <th>Lecturer</th>
//                         <th>Lecture Hall</th>
//                         <th>Day</th>
//                         <th>Start Time</th>
//                         <th>End Time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {timetable.map((entry) => (
//                         <tr key={entry._id}>
//                             <td>{entry.module}</td>
//                             <td>{entry.lecturer}</td>
//                             <td>{entry.lectureHall}</td>
//                             <td>{entry.day}</td>
//                             <td>{entry.startTime}</td>
//                             <td>{entry.endTime}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Timetable;

import React, { useState, useEffect } from 'react';
import { viewTimetable } from '../api/api';

const Timetable = () => {
    const [timetable, setTimetable] = useState([]);

    useEffect(() => {
        const fetchTimetable = async () => {
            try {
                const response = await viewTimetable();
                setTimetable(response.data);
            } catch (error) {
                console.error('Failed to fetch timetable:', error);
            }
        };

        fetchTimetable();
    }, []);

    return (
        <div>
            <h2>Timetable</h2>
            <table>
                <thead>
                    <tr>
                        <th>Module Name</th>
                        <th>Lecturer Name</th>
                        <th>Lecture Hall</th>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {timetable.map((entry) => (
                        <tr key={entry._id}>
                            <td>{entry.module.moduleName}</td>
                            <td>{entry.lecturer.name}</td>
                            <td>{entry.lectureHall}</td>
                            <td>{entry.day}</td>
                            <td>{entry.startTime}</td>
                            <td>{entry.endTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;

