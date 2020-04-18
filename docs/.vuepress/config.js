/*
 * @Author: shenyuan
 * @Date: 2020-04-18 18:30:34
 * @LastEditTime: 2020-04-18 19:20:58
 * @Description: 配置文件
 */

module.exports = {
  themeConfig: {
    logo: "/assets/img/mini_zhier_default_logo.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", items:[
        { text: 'Chinese', link: '/about' },
        { text: 'Japanese', link: '/language/japanese/' }
      ] },
      { text: "External", link: "https://www.baidu.com" },
    ],
    sidebar:[
        '/',
        'about',
        'about2',
    ],
    lastUpdated: '最后更新时间',
  },
};
