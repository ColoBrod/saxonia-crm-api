import express from 'express';
import user from './Employee';

const router = express.Router();

router.use('/employee', user); 

export default router;

