const db = require('@/db');

const add = (req, res) => {
  const { title, post } = request.body

  db.query('INSERT INTO blog-posts (post_title, post) VALUES ($1, $2)', [title, post], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

module.exports = add;