const express = require('express');
const router = express.Router();
var searchController = require('../controllers/searchController')
var itemController = require('../controllers/itemController')

router.get('/api/items/', searchController.search);
router.get('/api/items/:id', itemController.detail);

module.exports = router;

