import express from 'express';
import {  deleteUser, getUsers, signoutUser, test, updateUser,  } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', verifyToken, signoutUser);
router.get('/get-users', verifyToken, getUsers);


export default router
