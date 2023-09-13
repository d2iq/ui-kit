/*! For license information please see 9415.6c64bbf3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[9415],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{Z:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./node_modules/downshift/dist/downshift.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Downshift$1});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/downshift/node_modules/react-is/index.js");let e=e=>"object"==typeof e&&null!=e&&1===e.nodeType,t=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,n=(e,n)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let l=getComputedStyle(e,null);return t(l.overflowY,n)||t(l.overflowX,n)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},l=(e,t,n,l,i,o,r,d)=>o<e&&r>t||o>e&&r<t?0:o<=e&&d<=n||r>=t&&d>=n?o-e-l:r>t&&d<n||o<e&&d>n?r-t+i:0,i=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t};var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.create;Object.create;var idCounter=0;function cbToCb(cb){return"function"==typeof cb?cb:noop}function noop(){}function scrollIntoView(node,menuNode){if(node){var actions=((t,o)=>{var r,d,h,f,u,s;if("undefined"==typeof document)return[];let{scrollMode:a,block:c,inline:g,boundary:m,skipOverflowHiddenElements:p}=o,w="function"==typeof m?m:e=>e!==m;if(!e(t))throw new TypeError("Invalid target");let W=document.scrollingElement||document.documentElement,H=[],b=t;for(;e(b)&&w(b);){if(b=i(b),b===W){H.push(b);break}null!=b&&b===document.body&&n(b)&&!n(document.documentElement)||null!=b&&n(b,p)&&H.push(b)}let v=null!=(d=null==(r=window.visualViewport)?void 0:r.width)?d:innerWidth,y=null!=(f=null==(h=window.visualViewport)?void 0:h.height)?f:innerHeight,E=null!=(u=window.scrollX)?u:pageXOffset,M=null!=(s=window.scrollY)?s:pageYOffset,{height:x,width:I,top:C,right:R,bottom:T,left:V}=t.getBoundingClientRect(),k="start"===c||"nearest"===c?C:"end"===c?T:C+x/2,B="center"===g?V+I/2:"end"===g?R:V,D=[];for(let e=0;e<H.length;e++){let t=H[e],{height:n,width:i,top:o,right:r,bottom:d,left:h}=t.getBoundingClientRect();if("if-needed"===a&&C>=0&&V>=0&&T<=y&&R<=v&&C>=o&&T<=d&&V>=h&&R<=r)return D;let f=getComputedStyle(t),u=parseInt(f.borderLeftWidth,10),s=parseInt(f.borderTopWidth,10),m=parseInt(f.borderRightWidth,10),p=parseInt(f.borderBottomWidth,10),w=0,b=0,O="offsetWidth"in t?t.offsetWidth-t.clientWidth-u-m:0,X="offsetHeight"in t?t.offsetHeight-t.clientHeight-s-p:0,Y="offsetWidth"in t?0===t.offsetWidth?0:i/t.offsetWidth:0,L="offsetHeight"in t?0===t.offsetHeight?0:n/t.offsetHeight:0;if(W===t)w="start"===c?k:"end"===c?k-y:"nearest"===c?l(M,M+y,y,s,p,M+k,M+k+x,x):k-y/2,b="start"===g?B:"center"===g?B-v/2:"end"===g?B-v:l(E,E+v,v,u,m,E+B,E+B+I,I),w=Math.max(0,w+M),b=Math.max(0,b+E);else{w="start"===c?k-o-s:"end"===c?k-d+p+X:"nearest"===c?l(o,d,n,s,p+X,k,k+x,x):k-(o+n/2)+X/2,b="start"===g?B-h-u:"center"===g?B-(h+i/2)+O/2:"end"===g?B-r+m+O:l(h,r,i,u,m+O,B,B+I,I);let{scrollLeft:e,scrollTop:f}=t;w=Math.max(0,Math.min(f+w/L,t.scrollHeight-n/L+X)),b=Math.max(0,Math.min(e+b/Y,t.scrollWidth-i/Y+O)),k+=f-w,B+=e-b}D.push({el:t,top:w,left:b})}return D})(node,{boundary:menuNode,block:"nearest",scrollMode:"if-needed"});actions.forEach((function(_ref){var el=_ref.el,top=_ref.top,left=_ref.left;el.scrollTop=top,el.scrollLeft=left}))}}function isOrContainsNode(parent,child,environment){return parent===child||child instanceof environment.Node&&parent.contains&&parent.contains(child)}function debounce(fn,time){var timeoutId;function cancel(){timeoutId&&clearTimeout(timeoutId)}function wrapper(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];cancel(),timeoutId=setTimeout((function(){timeoutId=null,fn.apply(void 0,args)}),time)}return wrapper.cancel=cancel,wrapper}function callAllEventHandlers(){for(var _len2=arguments.length,fns=new Array(_len2),_key2=0;_key2<_len2;_key2++)fns[_key2]=arguments[_key2];return function(event){for(var _len3=arguments.length,args=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++)args[_key3-1]=arguments[_key3];return fns.some((function(fn){return fn&&fn.apply(void 0,[event].concat(args)),event.preventDownshiftDefault||event.hasOwnProperty("nativeEvent")&&event.nativeEvent.preventDownshiftDefault}))}}function handleRefs(){for(var _len4=arguments.length,refs=new Array(_len4),_key4=0;_key4<_len4;_key4++)refs[_key4]=arguments[_key4];return function(node){refs.forEach((function(ref){"function"==typeof ref?ref(node):ref&&(ref.current=node)}))}}function generateId(){return String(idCounter++)}function getA11yStatusMessage$1(_ref2){var isOpen=_ref2.isOpen,resultCount=_ref2.resultCount,previousResultCount=_ref2.previousResultCount;return isOpen?resultCount?resultCount!==previousResultCount?resultCount+" result"+(1===resultCount?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function unwrapArray(arg,defaultValue){return!(arg=Array.isArray(arg)?arg[0]:arg)&&defaultValue?defaultValue:arg}function isDOMElement(element){return"string"==typeof element.type}function getElementProps(element){return element.props}var stateKeys=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function pickState(state){void 0===state&&(state={});var result={};return stateKeys.forEach((function(k){state.hasOwnProperty(k)&&(result[k]=state[k])})),result}function getState(state,props){return Object.keys(state).reduce((function(prevState,key){return prevState[key]=isControlledProp(props,key)?props[key]:state[key],prevState}),{})}function isControlledProp(props,key){return void 0!==props[key]}function normalizeArrowKey(event){var key=event.key,keyCode=event.keyCode;return keyCode>=37&&keyCode<=40&&0!==key.indexOf("Arrow")?"Arrow"+key:key}function getNextWrappingIndex(moveAmount,baseIndex,itemCount,getItemNodeFromIndex,circular){if(void 0===circular&&(circular=!0),0===itemCount)return-1;var itemsLastIndex=itemCount-1;("number"!=typeof baseIndex||baseIndex<0||baseIndex>=itemCount)&&(baseIndex=moveAmount>0?-1:itemsLastIndex+1);var newIndex=baseIndex+moveAmount;newIndex<0?newIndex=circular?itemsLastIndex:0:newIndex>itemsLastIndex&&(newIndex=circular?0:itemsLastIndex);var nonDisabledNewIndex=getNextNonDisabledIndex(moveAmount,newIndex,itemCount,getItemNodeFromIndex,circular);return-1===nonDisabledNewIndex?baseIndex>=itemCount?-1:baseIndex:nonDisabledNewIndex}function getNextNonDisabledIndex(moveAmount,baseIndex,itemCount,getItemNodeFromIndex,circular){var currentElementNode=getItemNodeFromIndex(baseIndex);if(!currentElementNode||!currentElementNode.hasAttribute("disabled"))return baseIndex;if(moveAmount>0){for(var index=baseIndex+1;index<itemCount;index++)if(!getItemNodeFromIndex(index).hasAttribute("disabled"))return index}else for(var _index=baseIndex-1;_index>=0;_index--)if(!getItemNodeFromIndex(_index).hasAttribute("disabled"))return _index;return circular?moveAmount>0?getNextNonDisabledIndex(1,0,itemCount,getItemNodeFromIndex,!1):getNextNonDisabledIndex(-1,itemCount-1,itemCount,getItemNodeFromIndex,!1):-1}function targetWithinDownshift(target,downshiftElements,environment,checkActiveElement){return void 0===checkActiveElement&&(checkActiveElement=!0),downshiftElements.some((function(contextNode){return contextNode&&(isOrContainsNode(contextNode,target,environment)||checkActiveElement&&isOrContainsNode(contextNode,environment.document.activeElement,environment))}))}var cleanupStatus=debounce((function(documentProp){getStatusDiv(documentProp).textContent=""}),500);function setStatus(status,documentProp){var div=getStatusDiv(documentProp);status&&(div.textContent=status,cleanupStatus(documentProp))}function getStatusDiv(documentProp){void 0===documentProp&&(documentProp=document);var statusDiv=documentProp.getElementById("a11y-status-message");return statusDiv||((statusDiv=documentProp.createElement("div")).setAttribute("id","a11y-status-message"),statusDiv.setAttribute("role","status"),statusDiv.setAttribute("aria-live","polite"),statusDiv.setAttribute("aria-relevant","additions text"),Object.assign(statusDiv.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),documentProp.body.appendChild(statusDiv),statusDiv)}var stateChangeTypes$3=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),_excluded$4=["refKey","ref"],_excluded2$3=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],_excluded3$2=["onKeyDown","onBlur","onChange","onInput","onChangeText"],_excluded4$1=["refKey","ref"],_excluded5=["onMouseMove","onMouseDown","onClick","onPress","index","item"],Downshift=function(){var Downshift=function(_Component){function Downshift(_props){var _this;(_this=_Component.call(this,_props)||this).id=_this.props.id||"downshift-"+generateId(),_this.menuId=_this.props.menuId||_this.id+"-menu",_this.labelId=_this.props.labelId||_this.id+"-label",_this.inputId=_this.props.inputId||_this.id+"-input",_this.getItemId=_this.props.getItemId||function(index){return _this.id+"-item-"+index},_this.input=null,_this.items=[],_this.itemCount=null,_this.previousResultCount=0,_this.timeoutIds=[],_this.internalSetTimeout=function(fn,time){var id=setTimeout((function(){_this.timeoutIds=_this.timeoutIds.filter((function(i){return i!==id})),fn()}),time);_this.timeoutIds.push(id)},_this.setItemCount=function(count){_this.itemCount=count},_this.unsetItemCount=function(){_this.itemCount=null},_this.setHighlightedIndex=function(highlightedIndex,otherStateToSet){void 0===highlightedIndex&&(highlightedIndex=_this.props.defaultHighlightedIndex),void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((0,esm_extends.Z)({highlightedIndex},otherStateToSet))},_this.clearSelection=function(cb){_this.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:_this.props.defaultHighlightedIndex,isOpen:_this.props.defaultIsOpen},cb)},_this.selectItem=function(item,otherStateToSet,cb){otherStateToSet=pickState(otherStateToSet),_this.internalSetState((0,esm_extends.Z)({isOpen:_this.props.defaultIsOpen,highlightedIndex:_this.props.defaultHighlightedIndex,selectedItem:item,inputValue:_this.props.itemToString(item)},otherStateToSet),cb)},_this.selectItemAtIndex=function(itemIndex,otherStateToSet,cb){var item=_this.items[itemIndex];null!=item&&_this.selectItem(item,otherStateToSet,cb)},_this.selectHighlightedItem=function(otherStateToSet,cb){return _this.selectItemAtIndex(_this.getState().highlightedIndex,otherStateToSet,cb)},_this.internalSetState=function(stateToSet,cb){var isItemSelected,onChangeArg,onStateChangeArg={},isStateToSetFunction="function"==typeof stateToSet;return!isStateToSetFunction&&stateToSet.hasOwnProperty("inputValue")&&_this.props.onInputValueChange(stateToSet.inputValue,(0,esm_extends.Z)({},_this.getStateAndHelpers(),stateToSet)),_this.setState((function(state){state=_this.getState(state);var newStateToSet=isStateToSetFunction?stateToSet(state):stateToSet;newStateToSet=_this.props.stateReducer(state,newStateToSet),isItemSelected=newStateToSet.hasOwnProperty("selectedItem");var nextState={};return isItemSelected&&newStateToSet.selectedItem!==state.selectedItem&&(onChangeArg=newStateToSet.selectedItem),newStateToSet.type=newStateToSet.type||0,Object.keys(newStateToSet).forEach((function(key){state[key]!==newStateToSet[key]&&(onStateChangeArg[key]=newStateToSet[key]),"type"!==key&&(newStateToSet[key],isControlledProp(_this.props,key)||(nextState[key]=newStateToSet[key]))})),isStateToSetFunction&&newStateToSet.hasOwnProperty("inputValue")&&_this.props.onInputValueChange(newStateToSet.inputValue,(0,esm_extends.Z)({},_this.getStateAndHelpers(),newStateToSet)),nextState}),(function(){cbToCb(cb)(),Object.keys(onStateChangeArg).length>1&&_this.props.onStateChange(onStateChangeArg,_this.getStateAndHelpers()),isItemSelected&&_this.props.onSelect(stateToSet.selectedItem,_this.getStateAndHelpers()),void 0!==onChangeArg&&_this.props.onChange(onChangeArg,_this.getStateAndHelpers()),_this.props.onUserAction(onStateChangeArg,_this.getStateAndHelpers())}))},_this.rootRef=function(node){return _this._rootNode=node},_this.getRootProps=function(_temp,_temp2){var _extends2,_ref=void 0===_temp?{}:_temp,_ref$refKey=_ref.refKey,refKey=void 0===_ref$refKey?"ref":_ref$refKey,ref=_ref.ref,rest=(0,objectWithoutPropertiesLoose.Z)(_ref,_excluded$4),_ref2$suppressRefErro=(void 0===_temp2?{}:_temp2).suppressRefError,suppressRefError=void 0!==_ref2$suppressRefErro&&_ref2$suppressRefErro;_this.getRootProps.called=!0,_this.getRootProps.refKey=refKey,_this.getRootProps.suppressRefError=suppressRefError;var isOpen=_this.getState().isOpen;return(0,esm_extends.Z)(((_extends2={})[refKey]=handleRefs(ref,_this.rootRef),_extends2.role="combobox",_extends2["aria-expanded"]=isOpen,_extends2["aria-haspopup"]="listbox",_extends2["aria-owns"]=isOpen?_this.menuId:null,_extends2["aria-labelledby"]=_this.labelId,_extends2),rest)},_this.keyDownHandlers={ArrowDown:function ArrowDown(event){var _this2=this;if(event.preventDefault(),this.getState().isOpen){var amount=event.shiftKey?5:1;this.moveHighlightedIndex(amount,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var itemCount=_this2.getItemCount();if(itemCount>0){var nextHighlightedIndex=getNextWrappingIndex(1,_this2.getState().highlightedIndex,itemCount,(function(index){return _this2.getItemNodeFromIndex(index)}));_this2.setHighlightedIndex(nextHighlightedIndex,{type:4})}}))},ArrowUp:function ArrowUp(event){var _this3=this;if(event.preventDefault(),this.getState().isOpen){var amount=event.shiftKey?-5:-1;this.moveHighlightedIndex(amount,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var itemCount=_this3.getItemCount();if(itemCount>0){var nextHighlightedIndex=getNextWrappingIndex(-1,_this3.getState().highlightedIndex,itemCount,(function(index){return _this3.getItemNodeFromIndex(index)}));_this3.setHighlightedIndex(nextHighlightedIndex,{type:3})}}))},Enter:function Enter(event){if(229!==event.which){var _this$getState2=this.getState(),isOpen=_this$getState2.isOpen,highlightedIndex=_this$getState2.highlightedIndex;if(isOpen&&null!=highlightedIndex){event.preventDefault();var item=this.items[highlightedIndex],itemNode=this.getItemNodeFromIndex(highlightedIndex);if(null==item||itemNode&&itemNode.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}}},Escape:function Escape(event){event.preventDefault(),this.reset((0,esm_extends.Z)({type:5},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},_this.buttonKeyDownHandlers=(0,esm_extends.Z)({},_this.keyDownHandlers,{" ":function _(event){event.preventDefault(),this.toggleMenu({type:12})}}),_this.inputKeyDownHandlers=(0,esm_extends.Z)({},_this.keyDownHandlers,{Home:function Home(event){var _this4=this,isOpen=this.getState().isOpen;if(isOpen){event.preventDefault();var itemCount=this.getItemCount();if(!(itemCount<=0)&&isOpen){var newHighlightedIndex=getNextNonDisabledIndex(1,0,itemCount,(function(index){return _this4.getItemNodeFromIndex(index)}),!1);this.setHighlightedIndex(newHighlightedIndex,{type:7})}}},End:function End(event){var _this5=this,isOpen=this.getState().isOpen;if(isOpen){event.preventDefault();var itemCount=this.getItemCount();if(!(itemCount<=0)&&isOpen){var newHighlightedIndex=getNextNonDisabledIndex(-1,itemCount-1,itemCount,(function(index){return _this5.getItemNodeFromIndex(index)}),!1);this.setHighlightedIndex(newHighlightedIndex,{type:8})}}}}),_this.getToggleButtonProps=function(_temp3){var _ref3=void 0===_temp3?{}:_temp3,onClick=_ref3.onClick;_ref3.onPress;var onKeyDown=_ref3.onKeyDown,onKeyUp=_ref3.onKeyUp,onBlur=_ref3.onBlur,rest=(0,objectWithoutPropertiesLoose.Z)(_ref3,_excluded2$3),isOpen=_this.getState().isOpen,enabledEventHandlers={onClick:callAllEventHandlers(onClick,_this.buttonHandleClick),onKeyDown:callAllEventHandlers(onKeyDown,_this.buttonHandleKeyDown),onKeyUp:callAllEventHandlers(onKeyUp,_this.buttonHandleKeyUp),onBlur:callAllEventHandlers(onBlur,_this.buttonHandleBlur)},eventHandlers=rest.disabled?{}:enabledEventHandlers;return(0,esm_extends.Z)({type:"button",role:"button","aria-label":isOpen?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},eventHandlers,rest)},_this.buttonHandleKeyUp=function(event){event.preventDefault()},_this.buttonHandleKeyDown=function(event){var key=normalizeArrowKey(event);_this.buttonKeyDownHandlers[key]&&_this.buttonKeyDownHandlers[key].call((0,assertThisInitialized.Z)(_this),event)},_this.buttonHandleClick=function(event){event.preventDefault(),_this.props.environment.document.activeElement===_this.props.environment.document.body&&event.target.focus(),_this.internalSetTimeout((function(){return _this.toggleMenu({type:13})}))},_this.buttonHandleBlur=function(event){var blurTarget=event.target;_this.internalSetTimeout((function(){_this.isMouseDown||null!=_this.props.environment.document.activeElement&&_this.props.environment.document.activeElement.id===_this.inputId||_this.props.environment.document.activeElement===blurTarget||_this.reset({type:14})}))},_this.getLabelProps=function(props){return(0,esm_extends.Z)({htmlFor:_this.inputId,id:_this.labelId},props)},_this.getInputProps=function(_temp4){var _ref4=void 0===_temp4?{}:_temp4,onKeyDown=_ref4.onKeyDown,onBlur=_ref4.onBlur,onChange=_ref4.onChange,onInput=_ref4.onInput;_ref4.onChangeText;var rest=(0,objectWithoutPropertiesLoose.Z)(_ref4,_excluded3$2),eventHandlers={};var _eventHandlers,_this$getState6=_this.getState(),inputValue=_this$getState6.inputValue,isOpen=_this$getState6.isOpen,highlightedIndex=_this$getState6.highlightedIndex;rest.disabled||((_eventHandlers={}).onChange=callAllEventHandlers(onChange,onInput,_this.inputHandleChange),_eventHandlers.onKeyDown=callAllEventHandlers(onKeyDown,_this.inputHandleKeyDown),_eventHandlers.onBlur=callAllEventHandlers(onBlur,_this.inputHandleBlur),eventHandlers=_eventHandlers);return(0,esm_extends.Z)({"aria-autocomplete":"list","aria-activedescendant":isOpen&&"number"==typeof highlightedIndex&&highlightedIndex>=0?_this.getItemId(highlightedIndex):null,"aria-controls":isOpen?_this.menuId:null,"aria-labelledby":rest&&rest["aria-label"]?void 0:_this.labelId,autoComplete:"off",value:inputValue,id:_this.inputId},eventHandlers,rest)},_this.inputHandleKeyDown=function(event){var key=normalizeArrowKey(event);key&&_this.inputKeyDownHandlers[key]&&_this.inputKeyDownHandlers[key].call((0,assertThisInitialized.Z)(_this),event)},_this.inputHandleChange=function(event){_this.internalSetState({type:11,isOpen:!0,inputValue:event.target.value,highlightedIndex:_this.props.defaultHighlightedIndex})},_this.inputHandleBlur=function(){_this.internalSetTimeout((function(){var downshiftButtonIsActive=_this.props.environment.document&&!!_this.props.environment.document.activeElement&&!!_this.props.environment.document.activeElement.dataset&&_this.props.environment.document.activeElement.dataset.toggle&&_this._rootNode&&_this._rootNode.contains(_this.props.environment.document.activeElement);_this.isMouseDown||downshiftButtonIsActive||_this.reset({type:10})}))},_this.menuRef=function(node){_this._menuNode=node},_this.getMenuProps=function(_temp5,_temp6){var _extends3,_ref5=void 0===_temp5?{}:_temp5,_ref5$refKey=_ref5.refKey,refKey=void 0===_ref5$refKey?"ref":_ref5$refKey,ref=_ref5.ref,props=(0,objectWithoutPropertiesLoose.Z)(_ref5,_excluded4$1),_ref6$suppressRefErro=(void 0===_temp6?{}:_temp6).suppressRefError,suppressRefError=void 0!==_ref6$suppressRefErro&&_ref6$suppressRefErro;return _this.getMenuProps.called=!0,_this.getMenuProps.refKey=refKey,_this.getMenuProps.suppressRefError=suppressRefError,(0,esm_extends.Z)(((_extends3={})[refKey]=handleRefs(ref,_this.menuRef),_extends3.role="listbox",_extends3["aria-labelledby"]=props&&props["aria-label"]?null:_this.labelId,_extends3.id=_this.menuId,_extends3),props)},_this.getItemProps=function(_temp7){var _enabledEventHandlers,_ref7=void 0===_temp7?{}:_temp7,onMouseMove=_ref7.onMouseMove,onMouseDown=_ref7.onMouseDown,onClick=_ref7.onClick;_ref7.onPress;var index=_ref7.index,_ref7$item=_ref7.item,item=void 0===_ref7$item?void 0:_ref7$item,rest=(0,objectWithoutPropertiesLoose.Z)(_ref7,_excluded5);void 0===index?(_this.items.push(item),index=_this.items.indexOf(item)):_this.items[index]=item;var customClickHandler=onClick,enabledEventHandlers=((_enabledEventHandlers={onMouseMove:callAllEventHandlers(onMouseMove,(function(){index!==_this.getState().highlightedIndex&&(_this.setHighlightedIndex(index,{type:2}),_this.avoidScrolling=!0,_this.internalSetTimeout((function(){return _this.avoidScrolling=!1}),250))})),onMouseDown:callAllEventHandlers(onMouseDown,(function(event){event.preventDefault()}))}).onClick=callAllEventHandlers(customClickHandler,(function(){_this.selectItemAtIndex(index,{type:9})})),_enabledEventHandlers),eventHandlers=rest.disabled?{onMouseDown:enabledEventHandlers.onMouseDown}:enabledEventHandlers;return(0,esm_extends.Z)({id:_this.getItemId(index),role:"option","aria-selected":_this.getState().highlightedIndex===index},eventHandlers,rest)},_this.clearItems=function(){_this.items=[]},_this.reset=function(otherStateToSet,cb){void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((function(_ref8){var selectedItem=_ref8.selectedItem;return(0,esm_extends.Z)({isOpen:_this.props.defaultIsOpen,highlightedIndex:_this.props.defaultHighlightedIndex,inputValue:_this.props.itemToString(selectedItem)},otherStateToSet)}),cb)},_this.toggleMenu=function(otherStateToSet,cb){void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((function(_ref9){var isOpen=_ref9.isOpen;return(0,esm_extends.Z)({isOpen:!isOpen},isOpen&&{highlightedIndex:_this.props.defaultHighlightedIndex},otherStateToSet)}),(function(){var _this$getState7=_this.getState(),isOpen=_this$getState7.isOpen,highlightedIndex=_this$getState7.highlightedIndex;isOpen&&_this.getItemCount()>0&&"number"==typeof highlightedIndex&&_this.setHighlightedIndex(highlightedIndex,otherStateToSet),cbToCb(cb)()}))},_this.openMenu=function(cb){_this.internalSetState({isOpen:!0},cb)},_this.closeMenu=function(cb){_this.internalSetState({isOpen:!1},cb)},_this.updateStatus=debounce((function(){var state=_this.getState(),item=_this.items[state.highlightedIndex],resultCount=_this.getItemCount(),status=_this.props.getA11yStatusMessage((0,esm_extends.Z)({itemToString:_this.props.itemToString,previousResultCount:_this.previousResultCount,resultCount,highlightedItem:item},state));_this.previousResultCount=resultCount,setStatus(status,_this.props.environment.document)}),200);var _this$props=_this.props,defaultHighlightedIndex=_this$props.defaultHighlightedIndex,_this$props$initialHi=_this$props.initialHighlightedIndex,_highlightedIndex=void 0===_this$props$initialHi?defaultHighlightedIndex:_this$props$initialHi,defaultIsOpen=_this$props.defaultIsOpen,_this$props$initialIs=_this$props.initialIsOpen,_isOpen=void 0===_this$props$initialIs?defaultIsOpen:_this$props$initialIs,_this$props$initialIn=_this$props.initialInputValue,_inputValue=void 0===_this$props$initialIn?"":_this$props$initialIn,_this$props$initialSe=_this$props.initialSelectedItem,_selectedItem=void 0===_this$props$initialSe?null:_this$props$initialSe,_state=_this.getState({highlightedIndex:_highlightedIndex,isOpen:_isOpen,inputValue:_inputValue,selectedItem:_selectedItem});return null!=_state.selectedItem&&void 0===_this.props.initialInputValue&&(_state.inputValue=_this.props.itemToString(_state.selectedItem)),_this.state=_state,_this}(0,inheritsLoose.Z)(Downshift,_Component);var _proto=Downshift.prototype;return _proto.internalClearTimeouts=function internalClearTimeouts(){this.timeoutIds.forEach((function(id){clearTimeout(id)})),this.timeoutIds=[]},_proto.getState=function getState$1(stateToMerge){return void 0===stateToMerge&&(stateToMerge=this.state),getState(stateToMerge,this.props)},_proto.getItemCount=function getItemCount(){var itemCount=this.items.length;return null!=this.itemCount?itemCount=this.itemCount:void 0!==this.props.itemCount&&(itemCount=this.props.itemCount),itemCount},_proto.getItemNodeFromIndex=function getItemNodeFromIndex(index){return this.props.environment.document.getElementById(this.getItemId(index))},_proto.scrollHighlightedItemIntoView=function scrollHighlightedItemIntoView(){var node=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(node,this._menuNode)},_proto.moveHighlightedIndex=function moveHighlightedIndex(amount,otherStateToSet){var _this6=this,itemCount=this.getItemCount(),highlightedIndex=this.getState().highlightedIndex;if(itemCount>0){var nextHighlightedIndex=getNextWrappingIndex(amount,highlightedIndex,itemCount,(function(index){return _this6.getItemNodeFromIndex(index)}));this.setHighlightedIndex(nextHighlightedIndex,otherStateToSet)}},_proto.getStateAndHelpers=function getStateAndHelpers(){var _this$getState9=this.getState(),highlightedIndex=_this$getState9.highlightedIndex,inputValue=_this$getState9.inputValue,selectedItem=_this$getState9.selectedItem,isOpen=_this$getState9.isOpen,itemToString=this.props.itemToString,id=this.id,getRootProps=this.getRootProps,getToggleButtonProps=this.getToggleButtonProps,getLabelProps=this.getLabelProps,getMenuProps=this.getMenuProps,getInputProps=this.getInputProps,getItemProps=this.getItemProps,openMenu=this.openMenu,closeMenu=this.closeMenu,toggleMenu=this.toggleMenu,selectItem=this.selectItem,selectItemAtIndex=this.selectItemAtIndex,selectHighlightedItem=this.selectHighlightedItem,setHighlightedIndex=this.setHighlightedIndex,clearSelection=this.clearSelection,clearItems=this.clearItems;return{getRootProps,getToggleButtonProps,getLabelProps,getMenuProps,getInputProps,getItemProps,reset:this.reset,openMenu,closeMenu,toggleMenu,selectItem,selectItemAtIndex,selectHighlightedItem,setHighlightedIndex,clearSelection,clearItems,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString,id,highlightedIndex,inputValue,isOpen,selectedItem}},_proto.componentDidMount=function componentDidMount(){var _this7=this;var onMouseDown=function onMouseDown(){_this7.isMouseDown=!0},onMouseUp=function onMouseUp(event){_this7.isMouseDown=!1,!targetWithinDownshift(event.target,[_this7._rootNode,_this7._menuNode],_this7.props.environment)&&_this7.getState().isOpen&&_this7.reset({type:1},(function(){return _this7.props.onOuterClick(_this7.getStateAndHelpers())}))},onTouchStart=function onTouchStart(){_this7.isTouchMove=!1},onTouchMove=function onTouchMove(){_this7.isTouchMove=!0},onTouchEnd=function onTouchEnd(event){var contextWithinDownshift=targetWithinDownshift(event.target,[_this7._rootNode,_this7._menuNode],_this7.props.environment,!1);_this7.isTouchMove||contextWithinDownshift||!_this7.getState().isOpen||_this7.reset({type:16},(function(){return _this7.props.onOuterClick(_this7.getStateAndHelpers())}))},environment=this.props.environment;environment.addEventListener("mousedown",onMouseDown),environment.addEventListener("mouseup",onMouseUp),environment.addEventListener("touchstart",onTouchStart),environment.addEventListener("touchmove",onTouchMove),environment.addEventListener("touchend",onTouchEnd),this.cleanup=function(){_this7.internalClearTimeouts(),_this7.updateStatus.cancel(),environment.removeEventListener("mousedown",onMouseDown),environment.removeEventListener("mouseup",onMouseUp),environment.removeEventListener("touchstart",onTouchStart),environment.removeEventListener("touchmove",onTouchMove),environment.removeEventListener("touchend",onTouchEnd)}},_proto.shouldScroll=function shouldScroll(prevState,prevProps){var currentHighlightedIndex=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,prevHighlightedIndex=(void 0===prevProps.highlightedIndex?prevState:prevProps).highlightedIndex;return currentHighlightedIndex&&this.getState().isOpen&&!prevState.isOpen||currentHighlightedIndex!==prevHighlightedIndex},_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){isControlledProp(this.props,"selectedItem")&&this.props.selectedItemChanged(prevProps.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(prevState,prevProps)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},_proto.componentWillUnmount=function componentWillUnmount(){this.cleanup()},_proto.render=function render(){var children=unwrapArray(this.props.children,noop);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var element=unwrapArray(children(this.getStateAndHelpers()));return element?this.getRootProps.called||this.props.suppressRefError?element:isDOMElement(element)?(0,react.cloneElement)(element,this.getRootProps(getElementProps(element))):void 0:null},Downshift}(react.Component);return Downshift.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:getA11yStatusMessage$1,itemToString:function itemToString(i){return null==i?"":String(i)},onStateChange:noop,onInputValueChange:noop,onUserAction:noop,onChange:noop,onSelect:noop,onOuterClick:noop,selectedItemChanged:function selectedItemChanged(prevItem,item){return prevItem!==item},environment:"undefined"==typeof window?{}:window,stateReducer:function stateReducer(state,stateToSet){return stateToSet},suppressRefError:!1,scrollIntoView},Downshift.stateChangeTypes=stateChangeTypes$3,Downshift}(),Downshift$1=Downshift;debounce((function(getA11yMessage,document){setStatus(getA11yMessage(),document)}),200),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?react.useLayoutEffect:react.useEffect;var defaultProps$3={itemToString:function itemToString(item){return item?String(item):""},stateReducer:function stateReducer(s,a){return a.changes},getA11ySelectionMessage:function getA11ySelectionMessage(selectionParameters){var selectedItem=selectionParameters.selectedItem,itemToStringLocal=selectionParameters.itemToString;return selectedItem?itemToStringLocal(selectedItem)+" has been selected.":""},scrollIntoView,environment:"undefined"==typeof window?{}:window};prop_types_default().array.isRequired,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().bool,prop_types_default().bool,prop_types_default().bool,prop_types_default().any,prop_types_default().any,prop_types_default().any,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().string,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})});__assign(__assign({},defaultProps$3),{getA11yStatusMessage:function getA11yStatusMessage(_a){var isOpen=_a.isOpen,resultCount=_a.resultCount,previousResultCount=_a.previousResultCount;return isOpen?resultCount?resultCount!==previousResultCount?"".concat(resultCount," result").concat(1===resultCount?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}});prop_types_default().array.isRequired,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().bool,prop_types_default().bool,prop_types_default().bool,prop_types_default().any,prop_types_default().any,prop_types_default().any,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})});(0,esm_extends.Z)({},defaultProps$3,{selectedItemChanged:function selectedItemChanged(prevItem,item){return prevItem!==item},getA11yStatusMessage:getA11yStatusMessage$1});prop_types_default().array,prop_types_default().array,prop_types_default().array,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().func,prop_types_default().func,prop_types_default().string,prop_types_default().string,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})})},"./node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}},"./node_modules/downshift/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/relative-luminance/dist/index.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=.2126,t=.7152,n=.0722,u=1/12.92;function a(r){return Math.pow((r+.055)/1.055,2.4)}function __WEBPACK_DEFAULT_EXPORT__(e){var o=e[0]/255,f=e[1]/255,c=e[2]/255,i=o<=.03928?o*u:a(o),p=f<=.03928?f*u:a(f),v=c<=.03928?c*u:a(c);return i*r+p*t+v*n}}}]);