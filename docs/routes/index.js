exports.home = function (req, res) {
  res.render('common/layout.html', {
    variables: {
      id: 'home'
    },
    partials: {
      head:           'common/head.html',
      body:           'home/index.html',
      core_grid:      'home/core/grid.html',
      footer:         'common/footer.html'
    }
  });
};