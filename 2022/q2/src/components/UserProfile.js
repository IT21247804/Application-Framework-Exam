import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { viewProfiles, deleteUser } from '../api/api';

const UserProfile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await viewProfiles(id);
                setProfile(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteUser(id);
            alert('User deleted successfully');
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h2>{profile.userName}</h2>
            <p>Email: {profile.email}</p>
            <p>User Type: {profile.userType}</p>
            <button onClick={handleDelete}>Delete User</button>
        </div>
    );
};

export default UserProfile;
