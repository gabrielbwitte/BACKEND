const express = require('express');
const tasksControllers = require('./controllers/tasksControllers');

const router = express.Router();
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

router.get('/tasks', tasksControllers.getAll);
router.post('/tasks',tasksMiddleware.validateFieldsTitle, tasksControllers.createTask);
router.delete('/tasks/:id', tasksControllers.deleteTask);
router.put('/tasks/:id',
    tasksMiddleware.validateFieldsTitle,
    tasksMiddleware.validateFieldsStatus,
    tasksControllers.updateTask);


module.exports = router;