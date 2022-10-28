import express from 'express';
import user from './Employee';

const router = express.Router();

router.use('/user', user); 

export default router;
