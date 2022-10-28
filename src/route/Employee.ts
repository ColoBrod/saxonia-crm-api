import express from 'express';
import controller from '../controller/Employee';

const router = express.Router();

router.get('/', controller.readAll);
router.get('/:id', controller.read); 
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;

