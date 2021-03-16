module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-breakpoints/gatsby-browser.js'),
      options: {"plugins":[],"queries":{"xs":"(max-width: 950px)","sm":"(max-width: 1110px)","md":"(max-width: 1429px)","l":"(max-width: 300000000px)","portrait":"(orientation: portrait)"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":5000,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Zach Lewton Web Development","title":"Zach Lewton Web Development","short_name":"ZachLewtonDev","start_url":"/","background_color":"#5b3e29","theme_color":"#fdf5e6","lang":"en","description":"Website for Zach Lewton Web Development services and music","display":"standalone","icon":"static/images/icon.png","crossOrigin":"use-credentials","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"df404afb39f8f131ce8d25208535729f"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
