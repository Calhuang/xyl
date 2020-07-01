const { Op } = require('sequelize')

const resolvers = {
  Query: {
      async allPosts (root, { page }, { models }) {
        const PAGE_LIMIT = 10
        let res = await models.Post.findAndCountAll({
          offset: (page - 1) * PAGE_LIMIT,
          order: [
            ['id', 'DESC'],
          ],
          limit: PAGE_LIMIT,
        })
        return res.rows
      },
    },
  Mutation: {
    async createPost (root, { body, image, title, exif }, { models }) {
      try {
        return models.Post.create({ body, image, title, exif })
      } catch(err) {
        console.log(err)
      }
    }
  },
}

module.exports = resolvers