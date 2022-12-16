const path = require('path');
const express = require('express');
const routDir = require('../util/path')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(routDir, 'views', 'shop.html'));
});

module.exports = router;
