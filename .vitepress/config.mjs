import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/VitePress-blog/',
  title: "梓麒的开发笔记",
  description: "岁月如歌，代码如诗！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '前端', items: [
          { text: 'HTML', link: '/front-end/html' },
          { text: 'CSS', link: '/front-end/css' },
          { text: 'JavaScript', link: '/front-end/javascript' },
          { text: 'Vue', link: '/front-end/vue' }
        ] },
      { text: '后端', items: [
          { text: 'MySQL', link: '/back-end/mysql' },
          { text: 'Python', link: '/back-end/python' },
          { text: 'Java', link: '/back-end/java' }
        ] },
      { text: '关于', link: '/about/index' }
    ],

    sidebar: {
      '/front-end/html/': [
        { text: 'HTML', link: '/front-end/html' },
      ],
      '/front-end/css': [
        {
          text: 'CSS',
          items: [
            { text: 'CSS 变量', link: '/front-end/css/CSS变量' },
          ]
        }
      ],
      '/back-end/mysql/': [
        { text: 'MySQL学习笔记', link: '/back-end/mysql/' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
