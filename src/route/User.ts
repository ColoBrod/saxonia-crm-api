import express from 'express';
import controller from '../controller/User';
import '../model/User';

require('../model/User');

const router = express.Router();

router.get('/:id', controller.readId); 

export default router;

