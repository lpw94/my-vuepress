module.exports = {
    theme: 'vdoing',
    title: '技术学习',
    charset: 'utf-8',
    description: 'ES6, JavaScript, typyscript, vue2, vue3, react, HTML技术学习。',
    themeConfig: {
        nav: [{ text: '个人简历', link: '/blog/' }]
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