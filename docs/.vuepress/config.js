const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
	title:'GoShareUi',
  base:'/vuepress/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/assets/img/mini_zhier_default_logo.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "H5/小程序", link: "/H5/" },
      { text: "ios", link: "/ios/" },
      { text: "android", link: "/android/" },
      { text: "其他资源地址", items:[
        { text: 'Npm私库', link: 'http://verdaccio.goshare2.net' },
      ] },
    ],
    sidebar: {
      '/H5/':getH5Sidebar(),
      '/ios/':getIOSSidebar(),
      '/android/':getAndroidSidebar()
    },
    smoothScroll: true,
    repo: 'AssistMelody/vuepress',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '更新时间',
  },
  plugins: ['demo-container']
};

function getH5Sidebar() {
  return [
    '',
    {
      title:'基础组件',
      collapsable:false,
      children:getFileList('H5/basic','basic/')
    },
    {
      title:'业务组件',
      collapsable:false,
      children:getFileList('H5/business','business/')
    }
  ]
}

function getIOSSidebar() {
  return [
    '',
  ]
}

function getAndroidSidebar() {
  return [
    '',
  ]
}

function getFileList(dirname,fixPath) {
  const dirList = fs.readdirSync(`./docs/${dirname}`);
  return dirList.map(item =>{
    return  `${fixPath}${item.split('.')[0]}` 
  })
}