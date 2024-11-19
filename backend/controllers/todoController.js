const todoModel = require('../models/todoModel')

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.findAll()
    res.status(200).json(todos)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get todos' })
  }
}
