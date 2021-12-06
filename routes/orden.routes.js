const express = require('express');
const router = express.Router();

const ordenController = require('../controllers/orden.controller');

router.get('/', ordenController.getOrdens);
router.post('/', ordenController.createOrden);
router.get('/:id', ordenController.getOrden);
router.put('/:id', ordenController.editOrden);
router.delete('/:id', ordenController.deleteOrden);


module.exports = router;
