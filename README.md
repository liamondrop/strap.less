strap.less - 0.0.1 WIP
==========

Nearly naked LESS framework

```bash
    less/
    ├─┬ bones/ # leave these alone
    │ ├── _config.less
    │ ├── _mixins.less
    │ └── ...
    ├─┬ skin/ # customize these after @import
    │ ├── _config.less
    │ ├── _mixins.less
    │ └── ...
    ├─┬ page-specific/
    │ │   # page-specific, non-universal styles should be separate from the main project
    │ │   # @import _config.less & _mixins.less
    │ │   # wherever shared variables or mixins are needed
    │ ├── page-specific-styles.less
    │ ├── page-specific-responsive.less
    │ └── ...
    ├── strap.less # all universal modules @imported here from skin/
    └── page-specific.less # modules from page-specific dir @imported here
```

TODO: everything ;)
