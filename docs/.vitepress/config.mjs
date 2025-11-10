import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress-blog",
  base: "/VitePress-blog/",
  description: "基于VitePress的文档管理系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/index' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: 'HTML&CSS',
          collapsed: true,
          items: [
            {text: 'HTML', link: '/blog/html/index'},
            { text: 'CSS', link: '/blog/css/index' }
          ]
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [

          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [

          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wqg0818' }
    ],

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
})
