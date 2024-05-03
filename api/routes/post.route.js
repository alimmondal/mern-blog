import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, deletePost, getAllPosts } from '../controller/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createPost);
router.get('/get-posts', verifyToken, getAllPosts);
router.get('/delete-post', verifyToken, deletePost);

export default router
