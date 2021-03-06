var plugins = [{
      plugin: require('C:/Users/zachg/Code/personal-site/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/zachg/Code/personal-site/node_modules/gatsby-plugin-breakpoints/gatsby-ssr'),
      options: {"plugins":[],"queries":{"xs":"(max-width: 950px)","sm":"(max-width: 1110px)","md":"(max-width: 1429px)","l":"(max-width: 300000000px)","portrait":"(orientation: portrait)"}},
    },{
      plugin: require('C:/Users/zachg/Code/personal-site/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Zach Lewton Web Development","title":"Zach Lewton Web Development","short_name":"ZachLewtonDev","start_url":"/","background_color":"#5b3e29","theme_color":"#fdf5e6","lang":"en","description":"Website for Zach Lewton Web Development services and music","display":"standalone","icon":"static/images/icon.png","crossOrigin":"use-credentials","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"df404afb39f8f131ce8d25208535729f"},
    },{
      plugin: require('C:/Users/zachg/Code/personal-site/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
