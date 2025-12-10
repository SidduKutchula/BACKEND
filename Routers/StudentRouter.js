import express from 'express';
import { getStudents, addStudents, updateStudents } from '../Controllers/StudentController.js';
const router = express.Router();
router.get('/get-data', getStudents);
router.post('/post-data', addStudents);
router.put('/update', updateStudents);
export { getStudents, addStudents, updateStudents };
