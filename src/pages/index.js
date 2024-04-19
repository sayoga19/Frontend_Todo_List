import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { getTasks, createTask, updateTask, deleteTask } from '../util/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      const taskId = updatedTask.id;
      await updateTask(taskId, updatedTask);
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    } catch (error) {
      console.error(`Error updating task ${updatedTask.id}:`, error);
    }
  };
  

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
    }
  };

  return (
    <Box p={5}>
      <Heading mb={5}>To Do List</Heading>
      <TaskForm onSubmit={handleCreateTask} initialValues={{ name: '', description: '', dueDate: '', status: 'todo', urgency: 'low' }} />
      <VStack spacing={5} align="stretch">
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
      </VStack>
    </Box>
  );
};

export default App;
