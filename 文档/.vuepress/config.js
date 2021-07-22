module.exports = {
  title: "奇风多彩天地",
  description: "收集发布全网各类优质程序，发布展示奇风原创软件",
  head: [["link", { rel: "icon", href: `/hero.png` }]],
  base: "/blog/",
  dest: "./dist",

  themeConfig: {
	logo: '/hero.png',
    nav: [
      { text: "首页", link: "/" },
      { text: "快速访问", link: "/guide/" },
      { text: "仓库", link: "https://github.com/x7st17916881/blog" }
    ],
    sidebar: {
      // 侧边栏在 /guide/ 上
      '/guide/': [
        {
          title:'菜单',
          collapsable: false,
			children:[
			'friend',
			'group',
			'group'
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated',
	editLinkText: 'Edit this page'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};



