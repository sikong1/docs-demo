import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gok",
  description: "A VitePress Site",
  head: [
    // ["link", { rel: "icon", href: "https://codemirror.net/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3c8772" }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '介绍', link: '/guide/introduce' },
      { text: '测试vue组件', link: '/guide/vue-demo' },
      { text: '测试vue代码', link: '/guide/vue-demo-code' },
      {
        text: 'Markdown 扩展',
        link: (process.env.NODE_ENV === "development" ? '/other/markdown' : 'https://vitepress.dev/zh/guide/markdown')
      },
      { text: '更新日志', link: '/other/empty' },
    ],
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '入门指南', link: '/guide/getting-started' },
          { text: '事件', link: '/guide/events' }
        ]
      },
      {
        text: '指令',
        items: [
          { text: '指令方法', link: '/other/instruction-method' },
        ]
      },
    ],

    // socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})