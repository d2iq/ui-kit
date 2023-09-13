/*! For license information please see Colors-stories-mdx.6a0735b1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[9411],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{Z:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{L:()=>useInsertionEffectAlwaysWithSyncFallback,j:()=>useInsertionEffectWithLayoutFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInsertionEffect=!!(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect&&(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||function syncFallback(create){return create()},useInsertionEffectWithLayoutFallback=useInsertionEffect||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,GA:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.GA,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/docs/stories/Colors.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"DesignTokens/Colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.VZ,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{children:"Design System Colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"accent",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.accent]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"white",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.white]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"black",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.black]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"success",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.success]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"error",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.error]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"cyan",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.cyan]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"textColorPrimary",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.textColorPrimary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"textColorSecondary",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.textColorSecondary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"borderColorDefault",subtitle:"",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.borderColorDefault]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"purple",subtitle:"purpleLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purple,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purpleLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purpleLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purpleLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purpleLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.purpleLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"pink",subtitle:"pinkLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pink,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pinkLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pinkLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pinkLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pinkLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.pinkLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"blue",subtitle:"blueLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blue,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blueLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blueLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blueLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blueLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.blueLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"green",subtitle:"greenLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.green,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greenLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greenLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greenLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greenLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greenLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"yellow",subtitle:"yellowLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellow,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellowLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellowLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellowLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellowLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.yellowLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"red",subtitle:"redLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.red,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.redLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.redLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.redLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.redLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.redLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"greyLight",subtitle:"greyLightLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLight,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"greyLight",subtitle:"greyLightDarken1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLight,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightDarken1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightDarken2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightDarken3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightDarken4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyLightDarken5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"greyDark",subtitle:"greyDarkLighten1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDark,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkLighten1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkLighten2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkLighten3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkLighten4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkLighten5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"greyDark",subtitle:"greyDarkDarken1-5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDark,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkDarken1,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkDarken2,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkDarken3,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkDarken4,_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.greyDarkDarken5]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{children:"Theme Colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBrandPrimary",subtitle:"purple",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBrandPrimary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBrandSecondary",subtitle:"pink",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBrandSecondary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeSuccess",subtitle:"green",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeSuccess]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeWarning",subtitle:"yellow",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeWarning]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeError",subtitle:"red",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeError]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgAppHeader",subtitle:"purpleDarken4",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgAppHeader]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgPrimary",subtitle:"white",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgPrimary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgSecondary",subtitle:"greyLightLighten5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgSecondary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgNeutral",subtitle:"greyLight",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgNeutral]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgDisabled",subtitle:"greyLightLighten3",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgDisabled]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBgHover",subtitle:"greyLightLighten5",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgHover]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeBorder",subtitle:"greyLight",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBorder]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeShadow",subtitle:"shadow",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeShadow]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeTextColorPrimary",subtitle:"greyDark",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeTextColorPrimary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeTextColorSecondary",subtitle:"greyDarkLighten4",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeTextColorSecondary]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeTextColorDisabled",subtitle:"greyLightDarken2",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeTextColorDisabled]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.c6,{title:"themeTextColorInteractive",subtitle:"purple",colors:[_packages_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeTextColorInteractive]})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"DesignTokens/Colors",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);