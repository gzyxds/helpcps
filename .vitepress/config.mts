import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "短剧分销平台",
  "keywords": "短剧分销,短剧分销平台,短剧分销系统",// 网站关键字
  "description": "短剧、影票、小说推文、外卖、推广计划一站式创作平台！",// 网站描述
  

  "themeConfig": {
    "siteTitle": false,
    "logo": "https://payphp.oss-cn-shenzhen.aliyuncs.com/images/cps.svg",
    "outDir": "docs",
    "lastUpdated": true,
    "sidebarMenuLabel": "目录",
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/gzyxds/helpcps"
      }
    ],
    "editLink": {
      "pattern": "https://github.com/gzyxds/helpcps",
      "text": "编辑本页"
    },
    "nav": [
      {
        "text": "🖥网站首页",
        "link": "/"
      },
      {
        "text": "🎉教程文档",
        "link": "/global/index"
      },
      {
        "text": "💹注册登入",
        "link": "https://www.payphp.cn/User/Login/Index"
      },
      {
        "text": "🍵APP下载",
        "link": "https://qm.qq.com/cgi-bin/qm/qr?k=hiPJrntFaxlzcF6pJ4swHNrXGxbv16Ek&jump_from=webapi&authKey=w1QVa8tZUkbAZSL6EoQIaoko1frqj+a67i2SRMgWGe/UvB+i8bvse5CdCXF3wJKS"
      },
      {
        "text": "💬联系客服",
        "link": "https://qm.qq.com/q/l8HDomqX4I"
      }
    ],

    "sidebar": [  // 侧边栏配置
      {
        "text": "🖥️帮助中心",
        "collapsed": false,
        "items": [
          {
            "text": "🎉系统介绍",
            "link": "/global/index"
          },
          {
            "text": "🏅源码授权",
            "link": "/global/shop"
          }
        ]
      },
      {
        "text": "📖关注我们",
        "collapsed": false,
        "items": [
          {
            "text": "✨公众平台",
            "link": "/global/runtime"
          },
          {
            "text": "🎨APP下载",
            "link": "/global/Setup"
          }
        ]
      },
      {
        "text": "🍵友情连接",
        "collapsed": false,
        "items": [
          {
            "text": "📫枭格科技",
            "link": "http://www.xgphp.cn/"
          },
          {
            "text": "☁优刻云",
            "link": "https://www.cloudcvm.com/"
          },
          {
            "text": "🎉艺界AI",
            "link": "https://cnai.art/"
          },
          {
            "text": "🎨AIGC系统",
            "link": "https://docs.cloudcvm.com/"
          },
          {
            "text": "👀CodePu",
            "link": "http://www.codepu.cn/"
          }
        ]
      }
    ],
    "footer": {
      "message": "Released under the Payphp.cn Public License.",
      "copyright": "Copyright © 2024-Payphp.cn All Rights Reserved"
    },
    "prev": "上一篇",
    "returnToTopLabel": "返回顶部",
    "outline": "目录",
    "externalLinkIcon": true,
    "i18nRouting": false,
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    }
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://cps.urlnet.cn",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "短剧分销CPS|短剧分销平台|短剧分销系统",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});