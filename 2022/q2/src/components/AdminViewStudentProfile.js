import React, { useState, useEffect } from 'react';
import { viewallProfiles, deleteUser } from '../api/api';

const ViewLecturerProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await viewallProfiles();
        const lecturerProfiles = response.data.filter(profile => profile.userType === 'student');
        setProfiles(lecturerProfiles);
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      const updatedProfiles = profiles.filter((profile) => profile._id !== id);
      setProfiles(updatedProfiles);
    } catch (error) {
      console.error('Failed to delete profile:', error);
      // Handle errors appropriately, like displaying an error message to the user
    }
  };

  return (
    <div>
      <h2>Lecturer Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile._id}>
              <td>{profile.userName}</td>
              <td>{profile.email}</td>
              <td>
                <button onClick={() => handleDelete(profile._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLecturerProfiles;