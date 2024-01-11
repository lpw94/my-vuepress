module.exports = {
    theme: 'vdoing',
    title: '技术学习',
    charset: 'utf-8',
    description: 'ES6, JavaScript, typyscript, vue2, vue3, react, HTML技术学习。',
    themeConfig: {
        nav: [
			{ text: '首页', link: '/' },
			{ text: '个人简介', link: '/about/' },
			{ text: 'GitHub', link: 'https://github.com/lpw94' } // 外部链接
		]
    },
	pages: {
		'/custom-page/': {
		  title: '自定义页面',
		  content: 'This is a custom page',
		  frontmatter: {
			sidebar: false
		  }
		}
	},
    plugins: [
        // 彩带背景
        [
          'ribbon',
          {
            size: 90,
            opacity: 0.8,
            zIndex: -1,
          },
        ],
        // 鼠标特效插件
        [
          'cursor-effects',
          {
            size: 1.75,
            shape: 'star',
          },
        ],
      ],
}