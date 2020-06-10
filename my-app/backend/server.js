// var express = require('express');
// var jsonServer = require('json-server');


// var srv = express();

// srv.use(express.static('public'));

// // https://github.com/typicode/json-server
// srv.use('/api', jsonServer.defaults(), jsonServer.router('db.json'));

// let server = srv.listen(8080, function () {
//     console.log('Server listening on port 8080');
// });

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter({ '/api/*': '/$1' }))
server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})