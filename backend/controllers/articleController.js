const Article = require('../models/articleModel')
const mongoose = require('mongoose')


// get all articles
const getArticles = async (req, res) => {
  const articles = await Article.find({}).sort({ createdAt: -1 })

  res.status(200).json(articles)
}

// get a single Article
const getArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Article' })
  }

  const article = await Article.findById(id)

  if (!article) {
    return res.status(404).json({ error: 'No such Article' })
  }

  res.status(200).json(article)
}

// create a new Article
const createArticle = async (req, res) => {
  const { articleId, email } = req.body
  const file = req.file.filename;

  // add to the database
  try {
    const article = await Article.create({ articleId, email, file })
    res.status(200).json(article)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Article
const deleteArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such article' })
  }

  const article = await Article.findOneAndDelete({ _id: id })

  if (!article) {
    return res.status(400).json({ error: 'No such article' })
  }

  res.status(200).json(article)
}

// update a Article
const updateArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such article' })
  }

  const article = await Article.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!article) {
    return res.status(400).json({ error: 'No such article' })
  }

  res.status(200).json(article)
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle
}