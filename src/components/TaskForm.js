import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Select, Button, Collapse, useDisclosure } from '@chakra-ui/react';

const TaskForm = ({ onSubmit, initialValues }) => {
  const [taskData, setTaskData] = useState(initialValues);
  const { isOpen, onToggle } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
    setTaskData(initialValues); // Reset form after submission
    onToggle(); // Close the form
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Button onClick={onToggle} mb={4}>
        {isOpen ? "Close Form" : "Open Form"}
      </Button>
      <Collapse in={isOpen}>
        <Box as="form" p={5} shadow="md" borderWidth="1px" onSubmit={handleSubmit}>
          <FormControl id="title">
            <FormLabel>Task Name:</FormLabel>
            <Input type="text" name="title" value={taskData.title} onChange={handleChange} />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description:</FormLabel>
            <Textarea name="description" value={taskData.description} onChange={handleChange} />
          </FormControl>
          <FormControl id="due_date">
            <FormLabel>Due Date:</FormLabel>
            <Input type="date" name="due_date" value={taskData.due_date} onChange={handleChange} />
          </FormControl>
          <FormControl id="status">
            <FormLabel>Status:</FormLabel>
            <Select name="status" value={taskData.status} onChange={handleChange}>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </Select>
          </FormControl>
          <FormControl id="urgency">
            <FormLabel>Urgency:</FormLabel>
            <Select name="urgency" value={taskData.urgency} onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TaskForm;
