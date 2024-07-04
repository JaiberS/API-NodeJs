const userController = require('./controllers/UserController');
const Router = require('express');
const router = new Router;

router.get('/users', userController.getUser)
router.get('/users/:id', userController.getUserByID)
router.post('/users', userController.createUser)
router.delete('/users', userController.deleteUser)
router.put('/users', userController.updateUser)

module.exports = router;