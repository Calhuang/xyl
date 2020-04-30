const router = require('express').Router();

// split up route handling
router.use('/posts', require('./posts'));

module.exports = router;