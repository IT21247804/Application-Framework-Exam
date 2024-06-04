import React, { useState, useEffect } from 'react';
import { viewallProfiles } from '../api/api';

const ViewLecturerProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
          try {
            const response = await viewallProfiles();
            const studentProfiles = response.data.filter(profile => profile.userType === 'lecturer');
            setProfiles(studentProfiles);
          } catch (error) {
            console.error('Failed to fetch profiles:', error);
          }
        };
    
        fetchProfiles();
      }, []);

    return (
        <div>
            <h2> Profiles</h2>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((profile) => (
                        <tr key={profile._id}>
                            <td>{profile.userName}</td>
                            <td>{profile.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewLecturerProfiles;
