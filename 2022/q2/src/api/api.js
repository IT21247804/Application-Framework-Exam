import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registerUser = (data) => api.post('/users/register', data);
export const loginUser = (data) => api.post('/users/login', data);
export const createModule = (data) => api.post('/modules', data);
export const allocateTimeslot = (id, data) => api.put(`/modules/${id}/timeslot`, data);
export const viewTimetable = () => api.get('/timetables');
export const viewProfiles = (id) => api.get(`/users/profile/${id}`);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const viewallProfiles = (id) => api.get('/users/profiles');
export const editUser = async (id, data) => {
    try {
      const response = await api.patch(`/users/profile/${id}`, data);
      return response.data; // Assuming edited user data is returned
    } catch (error) {
      console.error('Error editing user:', error);
      throw error; // Re-throw the error for handling in your component
    }
  };
export default api;
