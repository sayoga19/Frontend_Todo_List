import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/', // Ganti dengan URL backend
  });

// api users
export const getUsers = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
}

export const createUser = async (userData) => {
  try {
    const response = await api.post('/user', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user ${userId}:`, error);
    throw error;
  }
}

export const deleteUser = async (userId) => {
  try {
    await api.delete(`/user/${userId}`);
    console.log(`User ${userId} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting user ${userId}:`, error);
    throw error;
  }
}

// api tasks
export const getTasks = async () => {
  try {
    const response = await api.get('/task');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const getTaskById = async (taskId) => {
  try {
    const response = await api.get(`/task/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task ${taskId}:`, error);
    throw error;
  }
}

export const createTask = async (taskData) => {
  try {
    const response = await api.post('/task', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.put(`/task/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${taskId}:`, error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await api.delete(`/task/${taskId}`);
    console.log(`Task ${taskId} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting task ${taskId}:`, error);
    throw error;
  }
};

// api comments
export const getComments = async () => {
  try {
    const response = await api.get('/comment');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
}

export const getCommentById = async (commentId) => {
  try {
    const response = await api.get(`/comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comment ${commentId}:`, error);
    throw error;
  }
}

export const createComment = async (commentData) => {
  try {
    const response = await api.post('/comment', commentData);
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
}

export const updateComment = async (commentId, commentData) => {
  try {
    const response = await api.put(`/comment/${commentId}`, commentData);
    return response.data;
  } catch (error) {
    console.error(`Error updating comment ${commentId}:`, error);
    throw error;
  }
}

export const deleteComment = async (commentId) => {
  try {
    await api.delete(`/comment/${commentId}`);
    console.log(`Comment ${commentId} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting comment ${commentId}:`, error);
    throw error;
  }
}
