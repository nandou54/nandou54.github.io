import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import "react";
const logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%20640%20640'%3e%3cg%20transform='matrix(1.22%200%200%201.22%20320.03%20319.97)'%3e%3clinearGradient%20id='logo-linear-gradient'%20x1='72.57'%20y1='353.88'%20x2='582.61'%20y2='220.83'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2387b2c2'%20/%3e%3cstop%20offset='.56'%20stop-color='%234a5eab'%20/%3e%3cstop%20offset='1'%20stop-color='%239d6bad'%20/%3e%3c/linearGradient%3e%3cpath%20style='fill:%20url(%23logo-linear-gradient);'%20transform='translate(-306.59,%20-260.01)'%20d='m%20567.17%20498.64%20c%204.73%206.16%200.28%2015%20-7.55%2014.98%20c%20-90.06%20-0.13%20-400.84%2016.57%20-446.35%20-3.47%20C%200.08%20460.33%2048.06%20347.77%20100.14%20324.07%20c%2054.22%20-24.35%2080.02%20-25.57%20131.19%20-37.15%20c%209.38%20-2.12%207.99%20-1.83%207.29%20-10.26%20c%20-129.88%20-582.61%20668.64%20-82.61%2055.46%2036.28%20c%20-9.03%202.65%20-7.25%205.49%20-6.74%2010%20c%203.61%2032.11%209.54%2093.06%207.46%20103.06%20c%20-26.23%2082.92%20-49.59%20-108.09%20-51.89%20-98.4%20c%20-3.52%20-0.95%20-24.36%205.63%20-60.05%2017.6%20c%20-59.65%2020%20-84.22%2086.55%20-11.93%20108.08%20c%2021.11%206.17%20315.75%2028.59%20377.34%2032.68%20c%208.3%200.25%2014.6%206.17%2018.9%2012.68%20Z%20M%20340.04%2044.95%20c%20-56.88%2014.86%20-67.71%20104.9%20-57.68%20228.64%20c%2058.46%20-9.66%20118.44%20-32.28%20163.33%20-70.57%20c%2057.12%20-52.62%20-10.79%20-171.32%20-105.65%20-158.06%20Z'%20/%3e%3c/g%3e%3c/svg%3e";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(Page, { ...pageProps }));
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Pablo Cabrera | Portfolio";
  const desc = documentProps && documentProps.description || "My personal portfolio. Hi! I'm Pablo Cabrera (pabloc54), FullStack Web Developer at your dispose";
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n  <html lang="en" translate="no">\n    <head>\n      <meta charset="utf-8" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <title>', '</title>\n      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9XT17RG3ZV"><\/script>\n      <meta\n        name="description"\n        content="', `"
      />
      <meta name="keyword" content="portfolio, frontend, javascript, developer" />
      <meta property="og:title" content="Pablo Cabrera | Portfolio" />
      <meta
        property="og:description"
        content="My personal portfolio. Hi! I'm Pablo Cabrera (pabloc54), FullStack Developer at your dispose"
      />
      <meta property="og:url" content="https://pabloc54.dev" />
      <meta property="og:type" content="website" />
      <meta name="color-scheme" content="dark light">
      <link rel="icon" type="image/svg+xml" href="`, `" />
      <meta name="theme-color" content="#2784ee">
      <meta name="apple-mobile-web-app-status-bar-style" content="#2784ee">
      <script>
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', 'G-9XT17RG3ZV')
      <\/script>
    </head>
    <body>
      <main>`, "</main>\n    </body>\n  </html>"])), title, desc, logo, dangerouslySkipEscape(pageHtml));
  return {
    documentHtml,
    pageContext: {}
  };
}
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: render
}, Symbol.toStringTag, { value: "Module" }));
export {
  import_0 as i
};
