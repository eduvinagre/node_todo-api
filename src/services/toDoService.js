const ToDo = require('../models/toDo');
const { Op } = require('sequelize');

const ToDoService = {
  async getAllToDos(filters = {}) {
    const where = {};
    if (filters.userId) where.userId = filters.userId;
    if (filters.completed !== undefined)
      where.completed = filters.completed === 'true';
    return ToDo.findAll({ where,
      order: [['createdAt', 'DESC']]
     });
  },

  async getToDoById(id) {
    return ToDo.findByPk(id);
  },

  async createToDo(toDoData) {
    return ToDo.create(toDoData);
  },

  async updateToDo(id, updates) {
    const toDo = await ToDo.findByPk(id);
    if (!toDo) throw new Error('ToDo not found');
    return toDo.update(updates);
  },

  async deleteToDo(id) {
    const toDo = await ToDo.findByPk(id);
    if (!toDo) throw new Error('ToDo not found');
    await toDo.destroy();
    return { message: 'ToDo deleted successfully' };
  },

  async updateManyToDos(ToDos) {
    return ToDo.bulkCreate(ToDos, {
      updateOnDuplicate: ['title', 'completed'],
    });
  },

  async deleteManyToDos(ids) {
    return ToDo.destroy({
      where: { id: { [Op.in]: ids } },
    });
  },
};

module.exports = ToDoService;
