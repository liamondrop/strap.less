exports.home = function (req, res) {
  res.render('common/layout.html', {
    variables: {
      id: 'home'
    },
    partials: {
      head:           'common/head.html',
      body:           'home/index.html',
      intro:          'home/intro.html',
      setup:          'home/setup.html',
      extend:         'home/extend.html',
      core_grid:      'home/core/grid.html',
      core_type:      'home/core/type.html',
      core_tables:    'home/core/tables.html',
      core_buttons:   'home/core/buttons.html',
      core_forms:     'home/core/forms.html',
      core_images:    'home/core/images.html',
      core_code:      'home/core/code.html',
      core_utils:     'home/core/utils.html',
      extra_navs:     'home/extra/navs.html',
      extra_dropdowns:'home/extra/dropdowns.html',
      extra_buttons:  'home/extra/buttons.html',
      extra_labels:   'home/extra/labels.html',
      extra_alerts:   'home/extra/alerts.html',
      sidebar:        'common/sidebar.html',
      footer:         'common/footer.html'
    }
  });
};