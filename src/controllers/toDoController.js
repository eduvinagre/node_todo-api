const todoService = require('../services/toDoService');

const ToDoController = {
  async getAllToDos(req, res) {
    try {
      const todos = await todoService.getAllToDos(req.query);
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getToDoById(req, res) {
    try {
      const todo = await todoService.getToDoById(req.params.id);
      if (!todo) return res.status(404).json({ message: 'Todo not found' });
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createToDo(req, res) {
    try {
      const todo = await todoService.createToDo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateToDo(req, res) {
    try {
      const todo = await todoService.updateToDo(req.params.id, req.body);
      res.json(todo);
    } catch (error) {
      if (error.message === 'Todo not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  },

  async deleteToDo(req, res) {
    try {
      const result = await todoService.deleteToDo(req.params.id);
      res.json(result);
    } catch (error) {
      if (error.message === 'Todo not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async updateManyToDos(req, res) {
    try {
      const updatedTodos = await todoService.updateManyToDos(req.body.todos);
      res.json({ message: `${updatedTodos.length} todos updated successfully`, updatedTodos });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteManyToDos(req, res) {
    try {
      const deletedCount = await todoService.deleteManyToDos(req.body.ids);
      res.json({ message: `${deletedCount} todos deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = ToDoController;
