import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/post.controller.js';
import { createComment, deleteComment, getAllComments, updateComment } from '../controller/comment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);

router.get('/get-comment', verifyToken, getAllComments);

router.delete('/delete-comment/:commentId/:userId', verifyToken, deleteComment);

router.put('/update-comment/:commentId/:userId', verifyToken, updateComment);

export default router
