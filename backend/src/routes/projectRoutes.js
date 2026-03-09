import { Router } from 'express';
import {
  addTaskToProject,
  createProject,
  deleteTask,
  getProjects,
  updateTask
} from '../controllers/projectController.js';

const router = Router();

router.get('/', getProjects);
router.post('/', createProject);
router.post('/:projectId/tasks', addTaskToProject);
router.patch('/:projectId/tasks/:taskId', updateTask);
router.delete('/:projectId/tasks/:taskId', deleteTask);

export default router;
