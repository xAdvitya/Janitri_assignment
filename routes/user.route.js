import express from 'express';
import { getProfile, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/:userId', getProfile);
router.get('/', getUsers);

export default router;
