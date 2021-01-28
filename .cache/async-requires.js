// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-generic-js": () => import("./../../../src/templates/Generic.js" /* webpackChunkName: "component---src-templates-generic-js" */),
  "component---src-templates-markdown-js": () => import("./../../../src/templates/Markdown.js" /* webpackChunkName: "component---src-templates-markdown-js" */)
}

