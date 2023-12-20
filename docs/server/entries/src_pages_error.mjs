import { i as import_0 } from "../chunks/chunk-gX6L3uAy.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react-dom/server";
import "vike/server";
import "react";
function Page({ is404 }) {
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." })
    ] });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "500 Internal Error" }),
      /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
    ] });
  }
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/src/renderer/+onRenderHtml.jsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/_error/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/src/renderer/+config.h.js", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","urlPathname"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
