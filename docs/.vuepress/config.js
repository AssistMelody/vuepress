/*
 * @Author: shenyuan
 * @Date: 2020-04-18 18:30:34
 * @LastEditTime: 2020-04-18 19:20:58
 * @Description: 配置文件
 */

module.exports = {
  title: "十一点一定睡觉",
  theme: "reco",
  themeConfig: {
    type: "blog",
    huawei: true,
    authorAvatar: "/assets/img/mini_zhier_default_logo.jpg",
    author: "申远",
    keyPage: {
      keys: ["e10adc3949ba59abbe56e057f20f883e"], // 1.3.0 版本后需要设置为密文
      color: "#42b983", // 登录页动画球的颜色
      lineColor: "#42b983", // 登录页动画线的颜色
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
      },
    },
    lastUpdated: "最后更新时间",
  },
  // 插件
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
      {
        audios: [
          {
            name: "Faster Than Light",
            artist: "Andreas Waldetoft / Mia Stegmar",
            url:
              "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
            cover:
              "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
          },
          {
            name: "Dawn",
            artist: "DDRKirby(ISQ)",
            url:
              "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
            cover:
              "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
          },
          {
            name: "TRON Legacy (End Titles)",
            artist: "Daft Punk",
            url:
              "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3",
            cover:
              "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
          },
          {
            name: "Reconfig",
            artist: "Shortwire",
            url:
              "https://cdn-image.tsanfer.xyz/music/Reconfig%20-%20Shortwire.mp3",
            cover:
              "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
          },
          {
            name: "Broken Boy",
            artist: "Tonspender",
            url:
              "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
            cover:
              "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
          },
          {
            name: "Forever",
            artist: "PIKASONIC",
            url: "https://cdn-image.tsanfer.xyz/music/forever%20mst.mp3",
            cover:
              "https://p1.music.126.net/LjXufn3OaIgf8OwaEP_xcQ==/109951164419438501.jpg",
          },
          {
            name: "Life Of Sin Pt. 4",
            artist: "MitiS",
            url:
              "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3",
            cover:
              "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
          },
          {
            name: "Sea Of Voices (RAC Mix)",
            artist: "Porter Robinson",
            url:
              "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
            cover:
              "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
          },
          {
            name: "New Lipstick",
            artist: "The Kissaway Trail",
            url:
              "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac",
            cover:
              "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
          },
        ],
      },
    ],
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true],
  ],
  // themeConfig: {
  //   logo: "/assets/img/mini_zhier_default_logo.jpg",
  //   nav: [
  //     { text: "首页", link: "/" },
  //     { text: "文档", items:[
  //       { text: 'Chinese', link: '/about' },
  //       { text: 'Japanese', link: '/language/japanese/' }
  //     ] },
  //     { text: "External", link: "https://www.baidu.com" },
  //   ],
  //   sidebar:[
  //       '/',
  //       'about',
  //       'about2',
  //   ],
  //   lastUpdated: '最后更新时间',
  // },
};
