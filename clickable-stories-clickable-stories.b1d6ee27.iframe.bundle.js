"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[1703],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME_action});var ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`;const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_AY7I2SME_config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function chunk_AY7I2SME_action(name,options={}){let actionOptions={...chunk_AY7I2SME_config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=esm_browser_v4(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./packages/clickable/stories/clickable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_clickable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/clickable/components/clickable.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Utils/Clickable",component:_components_clickable__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{children:{control:{disable:!0}},"data-cy":{control:{disable:!0}}}},Default={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_clickable__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({tabIndex:"0"},args),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Clickable Text")),args:{action:_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    action\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/clickable/components/clickable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>clickable});var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("./node_modules/react/index.js");const outline=emotion_css_esm.iv`
  &:focus {
    outline: 0;
  }
`,pointer=emotion_css_esm.iv`
  cursor: pointer;
`,Clickable=({tabIndex=-1,role="button",disableFocusOutline=!1,children,action,"data-cy":dataCy})=>{const{className=""}=children.props;return react.cloneElement(react.Children.only(children),{onClick:action,className:(0,emotion_css_esm.cx)(className,pointer,{[outline]:disableFocusOutline}),role,tabIndex,onKeyDown:event=>{!action||" "!==event.key&&"Enter"!==event.key||action(event)},"data-cy":dataCy})},clickable=react.memo(Clickable);try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{children:{defaultValue:null,description:"Children should be a HTML element.",name:"children",required:!0,type:{name:"ReactElement<HTMLElement, string | JSXElementConstructor<any>> & ReactNode"}},action:{defaultValue:null,description:"Action is a event handler for the onClick and onKeyDown events",name:"action",required:!1,type:{name:"((event?: SyntheticEvent<HTMLElement, Event>) => void)"}},tabIndex:{defaultValue:{value:"-1"},description:"The tabIndex is passed down and is the same as the native tabIndex",name:"tabIndex",required:!1,type:{name:"string | number"}},role:{defaultValue:{value:"button"},description:"ARIA role of the clickable element",name:"role",required:!1,type:{name:"string"}},disableFocusOutline:{defaultValue:{value:"false"},description:"Whether or not to reset the :focus outline style",name:"disableFocusOutline",required:!1,type:{name:"boolean"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/clickable/components/clickable.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/clickable/components/clickable.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}}}]);