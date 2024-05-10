import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';

import { createComment, deleteComment, editComment, getAllComments, getSinglePostComments, likeComment } from '../controller/comment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);

router.get('/get-comments/:postId', verifyToken, getSinglePostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);

router.delete('/delete-comment/:commentId', verifyToken, deleteComment);
router.get('/getComments/', verifyToken, getAllComments);


export default router
