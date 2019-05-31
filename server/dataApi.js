const placeholders = require('../data/placeholders')
const posts = require('../data/posts')

module.exports = {
  getPlaceholderValue: (placeholder, lang) => {
    return placeholders[placeholder][lang]
  },

  getPostData: (postId, data, lang) => {
    return posts[postId][data][lang]
  }
  
}