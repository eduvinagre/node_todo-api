const todoService = require('../services/toDoService');

const ToDoController = {
  toDTO(toDo) {
    return {
      id: toDo.id,
      title: toDo.title,
      completed: toDo.completed,
    };
  },

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
    const { id, ...toDoData } = req.body;
    try {
      const toDo = await todoService.createToDo(toDoData);
      res.status(201).json(toDo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateToDo(req, res) {
    const { id } = req.params;
    try {
      const todo = await todoService.updateToDo(id, req.body);
      res.json(todo);
    } catch (error) {
      if (error.message === 'ToDo not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  },

  async deleteToDo(req, res) {
    const { id } = req.params;
    try {
      const result = await todoService.deleteToDo(id);
      res.json(result);
    } catch (error) {
      if (error.message === 'ToDo not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

module.exports = ToDoController;





