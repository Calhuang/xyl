const db = require('@/db');

const getAll = (req, res) => {
  res.status(200).json({success: true})
}

module.exports = getAll;