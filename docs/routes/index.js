exports.index = function(req, res){
  res.render('layout.html', {
    variables: {
      id: 'home',
    },
    partials: {
      head: 'common/head.html',
      sidebar: 'common/sidebar.html',
      footer: 'common/footer.html'
    }
  });
};