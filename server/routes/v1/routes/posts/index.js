const router = require('express').Router();

router.get('/all', require('./getAll'));
router.post('/', require('./getAll'));

module.exports = router;