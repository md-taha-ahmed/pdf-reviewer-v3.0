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
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })
// GET all articles
router.get('/', getArticles)

// GET a single article
router.get('/:id', getArticle)

// POST a new article
router.post('/', upload.single('file'), createArticle)

// DELETE a article
router.delete('/:id', deleteArticle)

// UPDATE a article
router.patch('/:id', updateArticle)

module.exports = router