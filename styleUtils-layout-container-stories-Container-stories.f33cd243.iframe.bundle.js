"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[4934],{"./packages/styleUtils/layout/container/stories/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/styleUtils/layout/container/components/Container.tsx"),_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");const baseBg=_emotion_css__WEBPACK_IMPORTED_MODULE_3__.iv`
  background-color: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgSecondary};
`,contentBg=_emotion_css__WEBPACK_IMPORTED_MODULE_3__.iv`
  background-color: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_2__.themeBgPrimary};
`,__WEBPACK_DEFAULT_EXPORT__={title:"Layout/Container",component:_components_Container__WEBPACK_IMPORTED_MODULE_1__.Z},Default={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:baseBg},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__.Z,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:contentBg},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Content is centered and the width is kept to a reasonable size"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/styleUtils/layout/container/components/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/styleUtils/layout/container/style.ts");const Container=({children,"data-cy":dataCy="container",className})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(_style__WEBPACK_IMPORTED_MODULE_2__.n,className),"data-cy":dataCy},children),__WEBPACK_DEFAULT_EXPORT__=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/styleUtils/layout/container/components/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"packages/styleUtils/layout/container/components/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./packages/styleUtils/layout/container/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>container});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),_shared_styles_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/shared/styles/breakpoints.ts");const container=_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
  margin-left: auto;
  margin-right: auto;
  max-width: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_1__.containerWidthDefault};
  width: 100%;

  ${_shared_styles_breakpoints__WEBPACK_IMPORTED_MODULE_2__.K.medium(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
    max-width: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_1__.containerWidthAtMedium};
  `)};

  ${_shared_styles_breakpoints__WEBPACK_IMPORTED_MODULE_2__.K.large(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
    max-width: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_1__.containerWidthAtLarge};
  `)};

  ${_shared_styles_breakpoints__WEBPACK_IMPORTED_MODULE_2__.K.jumbo(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
    max-width: ${_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_1__.containerWidthAtJumbo};
  `)};
`}}]);