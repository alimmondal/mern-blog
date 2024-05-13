import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createPost);
router.get('/get-posts', getAllPosts);
router.delete('/delete-post/:postId/:userId', verifyToken, deletePost);
router.put('/update-post/:postId/:userId', verifyToken, updatePost);

export default router
