module.exports = (app) => {
  const posts = require('../controllers/post.controller.js');

  // Create a new post
  app.post('/posts', posts.create);

  // retrieve all posts
  app.get('/posts', posts.findAll);

  // retrieve a single post with postId
  app.get('/posts/:postId', posts.findOne);

  // update a post with postId
  app.put('/posts/:postId', posts.update);

  // delete a post with postId
  app.delete('/posts/:postId', posts.delete);
}
