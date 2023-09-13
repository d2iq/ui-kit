"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[6523],{"./packages/inlineBorderedItems/stories/inlineBorderedItems.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_InlineBorderedItems__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/inlineBorderedItems/components/InlineBorderedItems.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/InlineBorderedItems",component:_components_InlineBorderedItems__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{gutterSize:{options:["s","m","l","xl"],control:{type:"select"}}}},Default={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_InlineBorderedItems__WEBPACK_IMPORTED_MODULE_1__.Z,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"3 Clusters"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"+2 Added"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"-1 Removed"))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/inlineBorderedItems/components/InlineBorderedItems.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_InlineBorderedItems});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts");const inlineBorderedItems=gutterSize=>emotion_css_esm.iv`
  > * {
    ${(0,styleUtils.o3)("right",gutterSize)};
    display: inline-block;
  }

  > * + * {
    ${(0,styleUtils.Cg)("left")};
    ${(0,styleUtils.o3)("left",gutterSize)};

    &:last-child {
      padding-right: unset;
    }
  }
`,InlineBorderedItems=({children,className,gutterSize="s"})=>react.createElement("div",{className:(0,emotion_css_esm.cx)(inlineBorderedItems(gutterSize),className)},children),components_InlineBorderedItems=InlineBorderedItems;try{InlineBorderedItems.displayName="InlineBorderedItems",InlineBorderedItems.__docgenInfo={description:"",displayName:"InlineBorderedItems",props:{className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},gutterSize:{defaultValue:{value:"s"},description:"",name:"gutterSize",required:!1,type:{name:"SpaceSize"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/inlineBorderedItems/components/InlineBorderedItems.tsx#InlineBorderedItems"]={docgenInfo:InlineBorderedItems.__docgenInfo,name:"InlineBorderedItems",path:"packages/inlineBorderedItems/components/InlineBorderedItems.tsx#InlineBorderedItems"})}catch(__react_docgen_typescript_loader_error){}}}]);