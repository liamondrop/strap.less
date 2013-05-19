exports.index = function(req, res){
  res.render('common/layout.html', {
    variables: {
      id: 'home',
    },
    partials: {
      head: 'common/head.html',
      intro: 'intro.html',
      setup: 'setup.html',
      extend: 'extend.html',
      sidebar: 'common/sidebar.html',
      footer: 'common/footer.html'
    }
  });
};