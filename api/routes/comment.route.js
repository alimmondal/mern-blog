import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';

import { createComment, deleteComment, editComment, getAllComments, likeComment } from '../controller/comment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);

router.get('/get-comments/:postId', verifyToken, getAllComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/edit-comment/:commentId', verifyToken, editComment);

router.delete('/delete-comment/:commentId/:userId', verifyToken, deleteComment);


export default router
