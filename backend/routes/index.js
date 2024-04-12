const express = require('express')
const router = express.Router()

const Controllers = require('../controllers')
const upload = require('../middleware/upload')

router.get('/blog', Controllers.blog)
router.post('/storeBlog', upload.single('picture'), Controllers.storeBlog)
router.get('/news', Controllers.news)
router.post('/storeNews', upload.single('picture'), Controllers.storeNews)

module.exports = router






// router.put('/update', upload.single('picture'), Controllers.update)
// router.delete('/delete/:id', Controllers.destroy)
// router.get('/blogpost/:id', Controllers.showRelatedUser)
// router.get('/show/:id', Controllers.show)
// router.get('/blogpost', Controllers.products)
// router.post('/store', authenticate, upload.array('picture[]'), Controllers.store)