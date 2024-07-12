const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoController');

router.get('/', toDoController.getAllToDos);
router.get('/:id', toDoController.getToDoById);
router.post('/', toDoController.createToDo);
router.patch('/:id', toDoController.updateToDo);
router.delete('/:id', toDoController.deleteToDo);

module.exports = router;
