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
      options: {"plugins":[],"name":"Zach Lewton Web Development","short_name":"ZachLewtonDev","start_url":"/","background_color":"#5b3e29","theme_color":"#fdf5e6","display":"standalone","icon":"src/images/icon.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
