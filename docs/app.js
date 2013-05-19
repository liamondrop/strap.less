var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    staticPath = path.join(__dirname, 'public');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// app.use(require('less-middleware')({
//   src: path.join(__dirname, '..', 'less'),
//   dest: path.join(staticPath, 'stylesheets', 'css'),
//   paths  : [path.join(__dirname, '..', 'less', 'bones'), path.join(__dirname, '..', 'less', 'skin')],
//   prefix: '/stylesheets/css',
//   dumpLineNumbers: 'mediaquery',
//   force: true,
//   debug: true
// }));
app.engine('html', require('simple-hogan').read);
app.use(express.static(staticPath));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
  console.log('> listening on http://127.0.0.1:' + app.get('port'));
});
