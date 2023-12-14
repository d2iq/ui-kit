/*! For license information please see Colors-stories-mdx.15f7fdd5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[9411],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{Z:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{L:()=>useInsertionEffectAlwaysWithSyncFallback,j:()=>useInsertionEffectWithLayoutFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInsertionEffect=!!(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect&&(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||function syncFallback(create){return create()},useInsertionEffectWithLayoutFallback=useInsertionEffect||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,GA:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.GA,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/docs/stories/Colors.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Colors_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),color=__webpack_require__("./packages/shared/styles/styleUtils/typography/color.ts");const designSystemColors=[{title:"accent",subtitle:"",colors:{accent:designTokens.accent}},{title:"white",subtitle:"",colors:{white:designTokens.white}},{title:"black",subtitle:"",colors:{black:designTokens.black}},{title:"success",subtitle:"",colors:{success:designTokens.success}},{title:"error",subtitle:"",colors:{error:designTokens.error}},{title:"cyan",subtitle:"",colors:{cyan:designTokens.cyan}},{title:"textColorPrimary",subtitle:"",colors:{textColorPrimary:designTokens.textColorPrimary}},{title:"textColorSecondary",subtitle:"",colors:{textColorSecondary:designTokens.textColorSecondary}},{title:"borderColorDefault",subtitle:"",colors:{borderColorDefault:designTokens.borderColorDefault}},{title:"purple",subtitle:"purpleLighten1-5",colors:{purple:designTokens.purple,purpleLighten1:designTokens.purpleLighten1,purpleLighten2:designTokens.purpleLighten2,purpleLighten3:designTokens.purpleLighten3,purpleLighten4:designTokens.purpleLighten4,purpleLighten5:designTokens.purpleLighten5}},{title:"pink",subtitle:"pinkLighten1-5",colors:{pink:designTokens.pink,pinkLighten1:designTokens.pinkLighten1,pinkLighten2:designTokens.pinkLighten2,pinkLighten3:designTokens.pinkLighten3,pinkLighten4:designTokens.pinkLighten4,pinkLighten5:designTokens.pinkLighten5}},{title:"blue",subtitle:"blueLighten1-5",colors:{blue:designTokens.blue,blueLighten1:designTokens.blueLighten1,blueLighten2:designTokens.blueLighten2,blueLighten3:designTokens.blueLighten3,blueLighten4:designTokens.blueLighten4,blueLighten5:designTokens.blueLighten5}},{title:"green",subtitle:"greenLighten1-5",colors:{green:designTokens.green,greenLighten1:designTokens.greenLighten1,greenLighten2:designTokens.greenLighten2,greenLighten3:designTokens.greenLighten3,greenLighten4:designTokens.greenLighten4,greenLighten5:designTokens.greenLighten5}},{title:"yellow",subtitle:"yellowLighten1-5",colors:{yellow:designTokens.yellow,yellowLighten1:designTokens.yellowLighten1,yellowLighten2:designTokens.yellowLighten2,yellowLighten3:designTokens.yellowLighten3,yellowLighten4:designTokens.yellowLighten4,yellowLighten5:designTokens.yellowLighten5}},{title:"red",subtitle:"redLighten1-5",colors:{red:designTokens.red,redLighten1:designTokens.redLighten1,redLighten2:designTokens.redLighten2,redLighten3:designTokens.redLighten3,redLighten4:designTokens.redLighten4,redLighten5:designTokens.redLighten5}},{title:"greyLight",subtitle:"greyLightLighten1-5",colors:{greyLight:designTokens.greyLight,greyLightLighten1:designTokens.greyLightLighten1,greyLightLighten2:designTokens.greyLightLighten2,greyLightLighten3:designTokens.greyLightLighten3,greyLightLighten4:designTokens.greyLightLighten4,greyLightLighten5:designTokens.greyLightLighten5}},{title:"greyLight",subtitle:"greyLightDarken1-5",colors:{greyLight:designTokens.greyLight,greyLightDarken1:designTokens.greyLightDarken1,greyLightDarken2:designTokens.greyLightDarken2,greyLightDarken3:designTokens.greyLightDarken3,greyLightDarken4:designTokens.greyLightDarken4,greyLightDarken5:designTokens.greyLightDarken5}},{title:"greyDark",subtitle:"greyDarkLighten1-5",colors:{greyDark:designTokens.greyDark,greyDarkLighten1:designTokens.greyDarkLighten1,greyDarkLighten2:designTokens.greyDarkLighten2,greyDarkLighten3:designTokens.greyDarkLighten3,greyDarkLighten4:designTokens.greyDarkLighten4,greyDarkLighten5:designTokens.greyDarkLighten5}},{title:"greyDark",subtitle:"greyDarkDarken1-5",colors:{greyDark:designTokens.greyDark,greyDarkDarken1:designTokens.greyDarkDarken1,greyDarkDarken2:designTokens.greyDarkDarken2,greyDarkDarken3:designTokens.greyDarkDarken3,greyDarkDarken4:designTokens.greyDarkDarken4,greyDarkDarken5:designTokens.greyDarkDarken5}}],themeColors=(designTokens.purple,designTokens.purpleLighten1,designTokens.purpleLighten2,designTokens.purpleLighten3,designTokens.purpleLighten4,designTokens.purpleLighten5,designTokens.pink,designTokens.pinkLighten1,designTokens.pinkLighten2,designTokens.pinkLighten3,designTokens.pinkLighten4,designTokens.pinkLighten5,designTokens.blue,designTokens.blueLighten1,designTokens.blueLighten2,designTokens.blueLighten3,designTokens.blueLighten4,designTokens.blueLighten5,designTokens.green,designTokens.greenLighten1,designTokens.greenLighten2,designTokens.greenLighten3,designTokens.greenLighten4,designTokens.greenLighten5,designTokens.yellow,designTokens.yellowLighten1,designTokens.yellowLighten2,designTokens.yellowLighten3,designTokens.yellowLighten4,designTokens.yellowLighten5,designTokens.red,designTokens.redLighten1,designTokens.redLighten2,designTokens.redLighten3,designTokens.redLighten4,designTokens.redLighten5,designTokens.greyLight,designTokens.greyLightLighten1,designTokens.greyLightLighten2,designTokens.greyLightLighten3,designTokens.greyLightLighten4,designTokens.greyLightLighten5,designTokens.greyLight,designTokens.greyLightDarken1,designTokens.greyLightDarken2,designTokens.greyLightDarken3,designTokens.greyLightDarken4,designTokens.greyLightDarken5,designTokens.greyDark,designTokens.greyDarkLighten1,designTokens.greyDarkLighten2,designTokens.greyDarkLighten3,designTokens.greyDarkLighten4,designTokens.greyDarkLighten5,designTokens.greyDark,designTokens.greyDarkDarken1,designTokens.greyDarkDarken2,designTokens.greyDarkDarken3,designTokens.greyDarkDarken4,designTokens.greyDarkDarken5,[{title:"themeBrandPrimary",subtitle:"",colors:{themeBrandPrimary:(0,color.LQ)(designTokens.themeBrandPrimary)}},{title:"themeBrandSecondary",subtitle:"",colors:{themeBrandSecondary:(0,color.LQ)(designTokens.themeBrandSecondary)}},{title:"themeSuccess",subtitle:"",colors:{themeSuccess:(0,color.LQ)(designTokens.themeSuccess)}},{title:"themeWarning",subtitle:"",colors:{themeWarning:(0,color.LQ)(designTokens.themeWarning)}},{title:"themeError",subtitle:"",colors:{themeError:(0,color.LQ)(designTokens.themeError)}},{title:"themeBgAppHeader",subtitle:"",colors:{themeBgAppHeader:(0,color.LQ)(designTokens.themeBgAppHeader)}},{title:"themeBgPrimary",subtitle:"",colors:{themeBgPrimary:(0,color.LQ)(designTokens.themeBgPrimary)}},{title:"themeBgSecondary",subtitle:"",colors:{themeBgSecondary:(0,color.LQ)(designTokens.themeBgSecondary)}},{title:"themeBgNeutral",subtitle:"",colors:{themeBgNeutral:(0,color.LQ)(designTokens.themeBgNeutral)}},{title:"themeBgDisabled",subtitle:"",colors:{themeBgDisabled:(0,color.LQ)(designTokens.themeBgDisabled)}},{title:"themeBgHover",subtitle:"",colors:{themeBgHover:(0,color.LQ)(designTokens.themeBgHover)}},{title:"themeBorder",subtitle:"",colors:{themeBorder:(0,color.LQ)(designTokens.themeBorder)}},{title:"themeShadow",subtitle:"",colors:{themeShadow:"rgba(0, 0, 0, 0.1)"}},{title:"themeTextColorPrimary",subtitle:"",colors:{themeTextColorPrimary:(0,color.LQ)(designTokens.themeTextColorPrimary)}},{title:"themeTextColorSecondary",subtitle:"",colors:{themeTextColorSecondary:(0,color.LQ)(designTokens.themeTextColorSecondary)}},{title:"themeTextColorDisabled",subtitle:"",colors:{themeTextColorDisabled:(0,color.LQ)(designTokens.themeTextColorDisabled)}},{title:"themeTextColorInteractive",subtitle:"",colors:{themeTextColorInteractive:(0,color.LQ)(designTokens.themeTextColorInteractive)}}]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"DesignTokens/Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"design-system-colors",children:"Design System Colors"}),"\n",(0,jsx_runtime.jsx)(dist.VZ,{children:designSystemColors.map((item=>(0,jsx_runtime.jsx)(dist.c6,{title:item.title,subtitle:item.subtitle,colors:item.colors},item.title)))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"theme-colors",children:"Theme Colors"}),"\n",(0,jsx_runtime.jsx)(dist.VZ,{children:themeColors.map((item=>(0,jsx_runtime.jsx)(dist.c6,{title:item.title,subtitle:item.subtitle,colors:item.colors},item.title)))})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"DesignTokens/Colors",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Colors_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);