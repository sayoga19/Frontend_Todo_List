// Comments.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { getComments, createComment, deleteComment } from '../util/api';

const Comments = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(taskId);
      setComments(data);
    };
    fetchComments();
  }, [taskId]);

  const handleCreateComment = async () => {
    const commentData = { text: newComment, taskId };
    const createdComment = await createComment(commentData);
    setComments([...comments, createdComment]);
    setNewComment('');
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <Box>
      <Input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <Button onClick={handleCreateComment}>Post Comment</Button>
      {comments.map(comment => (
        <Box key={comment.id}>
          <Text>{comment.text}</Text>
          <Button onClick={() => handleDeleteComment(comment.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default Comments;
