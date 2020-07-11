const router = require('express').Router();

// split up route handling
//router.use('/posts', require('./posts'));
router.use('/auth', require('./auth'));

module.exports = router;