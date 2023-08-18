"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[6564],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME_action});var ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`;const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_AY7I2SME_config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function chunk_AY7I2SME_action(name,options={}){let actionOptions={...chunk_AY7I2SME_config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=esm_browser_v4(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./packages/promo/stories/promoInline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithActions:()=>WithActions,WithGraphic:()=>WithGraphic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/index.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/promo/index.ts"),_components_PromoContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/promo/components/PromoContent.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/PromoInline",component:___WEBPACK_IMPORTED_MODULE_3__.I,subcomponents:{PromoContent:_components_PromoContent__WEBPACK_IMPORTED_MODULE_4__.Z},argTypes:{bodyContent:{control:{type:"text"}},primaryAction:{control:{disable:!0}},secondaryAction:{control:{disable:!0}},"data-cy":{control:{disable:!0}}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.mr,{breadcrumbElements:["Page Header"]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.$1,{spacingSize:"l"},"Some page content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.I,_extends({headingText:"Promo Card",bodyContent:"The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page.",dismissHandler:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Hide the promo"),optOutHandler:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Do not show this promo again")},args)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.$1,{spacingSize:"l"},"Some more page content")),Default={render:Template},WithGraphic={render:Template,args:{primaryAction:react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.KM,null,"Primary Action"),secondaryAction:react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.kq,null,"Secondary Action")}},WithActions={render:Template};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}},WithGraphic.parameters={...WithGraphic.parameters,docs:{...WithGraphic.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    primaryAction: <PrimaryButton>Primary Action</PrimaryButton>,\n    secondaryAction: <SecondaryButton>Secondary Action</SecondaryButton>\n  }\n}",...WithGraphic.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...WithActions.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithGraphic","WithActions"]}}]);