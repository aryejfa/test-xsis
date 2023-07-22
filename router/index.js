const router = require('express').Router()
const movie = require('../controllers/movie')
const token = require('../server/getToken')
const ensureToken = require("../middlewares/ensureToken");

router.get('/getToken', token.getToken)

router.use(ensureToken);
router.get('/movies', movie.index)
router.get('/movies/:id', movie.show)
router.post('/movies', movie.create)
router.patch('/movies/:id', movie.update)
router.delete('/movies/:id', movie.delete)



module.exports = router