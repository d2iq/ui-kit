"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[6601],{"./packages/styleUtils/modifiers/stories/BorderedBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_BorderedBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/styleUtils/modifiers/components/BorderedBox.tsx"),_storybookHelpers_controlConstants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/storybookHelpers/controlConstants.ts"),_emotion_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Style Utilities/BorderedBox",component:_components_BorderedBox__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{side:{options:_storybookHelpers_controlConstants__WEBPACK_IMPORTED_MODULE_2__.dO,control:{type:"select"}},variant:{options:["normal","heavy"]},radius:{options:["none","small","default"],control:{type:"select"}},bgColor:{control:{type:"color"}},display:{options:_storybookHelpers_controlConstants__WEBPACK_IMPORTED_MODULE_2__.V5,control:{type:"select"}},textAlign:{options:_storybookHelpers_controlConstants__WEBPACK_IMPORTED_MODULE_2__.$U,control:{type:"select"}},className:{control:{disable:!0}},"data-cy":{control:{disable:!0}}},args:{side:"all",variant:"normal"}},Default={render:args=>{const setHeight=_emotion_css__WEBPACK_IMPORTED_MODULE_3__.iv`
    height: 200px;
  `;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BorderedBox__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({side:"all"},args,{className:setHeight}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"BorderedBox Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"BorderedBox Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"BorderedBox Content"))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/dropdownable/components/Dropdownable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Direction,Z:()=>components_Dropdownable});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),Overlay=__webpack_require__("./packages/shared/components/Overlay.tsx"),dist=__webpack_require__("./node_modules/react-detect-click-outside/dist/index.js");const DropdownContents=({children,onClose})=>{const ref=(0,dist.I)({onTriggered:onClose??(()=>null)});return react.createElement("div",{ref},children)},components_DropdownContents=DropdownContents;try{DropdownContents.displayName="DropdownContents",DropdownContents.__docgenInfo={description:"",displayName:"DropdownContents",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdownable/components/DropdownContents.tsx#DropdownContents"]={docgenInfo:DropdownContents.__docgenInfo,name:"DropdownContents",path:"packages/dropdownable/components/DropdownContents.tsx#DropdownContents"})}catch(__react_docgen_typescript_loader_error){}var designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let Direction=function(Direction){return Direction.BottomLeft="bottom-start",Direction.BottomRight="bottom-end",Direction.BottomCenter="bottom",Direction.TopLeft="top-start",Direction.TopRight="top-end",Direction.TopCenter="top",Direction}({});const getPreferredDirection=preferredDirections=>preferredDirections&&preferredDirections.length?"string"==typeof preferredDirections?preferredDirections:preferredDirections[0]:Direction.BottomLeft,getFlipModifier=preferredDirections=>preferredDirections&&preferredDirections.length&&preferredDirections.length>1?{name:"flip",options:{fallbackPlacements:preferredDirections.slice(1)}}:null,Dropdownable=({isOpen,dropdown,preferredDirections,onClose,overlayRoot,disablePortal,children})=>{const[referenceElement,setReferenceElement]=react.useState(null),[popperElement,setPopperElement]=react.useState(null),{styles,attributes}=(0,usePopper.D)(referenceElement,popperElement,{placement:getPreferredDirection(preferredDirections),modifiers:[getFlipModifier(preferredDirections)].filter(Boolean)}),{maxHeight,maxWidth,...popperStyles}=styles.popper,popperAttributes={ref:setPopperElement,style:{zIndex:parseInt(designTokens.zIndexDropdownable,10),...attributes.popper&&attributes.popper["data-popper-reference-hidden"]&&{visibility:"hidden",pointerEvents:"none"},...popperStyles},...attributes.popper},getDropdown=()=>attributes.popper?react.cloneElement(dropdown,{direction:attributes.popper["data-popper-placement"],style:{overflow:"auto",maxHeight:dropdown.props.maxHeight||maxHeight,maxWidth:dropdown.props.maxWidth||maxWidth}}):dropdown;return react.createElement(react.Fragment,null,react.createElement("div",{ref:setReferenceElement},children),isOpen&&react.createElement(components_DropdownContents,{isOpen,onClose},disablePortal?react.createElement("div",popperAttributes,getDropdown()):react.createElement(Overlay.Z,_extends({overlayRoot},popperAttributes),getDropdown())))},components_Dropdownable=Dropdownable;try{Dropdownable.displayName="Dropdownable",Dropdownable.__docgenInfo={description:"",displayName:"Dropdownable",props:{isOpen:{defaultValue:null,description:"Whether the Dropdownable overlay is visible",name:"isOpen",required:!0,type:{name:"boolean"}},dropdown:{defaultValue:null,description:"Element to render in the Dropdownable overlay",name:"dropdown",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},preferredDirections:{defaultValue:null,description:"Which direction the Dropdownable should open in relation to the Dropdownable children",name:"preferredDirections",required:!1,type:{name:"Direction | Direction[]"}},onClose:{defaultValue:null,description:"Function that is called when a user clicks outside of the Dropdownable overlay or children",name:"onClose",required:!1,type:{name:"(() => void)"}},overlayRoot:{defaultValue:null,description:"Which element the Dropdownable overlay is mounted in. Defaults to the default element created by the Overlay component",name:"overlayRoot",required:!1,type:{name:"HTMLElement"}},disablePortal:{defaultValue:null,description:"Whether the Dropdownable overlay should open in it's parent element instead of `overlayRoot`",name:"disablePortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropdownable/components/Dropdownable.tsx#Dropdownable"]={docgenInfo:Dropdownable.__docgenInfo,name:"Dropdownable",path:"packages/dropdownable/components/Dropdownable.tsx#Dropdownable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/shared/components/Overlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Overlay=({overlayRoot=document?.body,...props})=>{const[el]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>document.createElement("div")));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(overlayRoot&&overlayRoot.appendChild(el),()=>{el&&overlayRoot&&overlayRoot.removeChild(el)})),[]);return react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((()=>{const{children,innerRef,...other}=props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({ref:innerRef},other),children)})(),el)},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,_extends({innerRef:ref},props))));try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},overlayRoot:{defaultValue:{value:"document?.body"},description:"",name:"overlayRoot",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/shared/components/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"packages/shared/components/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}},"./packages/storybookHelpers/controlConstants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$U:()=>textAlignValues,RR:()=>vertAlignValues,V5:()=>cssDisplayPropertyValues,dO:()=>sideValues,g:()=>spacingSizeValues,qb:()=>directionsValuesLabels,sL:()=>toasterAppearance,uj:()=>directionsValues});var _dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dropdownable/components/Dropdownable.tsx");const cssDisplayPropertyValues=["inline","block","contents","flex","grid","inline-block","inline-flex","inline-grid","inline-table","list-item","run-in","table","table-caption","table-column-group","table-header-group","table-footer-group","table-row-group","table-cell","table-column","table-row","none","initial","inherit"],textAlignValues=["center","end","inherit","initial","justify","left","right","start","unset"],vertAlignValues=["top","center","bottom"],spacingSizeValues=["xxs","xs","s","m","l","xl","xxl","none"],sideValues=["all","top","right","bottom","left","horiz","vert"],directionsValues=[_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomLeft,_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomRight,_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomCenter,_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopLeft,_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopRight,_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopCenter],directionsValuesLabels={"Direction.BottomLeft":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomLeft,"Direction.BottomRight":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomRight,"Direction.BottomCenter":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.BottomCenter,"Direction.TopLeft":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopLeft,"Direction.TopRight":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopRight,"Direction.TopCenter":_dropdownable_components_Dropdownable__WEBPACK_IMPORTED_MODULE_0__.N.TopCenter},toasterAppearance=["default","success","warning","danger"]},"./packages/styleUtils/modifiers/components/BorderedBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/styleUtils/modifiers/components/Box.tsx"),_shared_styles_styleUtils_modifiers_border__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/shared/styles/styleUtils/modifiers/border.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BorderedBox=props=>{const{side,radius="none",variant,className,"data-cy":dataCy="borderedBox",...other}=props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(className,(0,_shared_styles_styleUtils_modifiers_border__WEBPACK_IMPORTED_MODULE_3__.C)(side,variant),(0,_shared_styles_styleUtils_modifiers_border__WEBPACK_IMPORTED_MODULE_3__.E)(radius)),"data-cy":dataCy},other))},__WEBPACK_DEFAULT_EXPORT__=BorderedBox;try{BorderedBox.displayName="BorderedBox",BorderedBox.__docgenInfo={description:"",displayName:"BorderedBox",props:{side:{defaultValue:null,description:"Which side (or sides) the border should be on",name:"side",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"horiz"'},{value:'"vert"'},{value:'"left"'},{value:'"right"'},{value:'"all"'},{value:'"bottom"'}]}},radius:{defaultValue:null,description:"Sets a `border-radius`",name:"radius",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"none"'},{value:'"small"'}]}},variant:{defaultValue:null,description:"Which style of border to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"heavy"'}]}},bgColor:{defaultValue:null,description:"Applies a background color",name:"bgColor",required:!1,type:{name:"BackgroundColor"}},bgImageUrl:{defaultValue:null,description:"Applies a background image",name:"bgImageUrl",required:!1,type:{name:"string"}},bgImageOptions:{defaultValue:null,description:"Options for how the background image should be displayed",name:"bgImageOptions",required:!1,type:{name:"BgImageOptions"}},display:{defaultValue:null,description:"Modifies the `display` property",name:"display",required:!1,type:{name:"Display"}},vertAlignChildren:{defaultValue:null,description:"Vertically aligns the direct children of the component",name:"vertAlignChildren",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},isVisuallyHidden:{defaultValue:null,description:"Hides the component and it's children visually, but still keeps them visual to screenreaders",name:"isVisuallyHidden",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:null,description:"Aligns text or inline and inline-block elements",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'}]}},tag:{defaultValue:null,description:"Which HTML tag to render the component with",name:"tag",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"cite"'},{value:'"data"'},{value:'"form"'},{value:'"label"'},{value:'"span"'},{value:'"summary"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"center"'},{value:'"s"'},{value:'"select"'},{value:'"table"'},{value:'"caption"'},{value:'"ul"'},{value:'"ol"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"strong"'},{value:'"sub"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'}]}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/styleUtils/modifiers/components/BorderedBox.tsx#BorderedBox"]={docgenInfo:BorderedBox.__docgenInfo,name:"BorderedBox",path:"packages/styleUtils/modifiers/components/BorderedBox.tsx#BorderedBox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/styleUtils/modifiers/components/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_shared_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/shared/styles/styleUtils/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Box=props=>{const{bgColor,bgImageUrl,bgImageOptions={size:void 0,position:void 0,repeat:void 0},display,vertAlignChildren,isVisuallyHidden,textAlign,tag="div",className,"data-cy":dataCy="box",...other}=props,getBgImageOptionVal=option=>bgImageOptions?bgImageOptions[option]:null,displayValue=vertAlignChildren?"flex":display,vertAlignMap={top:"flex-start",bottom:"flex-end",center:"center"},BoxEl=tag,boxStyles=_emotion_css__WEBPACK_IMPORTED_MODULE_1__.iv`
    background-color: ${bgColor};
    background-image: ${bgImageUrl?`url(${bgImageUrl})`:null};
    background-position: ${getBgImageOptionVal("position")};
    background-repeat: ${getBgImageOptionVal("repeat")||"no-repeat"};
    background-size: ${getBgImageOptionVal("size")};
    display: ${displayValue};
    text-align: ${textAlign};
    ${isVisuallyHidden?_shared_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.jy:null};
    ${(vertAlignChildren=>vertAlignChildren?`\n        display: flex;\n        flex-direction: column;\n        justify-content: ${vertAlignMap[vertAlignChildren]};\n      `:null)(vertAlignChildren)};
  `;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoxEl,_extends({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(boxStyles,className),"data-cy":dataCy},other))},__WEBPACK_DEFAULT_EXPORT__=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{bgColor:{defaultValue:null,description:"Applies a background color",name:"bgColor",required:!1,type:{name:"BackgroundColor"}},bgImageUrl:{defaultValue:null,description:"Applies a background image",name:"bgImageUrl",required:!1,type:{name:"string"}},bgImageOptions:{defaultValue:null,description:"Options for how the background image should be displayed",name:"bgImageOptions",required:!1,type:{name:"BgImageOptions"}},display:{defaultValue:null,description:"Modifies the `display` property",name:"display",required:!1,type:{name:"Display"}},vertAlignChildren:{defaultValue:null,description:"Vertically aligns the direct children of the component",name:"vertAlignChildren",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},isVisuallyHidden:{defaultValue:null,description:"Hides the component and it's children visually, but still keeps them visual to screenreaders",name:"isVisuallyHidden",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:null,description:"Aligns text or inline and inline-block elements",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'}]}},tag:{defaultValue:null,description:"Which HTML tag to render the component with",name:"tag",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"cite"'},{value:'"data"'},{value:'"form"'},{value:'"label"'},{value:'"span"'},{value:'"summary"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"center"'},{value:'"s"'},{value:'"select"'},{value:'"table"'},{value:'"caption"'},{value:'"ul"'},{value:'"ol"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"strong"'},{value:'"sub"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'}]}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/styleUtils/modifiers/components/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"packages/styleUtils/modifiers/components/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}}}]);