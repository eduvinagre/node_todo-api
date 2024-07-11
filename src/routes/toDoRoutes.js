const express = require('express');
const router = express.Router();
const todoController = require('../controllers/toDoController');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/update-many', todoController.updateManyTodos);
router.delete('/delete-many', todoController.deleteManyTodos);

module.exports = router;
