import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Select, Button } from '@chakra-ui/react';

const EditTaskForm = ({ task, onSubmit, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTask);
  };

  const handleCancel = () => {
    onCancel();
  }

  return (
    <Box as="form" p={5} shadow="md" borderWidth="1px" onSubmit={handleSubmit}>
      <FormControl id="title">
        <FormLabel>Task Title:</FormLabel>
        <Input type="text" name="title" value={editedTask.title} onChange={handleChange} />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Description:</FormLabel>
        <Textarea name="description" value={editedTask.description} onChange={handleChange} />
      </FormControl>
      <FormControl id="due_date">
        <FormLabel>Due Date:</FormLabel>
        <Input type="date" name="due_date" value={editedTask.due_date} onChange={handleChange} />
      </FormControl>
      <FormControl id="status">
        <FormLabel>Status:</FormLabel>
        <Select name="status" value={editedTask.status} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </Select>
      </FormControl>
      <FormControl id="urgency">
        <FormLabel>Urgency:</FormLabel>
        <Select name="urgency" value={editedTask.urgency} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Update
      </Button>
      <Button mt={4} colorScheme="red" onClick={handleCancel}>
        Cancel
      </Button>
    </Box>
  );
};

export default EditTaskForm;
