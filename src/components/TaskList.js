import React, { useState } from 'react';
import { Box, Heading, Text, Button, HStack, VStack, Flex } from '@chakra-ui/react';
import EditTaskForm from './EditTaskForm';
import Comments from './Comments'; // Import komponen Comments

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [commentingTaskId, setCommentingTaskId] = useState(null); // State untuk menyimpan ID tugas yang sedang dikomentari

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleComment = (taskId) => {
    setCommentingTaskId(taskId); // Atur ID tugas yang sedang dikomentari
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleUpdate = (updatedTask) => {
    onUpdate(updatedTask);
    setEditingTaskId(null);
  };

  const handleDelete = (taskId) => {
    onDelete(taskId);
    if (commentingTaskId === taskId) {
      setCommentingTaskId(null); // Jika tugas yang sedang dikomentari dihapus, atur state tugas yang sedang dikomentari menjadi null
    }
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Task List</Heading>
      {tasks.map((task) => (
        <Box key={task.id} p={5} shadow="md" borderWidth="1px">
          {editingTaskId === task.id ? (
            <EditTaskForm task={task} onSubmit={handleUpdate} onCancel={handleCancelEdit} />
          ) : (
            <Flex direction={["column", "row"]} justify="space-between" align="center">
              <VStack align="start" flex="1">
                <Heading size="sm">{task.title}</Heading>
                <Text fontSize="sm">Description: {task.description}</Text>
                <Text fontSize="sm">Due Date: {task.due_date}</Text>
                <Text fontSize="sm">Status: {task.status}</Text>
                <Text fontSize="sm">Urgency: {task.urgency}</Text>
                {commentingTaskId === task.id && <Comments taskId={task.id} />} {/* Tampilkan komponen Comments hanya untuk tugas yang sedang dikomentari */}
              </VStack>
              <HStack spacing={3}>
                <Button size="sm" colorScheme="teal" onClick={() => handleEdit(task.id)}>Edit</Button>
                <Button size="sm" colorScheme="blue" onClick={() => handleComment(task.id)}>Comment</Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDelete(task.id)}>Delete</Button>
              </HStack>
            </Flex>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TaskList;
