module.exports = {
  title: 'Huigeek Notes',
  description: "Just playing around",
  theme: '@vuepress/blog',
  themeConfig: {
    // Please head documentation to see the available options.
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: 'Notes',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tag/'
      }
    ],
    directories: [
      {
        id: 'post',
        dirname: 'notes',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug'
      }
    ],
    globalPagination: {
      lengthPerPage: 10
    },
    smoothScroll: true
  }
}
