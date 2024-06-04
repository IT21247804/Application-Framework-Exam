import React, { useState, useEffect } from 'react';
import { viewallProfiles, deleteUser, editUser } from '../api/api';

const ViewLecturerProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [isEditting, setIsEditing] = useState({ id: null, data: {} }); // Track editing state

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await viewallProfiles();
        const lecturerProfiles = response.data.filter(profile => profile.userType === 'lecturer');
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
      // Handle errors appropriately
    }
  };

  const handleEdit = (id, data) => {
    setIsEditing({ id, data }); // Set editing state with profile ID and data
  };

  const handleEditSubmit = async (updatedData) => {
    const { id } = isEditting; // Retrieve ID from editing state

    try {
      const response = await editUser(id, updatedData);
      const updatedProfiles = profiles.map((profile) => (profile._id === id ? response.data : profile)); // Update profile in state
      setProfiles(updatedProfiles);
      setIsEditing({ id: null, data: {} }); // Reset editing state
    } catch (error) {
      console.error('Failed to edit profile:', error);
      // Handle errors appropriately
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile._id}>
              <td>{profile.userName}</td>
              <td>{profile.email}</td>
              <td>
                <button onClick={() => handleEdit(profile._id, profile)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(profile._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditional rendering of edit form based on editing state */}
      {isEditting.id && (
        <div>
          <h3>Edit Profile (ID: {isEditting.id})</h3>
          <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
            {/* Edit form fields for user data (userName, email, etc.) */}
            <input type="text" name="userName" defaultValue={isEditting.data.userName} />
            <input type="email" name="email" defaultValue={isEditting.data.email} />
            {/* ... other edit form fields */}
            <button type="submit" onClick={() => handleEditSubmit(isEditting.data)}>
              Submit Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewLecturerProfiles;
