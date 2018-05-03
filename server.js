import chokidar from 'chokidar';
import config from './webpack.config';
import cssModulesRequireHook from 'css-modules-require-hook';
import express from 'express';
import http from 'http';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

cssModulesRequireHook({generateScopedName: '[path][name]-[local]'});
const compiler = webpack(config);
const app = express();

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// Include server routes as a middleware
app.use(function(req, res, next) {
  require('./server/app')(req, res, next);
});
let consoleContents = []



app.get("/console/:op", function (request, response) {
  console.log(request.params.op)
  if(request.params.op==='clear'){
    consoleContents = []
  }
  response.send(consoleContents); 
});
// Anything else gets passed to the client app's server rendering
app.get('*', function(req, res, next) {
  require('./server/server-render')(req.path, function(err, page) {
    if (err) return next(err);
    res.send(page);
  });
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('./server');

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

const server = http.createServer(app);
server.listen(3000, 'localhost', function(err) {
  if (err) throw err;

  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
let tickNo = 0
let bindConsole = () => {
  let oldLog = console.log.bind(console)
  oldLog('this')

  let newLog = (...args) => {
    oldLog(...args);
    oldLog("from newlog")
    if (consoleContents.length < 10)
      consoleContents.push(args)
    //oldLog(consoleContents)
  }

  newLog('thihs','and that') 
  console.log = newLog
}
bindConsole()
console.log("After bind");  