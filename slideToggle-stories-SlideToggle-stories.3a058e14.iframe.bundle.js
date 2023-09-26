"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[1918],{"./packages/slideToggle/stories/SlideToggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_SlideToggle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/slideToggle/components/SlideToggle.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/SlideToggle",component:_components_SlideToggle__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{inputLabel:{control:{type:"text"}},hintContent:{control:{type:"text"}},errors:{control:{disable:!0}}},args:{appearance:"standard",inputLabel:"Default"}},Default={render:args=>{const[checked,setChecked]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SlideToggle__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({id:"toggle",inputLabel:"Toggle Me",value:"unchecked",checked,onClick:()=>{setChecked(!checked)}},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/icon/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts"),iconSizes=__webpack_require__("./packages/shared/styles/styleUtils/layout/iconSizes.ts");const icon=emotion_css_esm.iv`
  vertical-align: middle;

  use {
    pointer-events: none;
  }
`,blockIcon=emotion_css_esm.iv`
  display: block;
`,Icon=({color,size="s",shape,ariaLabel,"data-cy":dataCy,block,className})=>{const svgColor=color||"currentColor",iconSize=iconSizes._[size];return react.createElement("svg",{preserveAspectRatio:"xMinYMin meet",width:parseInt(iconSize,10),height:parseInt(iconSize,10),viewBox:`0 0 ${parseInt(iconSize,10)} ${parseInt(iconSize,10)}`,role:"img","aria-label":ariaLabel||`${shape} icon`,className:(0,emotion_css_esm.cx)(icon,(0,styleUtils.Do)(svgColor),block?blockIcon:"",className),"data-cy":["icon",dataCy].filter(Boolean).join(" ")},react.createElement("use",{xlinkHref:`#${shape}`}))},components_Icon=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{ariaLabel:{defaultValue:null,description:"If an icon is more than decorative and requires further context include a description for screen readers",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"The fill color of the icon",name:"color",required:!1,type:{name:"string"}},shape:{defaultValue:null,description:"The id of the SVG symbol we're rendering from a generated sprite",name:"shape",required:!0,type:{name:"enum",value:[{value:'"system-arrow-down"'},{value:'"system-arrow-left"'},{value:'"system-arrow-right"'},{value:'"system-arrow-up"'},{value:'"system-badge-check"'},{value:'"system-caret-down"'},{value:'"system-caret-left"'},{value:'"system-caret-right"'},{value:'"system-caret-up"'},{value:'"system-check"'},{value:'"system-circle-check"'},{value:'"system-circle-close"'},{value:'"system-circle-fire"'},{value:'"system-circle-information"'},{value:'"system-circle-minus"'},{value:'"system-circle-question"'},{value:'"system-clipboard"'},{value:'"system-clock"'},{value:'"system-close"'},{value:'"system-collection"'},{value:'"system-commit"'},{value:'"system-config-cycle"'},{value:'"system-container"'},{value:'"system-containers"'},{value:'"system-database"'},{value:'"system-donut"'},{value:'"system-door-key"'},{value:'"system-download"'},{value:'"system-ellipsis-horizontal"'},{value:'"system-ellipsis-vertical"'},{value:'"system-export"'},{value:'"system-eye-slash"'},{value:'"system-eye"'},{value:'"system-folder-minus"'},{value:'"system-folder-open"'},{value:'"system-folder-plus"'},{value:'"system-folder"'},{value:'"system-funnel"'},{value:'"system-gear"'},{value:'"system-grid"'},{value:'"system-import"'},{value:'"system-key"'},{value:'"system-link"'},{value:'"system-list"'},{value:'"system-lock-data"'},{value:'"system-lock-open"'},{value:'"system-lock"'},{value:'"system-menu"'},{value:'"system-minus"'},{value:'"system-mute"'},{value:'"system-open-external"'},{value:'"system-page-document"'},{value:'"system-page"'},{value:'"system-pages-document"'},{value:'"system-pages"'},{value:'"system-paperclip"'},{value:'"system-pencil"'},{value:'"system-photo"'},{value:'"system-platform-service-support"'},{value:'"system-plus"'},{value:'"system-repeat"'},{value:'"system-resize-horizontal"'},{value:'"system-search"'},{value:'"system-services"'},{value:'"system-share"'},{value:'"system-shield"'},{value:'"system-shuffle"'},{value:'"system-sidebar-collapse"'},{value:'"system-sidebar-expand"'},{value:'"system-spinner"'},{value:'"system-support"'},{value:'"system-thumbs-up"'},{value:'"system-triangle-down"'},{value:'"system-triangle-right"'},{value:'"system-upload"'},{value:'"system-user-minus"'},{value:'"system-user-plus"'},{value:'"system-user"'},{value:'"system-users-minus"'},{value:'"system-users-plus"'},{value:'"system-users"'},{value:'"system-yield"'},{value:'"product-cd-inverse"'},{value:'"product-cd"'},{value:'"product-ci-cd-inverse"'},{value:'"product-ci-cd"'},{value:'"product-ci-inverse"'},{value:'"product-ci"'},{value:'"product-cluster-attach-inverse"'},{value:'"product-cluster-attach"'},{value:'"product-cluster-inverse"'},{value:'"product-cluster"'},{value:'"product-components-inverse"'},{value:'"product-components"'},{value:'"product-documentation-inverse"'},{value:'"product-documentation"'},{value:'"product-file-yaml-inverse"'},{value:'"product-file-yaml"'},{value:'"product-gear-inverse"'},{value:'"product-gear"'},{value:'"product-global-inverse"'},{value:'"product-global"'},{value:'"product-graph-inverse"'},{value:'"product-graph"'},{value:'"product-insights-inverse"'},{value:'"product-insights"'},{value:'"product-jobs-inverse"'},{value:'"product-jobs"'},{value:'"product-lock-inverse"'},{value:'"product-lock"'},{value:'"product-management-cluster"'},{value:'"product-network-inverse"'},{value:'"product-network"'},{value:'"product-packages-inverse"'},{value:'"product-packages"'},{value:'"product-project-inverse"'},{value:'"product-project"'},{value:'"product-scan-inverse"'},{value:'"product-scan"'},{value:'"product-servers-inverse"'},{value:'"product-servers"'},{value:'"product-services-inverse"'},{value:'"product-services"'},{value:'"product-tested-inverse"'},{value:'"product-tested"'},{value:'"product-users-inverse"'},{value:'"product-users"'}]}},size:{defaultValue:{value:"s"},description:"Which icon size to use for the width and height of the icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"xxl"'}]}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}},block:{defaultValue:null,description:"Sets display to block if true",name:"block",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icon/components/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/icon/components/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_components_Icon__WEBPACK_IMPORTED_MODULE_0__.Z});var _components_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/icon/components/Icon.tsx")},"./packages/icons/dist/system-icons-enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SystemIcons});let SystemIcons=function(SystemIcons){return SystemIcons.ArrowDown="system-arrow-down",SystemIcons.ArrowLeft="system-arrow-left",SystemIcons.ArrowRight="system-arrow-right",SystemIcons.ArrowUp="system-arrow-up",SystemIcons.BadgeCheck="system-badge-check",SystemIcons.CaretDown="system-caret-down",SystemIcons.CaretLeft="system-caret-left",SystemIcons.CaretRight="system-caret-right",SystemIcons.CaretUp="system-caret-up",SystemIcons.Check="system-check",SystemIcons.CircleCheck="system-circle-check",SystemIcons.CircleClose="system-circle-close",SystemIcons.CircleFire="system-circle-fire",SystemIcons.CircleInformation="system-circle-information",SystemIcons.CircleMinus="system-circle-minus",SystemIcons.CircleQuestion="system-circle-question",SystemIcons.Clipboard="system-clipboard",SystemIcons.Clock="system-clock",SystemIcons.Close="system-close",SystemIcons.Collection="system-collection",SystemIcons.Commit="system-commit",SystemIcons.ConfigCycle="system-config-cycle",SystemIcons.Container="system-container",SystemIcons.Containers="system-containers",SystemIcons.Database="system-database",SystemIcons.Donut="system-donut",SystemIcons.DoorKey="system-door-key",SystemIcons.Download="system-download",SystemIcons.EllipsisHorizontal="system-ellipsis-horizontal",SystemIcons.EllipsisVertical="system-ellipsis-vertical",SystemIcons.Export="system-export",SystemIcons.EyeSlash="system-eye-slash",SystemIcons.Eye="system-eye",SystemIcons.FolderMinus="system-folder-minus",SystemIcons.FolderOpen="system-folder-open",SystemIcons.FolderPlus="system-folder-plus",SystemIcons.Folder="system-folder",SystemIcons.Funnel="system-funnel",SystemIcons.Gear="system-gear",SystemIcons.Grid="system-grid",SystemIcons.Import="system-import",SystemIcons.Key="system-key",SystemIcons.Link="system-link",SystemIcons.List="system-list",SystemIcons.LockData="system-lock-data",SystemIcons.LockOpen="system-lock-open",SystemIcons.Lock="system-lock",SystemIcons.Menu="system-menu",SystemIcons.Minus="system-minus",SystemIcons.Mute="system-mute",SystemIcons.OpenExternal="system-open-external",SystemIcons.PageDocument="system-page-document",SystemIcons.Page="system-page",SystemIcons.PagesDocument="system-pages-document",SystemIcons.Pages="system-pages",SystemIcons.Paperclip="system-paperclip",SystemIcons.Pencil="system-pencil",SystemIcons.Photo="system-photo",SystemIcons.PlatformServiceSupport="system-platform-service-support",SystemIcons.Plus="system-plus",SystemIcons.Repeat="system-repeat",SystemIcons.ResizeHorizontal="system-resize-horizontal",SystemIcons.Search="system-search",SystemIcons.Services="system-services",SystemIcons.Share="system-share",SystemIcons.Shield="system-shield",SystemIcons.Shuffle="system-shuffle",SystemIcons.SidebarCollapse="system-sidebar-collapse",SystemIcons.SidebarExpand="system-sidebar-expand",SystemIcons.Spinner="system-spinner",SystemIcons.Support="system-support",SystemIcons.ThumbsUp="system-thumbs-up",SystemIcons.TriangleDown="system-triangle-down",SystemIcons.TriangleRight="system-triangle-right",SystemIcons.Upload="system-upload",SystemIcons.UserMinus="system-user-minus",SystemIcons.UserPlus="system-user-plus",SystemIcons.User="system-user",SystemIcons.UsersMinus="system-users-minus",SystemIcons.UsersPlus="system-users-plus",SystemIcons.Users="system-users",SystemIcons.Yield="system-yield",SystemIcons}({})},"./packages/shared/components/FormFieldWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/shared/styles/styleUtils/index.ts"),_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js");const FormFieldWrapper=({children,errors,hintContent,id})=>{const generatedId=`formFieldWrapper-${react__WEBPACK_IMPORTED_MODULE_0__.useId()}`,formFieldWrapperId=id||generatedId,getHintContentId=()=>hintContent?`${formFieldWrapperId}-hintContent`:"",getErrorId=(error,formFieldWrapperId)=>`${formFieldWrapperId}-errorMsg${errors?errors.indexOf(error):-1}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children({getValidationErrors:((errors,formFieldWrapperId)=>!errors||errors&&0===errors.length?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)((0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.yl)("all"),(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.zC)("s"),(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.Ip)(_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_3__.themeError))},errors.map(((error,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index,id:getErrorId(error,formFieldWrapperId),className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.Wp,(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.o3)("top","xxs"))},error)))))(errors,formFieldWrapperId),getHintContent:(hintContent=>hintContent?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:getHintContentId(),className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.Zp,(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.jf)("block"),(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.o3)("top","xxs"),(0,_styles_styleUtils__WEBPACK_IMPORTED_MODULE_2__.zC)("s"))},hintContent):null)(hintContent),describedByIds:((hintContent,errors)=>hintContent&&errors?`${hintContent} ${errors}`:errors||hintContent)(getHintContentId(),errors?errors.map((error=>getErrorId(error,formFieldWrapperId))).join(" "):""),isValid:!errors||errors&&0===errors.length}))},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.memo(FormFieldWrapper);try{FormFieldWrapper.displayName="FormFieldWrapper",FormFieldWrapper.__docgenInfo={description:"",displayName:"FormFieldWrapper",props:{errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"ReactNode[]"}},hintContent:{defaultValue:null,description:"",name:"hintContent",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/shared/components/FormFieldWrapper.tsx#FormFieldWrapper"]={docgenInfo:FormFieldWrapper.__docgenInfo,name:"FormFieldWrapper",path:"packages/shared/components/FormFieldWrapper.tsx#FormFieldWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/shared/styles/styleUtils/layout/iconSizes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>iconSizes});var _design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js");const iconSizes={xxs:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeXxs,xs:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeXs,s:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeS,m:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeM,l:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeL,xl:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeXl,xxl:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_0__.iconSizeXxl}},"./packages/shared/types/inputAppearance.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>InputAppearance});let InputAppearance=function(InputAppearance){return InputAppearance.Standard="standard",InputAppearance.Error="error",InputAppearance.Success="success",InputAppearance}({})},"./packages/slideToggle/components/SlideToggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_SlideToggle});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts"),designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),inputAppearance=__webpack_require__("./packages/shared/types/inputAppearance.ts"),FormFieldWrapper=__webpack_require__("./packages/shared/components/FormFieldWrapper.tsx"),system_icons_enum=__webpack_require__("./packages/icons/dist/system-icons-enum.ts"),icon=__webpack_require__("./packages/icon/index.ts");const toggleInputLabel=emotion_css_esm.iv`
  padding-left: ${designTokens.spaceS};
`,toggleInputFeedbackText=emotion_css_esm.iv`
  padding-left: ${28+parseInt(designTokens.spaceS,10)}px;
`,toggleInputAppearances={disabled:emotion_css_esm.iv`
    border: solid;
    border-width: ${1}px;
    border-color: ${designTokens.themeBgDisabled};
    background-color: ${designTokens.themeBgDisabled};

    &:before {
      border: solid;
      border-color: ${designTokens.themeBgDisabled};
      border-width: ${1}px;
    }
  `,"standard-focus":emotion_css_esm.iv`
    border: solid;
    border-width: ${1}px;
    border-color: ${designTokens.themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${designTokens.themeBrandPrimary};
      border-width: ${1}px;
    }
  `,"standard-active":emotion_css_esm.iv`
    border: solid;
    border-color: ${designTokens.themeBrandPrimary};
    border-width: ${1}px;
    background-color: ${designTokens.themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${designTokens.themeBrandPrimary};
      border-width: ${1}px;
      transform: translateX(${15}px);
    }
  `,"error-active":emotion_css_esm.iv`
    border: solid;
    border-color: ${designTokens.themeBrandPrimary};
    border-width: ${1}px;
    background-color: ${designTokens.themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${designTokens.themeBrandPrimary};
      border-width: ${1}px;
      transform: translateX(${15}px);
    }
  `,"success-active":emotion_css_esm.iv`
    border: solid;
    border-color: ${designTokens.themeBrandPrimary};
    border-width: ${1}px;
    background-color: ${designTokens.themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${designTokens.themeBrandPrimary};
      border-width: ${1}px;
      transform: translateX(${15}px);
    }
  `,"error-focus":emotion_css_esm.iv`
    border: solid;
    border-width: ${1}px;
    border-color: ${designTokens.themeError};

    &:before {
      border: solid;
      border-width: ${1}px;
      border-color: ${designTokens.themeError};
    }
  `,"success-focus":emotion_css_esm.iv`
    border: solid;
    border-width: ${1}px;
    border-color: ${designTokens.themeSuccess};

    &:before {
      border: solid;
      border-width: ${1}px;
      border-color: ${designTokens.themeSuccess};
    }
  `,"disabled-active":emotion_css_esm.iv`
    border: solid;
    border-width: ${1}px;
    border-color: ${designTokens.themeTextColorDisabled};
    background-color: ${designTokens.themeTextColorDisabled};

    &:before {
      border: solid;
      border-width: ${1}px;
      border-color: ${designTokens.themeTextColorDisabled};
    }
  `,"focus-active":emotion_css_esm.iv``},toggleContainer=emotion_css_esm.iv`
  height: ${14}px;
  position: relative;
  width: ${28}px;
`,toggle=emotion_css_esm.iv`
  background-color: ${designTokens.themeBgPrimary};
  border: solid;
  border-width: ${1}px;
  border-color: ${designTokens.themeBorder};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 250ms;

  &:before {
    background-color: ${designTokens.white};
    border: solid;
    border-color: ${designTokens.themeBorder};
    border-width: ${1}px;
    bottom: ${-1}px;
    content: "";
    height: ${12}px;
    left: ${-1}px;
    position: absolute;
    transition: 250ms;
    width: ${12}px;
  }
`,toggleRound=emotion_css_esm.iv`
  border-radius: ${designTokens.spaceL};
  &:before {
    border-radius: ${designTokens.borderRadiusCircle};
  }
`,checkContainer=emotion_css_esm.iv`
  position: absolute;
  left: ${2}px;
  bottom: ${-2}px;
`;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SlideToggle=props=>{const{appearance=inputAppearance.O.Standard,children,className,disabled,hintContent,id,inputLabel,showInputLabel="true",vertAlign="center",checked,value,errors,onBlur,onFocus,...other}=props,generatedId=`slideToggle-${react.useId()}`,slideToggleId=id||generatedId,inputType="SlideToggle",inputDataCy=[`${inputType}-input`,...checked?[`${inputType}-input.checked`]:[],...appearance&&appearance!==inputAppearance.O.Standard?[`${inputType}-input.${appearance}`]:[]].join(" "),parentDataCy=[`${inputType}`,...checked?[`${inputType}.checked`]:[],...appearance&&appearance!==inputAppearance.O.Standard?[`${inputType}.${appearance}`]:[]].join(" "),[hasFocus,setHasFocus]=react.useState(!1),handleFocus=e=>{setHasFocus(!0),onFocus?.(e)},handleBlur=e=>{setHasFocus(!1),onBlur?.(e)};return react.createElement(FormFieldWrapper.Z,{id:slideToggleId,errors,hintContent},(({getValidationErrors,isValid,describedByIds,getHintContent})=>react.createElement("div",{className:(0,emotion_css_esm.cx)(styleUtils.Dt,className),"data-cy":parentDataCy},react.createElement("label",{className:(0,emotion_css_esm.cx)((0,styleUtils.fU)({align:"top"===vertAlign?"flex-start":"center"}),(0,styleUtils.jf)("inline-flex")),htmlFor:slideToggleId},react.createElement("div",{className:(0,emotion_css_esm.cx)((0,styleUtils.OK)("shrink"),(0,styleUtils.jf)("inherit"))},react.createElement(react.Fragment,null,react.createElement("div",{className:(0,emotion_css_esm.cx)(toggleContainer)},react.createElement("input",_extends({type:inputType,id:slideToggleId,className:styleUtils.jy,defaultChecked:checked,disabled,defaultValue:value,"aria-invalid":!isValid,"aria-describedby":describedByIds,onFocus:handleFocus,onBlur:handleBlur,"data-cy":inputDataCy},other)),react.createElement("div",{className:(0,emotion_css_esm.cx)(toggle,toggleRound,{[toggleInputAppearances[`${appearance}-focus`]]:hasFocus,[toggleInputAppearances[`${appearance}-active`]]:checked,[toggleInputAppearances["focus-active"]]:checked&&hasFocus,[toggleInputAppearances.disabled]:disabled,[toggleInputAppearances["disabled-active"]]:disabled&&checked})},checked&&react.createElement("span",{className:checkContainer},react.createElement(icon.J,{shape:system_icons_enum.i.Check,size:"xxs",color:designTokens.themeBgPrimary})))))),react.createElement("div",{className:(0,emotion_css_esm.cx)((0,styleUtils.OK)("grow"),toggleInputLabel,{[styleUtils.jy]:!showInputLabel,[(0,styleUtils.Ip)(designTokens.themeError)]:appearance===inputAppearance.O.Error,[(0,styleUtils.Ip)(designTokens.themeSuccess)]:appearance===inputAppearance.O.Success,[styleUtils.Zp]:disabled})},inputLabel)),(getHintContent||getValidationErrors)&&react.createElement("div",{className:toggleInputFeedbackText},getHintContent,appearance===inputAppearance.O.Error&&getValidationErrors))))},components_SlideToggle=SlideToggle;try{SlideToggle.displayName="SlideToggle",SlideToggle.__docgenInfo={description:"",displayName:"SlideToggle",props:{appearance:{defaultValue:null,description:"Sets the current appearance of the input component. This defaults to InputAppearance.Standard, but supports `InputAppearance.Error` & `InputAppearance.Success` appearances as well.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"error"'},{value:'"success"'}]}},checked:{defaultValue:null,description:"Whether or not the input is checked.",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique identifier used for the input element.",name:"id",required:!1,type:{name:"string"}},inputLabel:{defaultValue:null,description:"The text or node content that appears next to the input.",name:"inputLabel",required:!0,type:{name:"ReactNode"}},showInputLabel:{defaultValue:null,description:"Defaults to `true`, but can be set to `false` to visibly hide the content passed to `inputLabel`. The `inputLabel` should still be set even when hidden for accessibility support.",name:"showInputLabel",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value being toggled",name:"value",required:!1,type:{name:"string"}},vertAlign:{defaultValue:null,description:"How the text content vertically aligns with the input.",name:"vertAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},hintContent:{defaultValue:null,description:"hintContent is text or a ReactNode that is displayed directly under the input with additional information about the expected input.",name:"hintContent",required:!1,type:{name:"ReactNode"}},errors:{defaultValue:null,description:"Sets the contents for validation errors. This will be displayed below the input element. Errors are only visible when the `TextInput` appearance is also set to `TextInputAppearance.Error`.",name:"errors",required:!1,type:{name:"ReactNode[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/slideToggle/components/SlideToggle.tsx#SlideToggle"]={docgenInfo:SlideToggle.__docgenInfo,name:"SlideToggle",path:"packages/slideToggle/components/SlideToggle.tsx#SlideToggle"})}catch(__react_docgen_typescript_loader_error){}}}]);