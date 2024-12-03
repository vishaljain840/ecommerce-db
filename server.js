const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('ecommerce-db.json');
const middlewares = jsonServer.defaults();

// Disable caching
server.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store'); // Disable cache to avoid 304 responses
  next();
});

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
