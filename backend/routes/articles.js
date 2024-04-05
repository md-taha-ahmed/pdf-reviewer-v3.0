const express = require('express')
const Article = require("../models/articleModel")
const router = express.Router()
const {
    getArticle,
    getArticles,
    createArticle,
    deleteArticle,
    updateArticle
} = require("../controllers/articleController");

// GET all articles
router.get('/', getArticles)

// GET a single article
router.get('/:id', getArticle)

// POST a new article
router.post('/', createArticle)

// DELETE a article
router.delete('/:id', deleteArticle)

// UPDATE a article
router.patch('/:id', updateArticle)

module.exports = router