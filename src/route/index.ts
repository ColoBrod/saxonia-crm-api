import express from 'express';
import user from './User';

const router = express.Router();

router.use('/user', user); 

export default router;
