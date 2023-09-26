"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[8671],{"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>newStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}))},"./decorators/inputStoryWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>InputStoryWrapper});const InputStoryWrapper=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.div`
  max-width: 300px;

  & > * {
    margin-bottom: 1.5em;
  }
`;try{InputStoryWrapper.displayName="InputStoryWrapper",InputStoryWrapper.__docgenInfo={description:"",displayName:"InputStoryWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["decorators/inputStoryWrapper.tsx#InputStoryWrapper"]={docgenInfo:InputStoryWrapper.__docgenInfo,name:"InputStoryWrapper",path:"decorators/inputStoryWrapper.tsx#InputStoryWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/textInput/stories/TextInputWithBadges.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DontAddBadgeOnBlur:()=>DontAddBadgeOnBlur,UsedWithTypeaheadPrefilledWBadges:()=>UsedWithTypeaheadPrefilledWBadges,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInputWithBadges_stories});var react=__webpack_require__("./node_modules/react/index.js"),textInput=__webpack_require__("./packages/textInput/index.ts"),inputStoryWrapper=__webpack_require__("./decorators/inputStoryWrapper.tsx");const TextInputWithBadgesStoryHelper=props=>{const[badges,setBadges]=react.useState(props.badges||[]);return props.children({badges,badgeChangeHandler:badgesNext=>{setBadges(badgesNext)}})},helpers_TextInputWithBadgesStoryHelper=react.memo(TextInputWithBadgesStoryHelper);try{TextInputWithBadgesStoryHelper.displayName="TextInputWithBadgesStoryHelper",TextInputWithBadgesStoryHelper.__docgenInfo={description:"",displayName:"TextInputWithBadgesStoryHelper",props:{badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"BadgeDatum[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/textInput/stories/helpers/TextInputWithBadgesStoryHelper.tsx#TextInputWithBadgesStoryHelper"]={docgenInfo:TextInputWithBadgesStoryHelper.__docgenInfo,name:"TextInputWithBadgesStoryHelper",path:"packages/textInput/stories/helpers/TextInputWithBadgesStoryHelper.tsx#TextInputWithBadgesStoryHelper"})}catch(__react_docgen_typescript_loader_error){}var typeahead=__webpack_require__("./packages/typeahead/index.ts");const TextInputWithBadgesTypeaheadStoryHelper=props=>{const[badges,setBadges]=react.useState(props.badges||[]),[selectedItems,setSelectedItems]=react.useState(props.selectedItems||[]);return props.children({selectHandler:(selectedItems,lastSelectedItem)=>{setSelectedItems(selectedItems),setBadges([...badges.filter((badge=>badge.value!==lastSelectedItem)),...badges.some((badge=>badge.value===lastSelectedItem))?[]:props.items.filter((item=>item.value===lastSelectedItem))])},badgeChangeHandler:badges=>{setSelectedItems(badges.map((badge=>badge.value))),setBadges(badges)},badges,selectedItems,items:props.items})},helpers_TextInputWithBadgesTypeaheadStoryHelper=TextInputWithBadgesTypeaheadStoryHelper;try{TextInputWithBadgesTypeaheadStoryHelper.displayName="TextInputWithBadgesTypeaheadStoryHelper",TextInputWithBadgesTypeaheadStoryHelper.__docgenInfo={description:"",displayName:"TextInputWithBadgesTypeaheadStoryHelper",props:{badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"BadgeDatum[]"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},selectedItems:{defaultValue:null,description:"",name:"selectedItems",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/textInput/stories/helpers/TextInputWithBadgesTypeaheadStoryHelper.tsx#TextInputWithBadgesTypeaheadStoryHelper"]={docgenInfo:TextInputWithBadgesTypeaheadStoryHelper.__docgenInfo,name:"TextInputWithBadgesTypeaheadStoryHelper",path:"packages/textInput/stories/helpers/TextInputWithBadgesTypeaheadStoryHelper.tsx#TextInputWithBadgesTypeaheadStoryHelper"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const typeaheadItems=[{value:"exosphere",label:"Exosphere"},{value:"thermosphere",label:"Thermosphere"},{value:"mesosphere",label:"Mesosphere"},{value:"stratosphere",label:"Stratosphere"},{value:"ozone-layer",label:"Ozone Layer"},{value:"troposphere",label:"Troposphere"}],defaultBadges=[{label:"Badge one",value:"badge-one"},{label:"Badge two",value:"badge-two"},{label:"Badge three",value:"badge-three"}],TextInputWithBadges_stories={title:"Forms/TextInputWithBadges",decorators:[Story=>react.createElement(inputStoryWrapper.k,null,Story())],component:textInput.Ed,argTypes:{hintContent:{inputLabel:{control:{type:"text"}},control:{type:"text"}},tooltipContent:{control:{type:"text"}},errors:{control:{disable:!0}}},args:{appearance:"standard",inputLabel:"Default Input Label"}},Default={render:args=>react.createElement(helpers_TextInputWithBadgesStoryHelper,{badges:defaultBadges},(({badges,badgeChangeHandler})=>react.createElement(textInput.Ed,_extends({id:"default",inputLabel:"Default Input Label",onBadgeChange:badgeChangeHandler,badges},args))))},DontAddBadgeOnBlur={render:args=>react.createElement(helpers_TextInputWithBadgesStoryHelper,null,(({badges,badgeChangeHandler})=>react.createElement(textInput.Ed,_extends({id:"noAddOnBlur",inputLabel:"Don't add badge on blur",onBadgeChange:badgeChangeHandler,badges,addBadgeOnBlur:!1},args))))},UsedWithTypeaheadPrefilledWBadges={render:args=>react.createElement(helpers_TextInputWithBadgesTypeaheadStoryHelper,{items:typeaheadItems,badges:[typeaheadItems[0],typeaheadItems[1],typeaheadItems[2]]},(({items,selectHandler,selectedItems,badgeChangeHandler,badges})=>react.createElement(typeahead.p,{items:items.filter((item=>!badges.map((badge=>badge.value)).includes(item.value))),selectedItems,keepOpenOnSelect:!1,resetInputOnSelect:!0,textField:react.createElement(textInput.Ed,_extends({id:"typeahead.prefilled",inputLabel:"Pre-filled Typeahead",placeholder:badges.length?"":"Placeholder",badges,onBadgeChange:badgeChangeHandler},args)),onSelect:selectHandler})))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}},DontAddBadgeOnBlur.parameters={...DontAddBadgeOnBlur.parameters,docs:{...DontAddBadgeOnBlur.parameters?.docs,source:{originalSource:'{\n  render: args => <TextInputWithBadgesStoryHelper>\n      {({\n      badges,\n      badgeChangeHandler\n    }) => <TextInputWithBadges id="noAddOnBlur" inputLabel="Don\'t add badge on blur" onBadgeChange={badgeChangeHandler} badges={badges} addBadgeOnBlur={false} {...args} />}\n    </TextInputWithBadgesStoryHelper>\n}',...DontAddBadgeOnBlur.parameters?.docs?.source}}},UsedWithTypeaheadPrefilledWBadges.parameters={...UsedWithTypeaheadPrefilledWBadges.parameters,docs:{...UsedWithTypeaheadPrefilledWBadges.parameters?.docs,source:{originalSource:'{\n  render: args => <TextInputWithBadgesTypeaheadStoryHelper items={typeaheadItems} badges={[typeaheadItems[0], typeaheadItems[1], typeaheadItems[2]]}>\n      {({\n      items,\n      selectHandler,\n      selectedItems,\n      badgeChangeHandler,\n      badges\n    }) => {\n      return <Typeahead\n      // removes items from the Typeahead that already exist in the badge input\n      items={items.filter(item => !badges.map(badge => badge.value).includes(item.value))} selectedItems={selectedItems} keepOpenOnSelect={false} resetInputOnSelect={true} textField={<TextInputWithBadges id="typeahead.prefilled" inputLabel="Pre-filled Typeahead" placeholder={badges.length ? "" : "Placeholder"} badges={badges} onBadgeChange={badgeChangeHandler} {...args} />} onSelect={selectHandler} />;\n    }}\n    </TextInputWithBadgesTypeaheadStoryHelper>\n}',...UsedWithTypeaheadPrefilledWBadges.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DontAddBadgeOnBlur","UsedWithTypeaheadPrefilledWBadges"]}}]);