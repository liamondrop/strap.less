var root = path.join(__dirname, 'docs'),
    less = require('less-middleware'),
    connect = require('connect'),
    path = require('path'),
    http = require('http'),
    fs = require('fs');

var index = function (req, res) {
  var idx = [
    fs.readFileSync(root + '/test.html', 'utf-8'),
    fs.readFileSync(root + '/index.html', 'utf-8')
  ].join('');
  res.setHeader('Content-Type', 'text/html');
  res.end(idx);
}

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(less({
    src: root + '/assets',
    compress: true
  }))
  .use(connect.static(root));

http.createServer(app).listen(3000);
