import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/post.controller.js';
import { createComment, deleteComment, getAllComments, likeComment, updateComment } from '../controller/comment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);

router.get('/get-comments/:postId', verifyToken, getAllComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);

router.delete('/delete-comment/:commentId/:userId', verifyToken, deleteComment);

router.put('/update-comment/:commentId/:userId', verifyToken, updateComment);

export default router
