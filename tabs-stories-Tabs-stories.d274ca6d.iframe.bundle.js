"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[3402],{"./packages/tabs/stories/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/tabs/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Tabs",component:_index__WEBPACK_IMPORTED_MODULE_1__.mQ,subcomponents:{Tabs:_index__WEBPACK_IMPORTED_MODULE_1__.mQ,TabTitle:_index__WEBPACK_IMPORTED_MODULE_1__.J$,TabItem:_index__WEBPACK_IMPORTED_MODULE_1__.E2},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:"400px"}},Story())],argTypes:{direction:{options:["horiz","vert"],control:{type:"radio"}},onSelect:{table:{disable:!0}},selectedIndex:{table:{disable:!0}}}},Template=({direction,...args})=>{const[selectedIndex,setSelectedIndex]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.mQ,_extends({selectedIndex,onSelect:setSelectedIndex,direction},args),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.E2,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.J$,null,"Tab 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Tab content - Section 1."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Tab content - Section 2.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.E2,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.J$,null,"Tab 2"),"Tab content."))},Default={render:Template,args:{direction:"horiz"}},Responsive={render:Template,args:{direction:{medium:"vert"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    direction: "horiz"\n  }\n}',...Default.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    direction: {\n      medium: "vert"\n    }\n  }\n}',...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Responsive"]},"./packages/tabs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E2:()=>components_TabItem,J$:()=>esm.OK,mQ:()=>components_Tabs});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/react-tabs/esm/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts"),modifierUtils=__webpack_require__("./packages/shared/styles/styleUtils/modifiers/modifierUtils.ts"),breakpoints=__webpack_require__("./packages/shared/styles/breakpoints.ts");const spacingSizeConfig_inset="l",spacingSizeConfig_tabPanel="xl",spacingSizeConfig_betweenTabs="l",spacingSizeConfig_withinTab="s",unsetHorizBorder=emotion_css_esm.iv`
  border-bottom: 0;
`,unsetVertBorder=emotion_css_esm.iv`
  border-right: 0;
`,unsetHorizSelectedUnderline=emotion_css_esm.iv`
  height: auto;
  left: auto;
`,unsetVertSelectedUnderline=emotion_css_esm.iv`
  top: auto;
  width: auto;
`,horizTabs=emotion_css_esm.iv`
  display: flex;
  flex-direction: column;

  .react-tabs__tab-list {
    ${unsetVertBorder};
    ${(0,styleUtils.Cg)("bottom")};
    padding: 0 ${modifierUtils.u[spacingSizeConfig_inset]};
  }

  .react-tabs__tab {
    display: inline-block;
    padding: ${modifierUtils.u[spacingSizeConfig_withinTab]} 0;
    margin: 0 ${modifierUtils.u[spacingSizeConfig_betweenTabs]} 0 0;

    &:after {
      ${unsetVertSelectedUnderline};
      height: 2px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .react-tabs__tab-panel {
    margin: ${modifierUtils.u[spacingSizeConfig_tabPanel]}
      ${modifierUtils.u[spacingSizeConfig_inset]};
  }
`,vertTabs=emotion_css_esm.iv`
  display: flex;
  flex-direction: row;

  .react-tabs__tab-list {
    ${unsetHorizBorder};
    ${(0,styleUtils.Cg)("right")};
    padding: ${modifierUtils.u[spacingSizeConfig_inset]} 0;
  }

  .react-tabs__tab {
    display: block;
    padding: 0 ${modifierUtils.u[spacingSizeConfig_withinTab]};
    margin: 0 0 ${modifierUtils.u[spacingSizeConfig_betweenTabs]} 0;

    &:after {
      ${unsetHorizSelectedUnderline};
      width: 2px;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  .react-tabs__tab-panel {
    margin: ${modifierUtils.u[spacingSizeConfig_inset]}
      ${modifierUtils.u[spacingSizeConfig_tabPanel]};
  }
`,fullHeightTabs=emotion_css_esm.iv`
  display: flex;
  flex-direction: column;
  height: 100%;
`,getTabLayout=direction=>{const getHorizOrVertStyle=direction=>"vert"===direction?vertTabs:horizTabs;return"object"==typeof direction?(0,emotion_css_esm.cx)(Object.keys({default:defaultTabDirection,...direction}).reduce(((acc,breakpoint)=>(acc.push(emotion_css_esm.iv`
                ${breakpoints.K[breakpoint](emotion_css_esm.iv`
                  ${getHorizOrVertStyle(direction[breakpoint])};
                `)};
              `),acc)),[])):getHorizOrVertStyle(direction)},defaultTabDirection="horiz";emotion_css_esm.hi`
.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  ${styleUtils.$n};
}

.react-tabs__tab {
  position: relative;
  cursor: pointer;
  font-weight: ${designTokens.fontWeightMedium};
  color: ${designTokens.themeTextColorPrimary};

  &:after{
    content: "";
    position: absolute;
    background: ${designTokens.themeBrandPrimary};
    display: none;
  }
}

/* Focusing on tabs with a mouse will not display an outline */
.react-tabs__tab:focus:not(:focus-visible)   {
  outline: 0;
}

/* Focusing tabs with a keyboard will add a light gray background color */
.react-tabs__tab:focus-visible {
  outline: 0;
  background-color: ${designTokens.themeBgHover}
}

.react-tabs__tab--selected {
  &:after{
    display: block;
  }
  color: ${designTokens.themeBrandPrimary};
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab-panel {
  display: none;
  flex-grow: 1;
}

.react-tabs__tab-panel--selected {
  display: block;
}
`;const Tabs=({children,selectedIndex,onSelect,className,direction=defaultTabDirection,"data-cy":dataCy="tabs"})=>{const{tabs,tabsContent}=react.Children.toArray(children).filter((item=>react.isValidElement(item))).reduce(((acc,item)=>{const{tabs=[],tabsContent=[]}=acc,{children}=item.props,key=item.key?item.key:void 0,childrenWithKeys=react.Children.toArray(children).map(((child,index)=>react.isValidElement(child)?react.cloneElement(child,{key:`${key}-${index}`}):child)),title=childrenWithKeys.find((child=>react.isValidElement(child)&&child.type===esm.OK)),tabChildren=childrenWithKeys.filter((child=>!(react.isValidElement(child)&&child.type===esm.OK)));return{tabs:[...tabs,title],tabsContent:[...tabsContent,...tabChildren.length?[react.createElement(esm.x4,{key},tabChildren)]:[]]}}),{tabs:[],tabsContent:[]});return react.createElement(esm.mQ,{className:(0,emotion_css_esm.cx)("react-tabs",{[fullHeightTabs]:Boolean(tabsContent.length),[getTabLayout(direction)]:Boolean(direction)},className),selectedIndex,onSelect:onSelect||(()=>{}),"data-cy":dataCy,focusTabOnClick:!1},react.createElement(esm.td,null,tabs),tabsContent)},components_Tabs=react.memo(Tabs);try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"Children should use the TabItem component",name:"children",required:!0,type:{name:"ReactElement<TabItemProps, string | JSXElementConstructor<any>> | ReactElement<TabItemProps, string | JSXElementConstructor<any>>[]"}},selectedIndex:{defaultValue:null,description:"The index number of the selected tab",name:"selectedIndex",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"The function called when tab items are selected",name:"onSelect",required:!1,type:{name:"((tabIndex: number) => void)"}},direction:{defaultValue:{value:"horiz"},description:"Controls the orientation",name:"direction",required:!1,type:{name:"TabDirection"}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/components/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"packages/tabs/components/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const TabItem=({children})=>react.createElement(react.Fragment,null,children),components_TabItem=react.memo(TabItem);try{TabItem.displayName="TabItem",TabItem.__docgenInfo={description:"",displayName:"TabItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tabs/components/TabItem.tsx#TabItem"]={docgenInfo:TabItem.__docgenInfo,name:"TabItem",path:"packages/tabs/components/TabItem.tsx#TabItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-tabs/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OK:()=>components_Tab,td:()=>components_TabList,x4:()=>components_TabPanel,mQ:()=>components_Tabs});var react=__webpack_require__("./node_modules/react/index.js");function makeTypeChecker(tabsRole){return element=>!!element.type&&element.type.tabsRole===tabsRole}const elementTypes_isTab=makeTypeChecker("Tab"),elementTypes_isTabList=makeTypeChecker("TabList"),elementTypes_isTabPanel=makeTypeChecker("TabPanel");function deepMap(children,callback){return react.Children.map(children,(child=>null===child?null:function isTabChild(child){return elementTypes_isTab(child)||elementTypes_isTabList(child)||elementTypes_isTabPanel(child)}(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children?(0,react.cloneElement)(child,{...child.props,children:deepMap(child.props.children,callback)}):child))}function childrenDeepMap_deepForEach(children,callback){return react.Children.forEach(children,(child=>{null!==child&&(elementTypes_isTab(child)||elementTypes_isTabPanel(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children&&(elementTypes_isTabList(child)&&callback(child),childrenDeepMap_deepForEach(child.props.children,callback)))}))}function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function clsx_m(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}function count_getTabsCount(children){let tabCount=0;return childrenDeepMap_deepForEach(children,(child=>{elementTypes_isTab(child)&&tabCount++})),tabCount}function isNode(node){return node&&"getAttribute"in node}function isTabNode(node){return isNode(node)&&node.getAttribute("data-rttab")}function isTabDisabled(node){return isNode(node)&&"true"===node.getAttribute("aria-disabled")}let canUseActiveElement;const defaultProps={className:"react-tabs",focus:!1},UncontrolledTabs=props=>{let tabNodes=(0,react.useRef)([]),tabIds=(0,react.useRef)([]);const ref=(0,react.useRef)();function setSelected(index,event){if(index<0||index>=getTabsCount())return;const{onSelect,selectedIndex}=props;onSelect(index,selectedIndex,event)}function getNextTab(index){const count=getTabsCount();for(let i=index+1;i<count;i++)if(!isTabDisabled(getTab(i)))return i;for(let i=0;i<index;i++)if(!isTabDisabled(getTab(i)))return i;return index}function getPrevTab(index){let i=index;for(;i--;)if(!isTabDisabled(getTab(i)))return i;for(i=getTabsCount();i-- >index;)if(!isTabDisabled(getTab(i)))return i;return index}function getTabsCount(){const{children}=props;return count_getTabsCount(children)}function getTab(index){return tabNodes.current[`tabs-${index}`]}function handleClick(e){let node=e.target;do{if(isTabFromContainer(node)){if(isTabDisabled(node))return;return void setSelected([].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node),e)}}while(null!=(node=node.parentNode))}function isTabFromContainer(node){if(!isTabNode(node))return!1;let nodeAncestor=node.parentElement;do{if(nodeAncestor===ref.current)return!0;if(nodeAncestor.getAttribute("data-rttabs"))break;nodeAncestor=nodeAncestor.parentElement}while(nodeAncestor);return!1}const{children,className,disabledTabClassName,domRef,focus,forceRenderTabPanel,onSelect,selectedIndex,selectedTabClassName,selectedTabPanelClassName,environment,disableUpDownKeys,disableLeftRightKeys,...attributes}={...defaultProps,...props};return react.createElement("div",Object.assign({},attributes,{className:clsx_m(className),onClick:handleClick,onKeyDown:function handleKeyDown(e){const{direction,disableUpDownKeys,disableLeftRightKeys}=props;if(isTabFromContainer(e.target)){let{selectedIndex:index}=props,preventDefault=!1,useSelectedIndex=!1;"Space"!==e.code&&32!==e.keyCode&&"Enter"!==e.code&&13!==e.keyCode||(preventDefault=!0,useSelectedIndex=!1,handleClick(e)),(disableLeftRightKeys||37!==e.keyCode&&"ArrowLeft"!==e.code)&&(disableUpDownKeys||38!==e.keyCode&&"ArrowUp"!==e.code)?(disableLeftRightKeys||39!==e.keyCode&&"ArrowRight"!==e.code)&&(disableUpDownKeys||40!==e.keyCode&&"ArrowDown"!==e.code)?35===e.keyCode||"End"===e.code?(index=function getLastTab(){let i=getTabsCount();for(;i--;)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):36!==e.keyCode&&"Home"!==e.code||(index=function getFirstTab(){const count=getTabsCount();for(let i=0;i<count;i++)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getPrevTab(index):getNextTab(index),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getNextTab(index):getPrevTab(index),preventDefault=!0,useSelectedIndex=!0),preventDefault&&e.preventDefault(),useSelectedIndex&&setSelected(index,e)}},ref:node=>{ref.current=node,domRef&&domRef(node)},"data-rttabs":!0}),function getChildren(){let index=0;const{children,disabledTabClassName,focus,forceRenderTabPanel,selectedIndex,selectedTabClassName,selectedTabPanelClassName,environment}=props;tabIds.current=tabIds.current||[];let diff=tabIds.current.length-getTabsCount();const id=(0,react.useId)();for(;diff++<0;)tabIds.current.push(`${id}${tabIds.current.length}`);return deepMap(children,(child=>{let result=child;if(elementTypes_isTabList(child)){let listIndex=0,wasTabFocused=!1;null==canUseActiveElement&&function determineCanUseActiveElement(environment){const env=environment||("undefined"!=typeof window?window:void 0);try{canUseActiveElement=!(void 0===env||!env.document||!env.document.activeElement)}catch(e){canUseActiveElement=!1}}(environment);const env=environment||("undefined"!=typeof window?window:void 0);canUseActiveElement&&env&&(wasTabFocused=react.Children.toArray(child.props.children).filter(elementTypes_isTab).some(((tab,i)=>env.document.activeElement===getTab(i)))),result=(0,react.cloneElement)(child,{children:deepMap(child.props.children,(tab=>{const key=`tabs-${listIndex}`,selected=selectedIndex===listIndex,props={tabRef:node=>{tabNodes.current[key]=node},id:tabIds.current[listIndex],selected,focus:selected&&(focus||wasTabFocused)};return selectedTabClassName&&(props.selectedClassName=selectedTabClassName),disabledTabClassName&&(props.disabledClassName=disabledTabClassName),listIndex++,(0,react.cloneElement)(tab,props)}))})}else if(elementTypes_isTabPanel(child)){const props={id:tabIds.current[index],selected:selectedIndex===index};forceRenderTabPanel&&(props.forceRender=forceRenderTabPanel),selectedTabPanelClassName&&(props.selectedClassName=selectedTabPanelClassName),index++,result=(0,react.cloneElement)(child,props)}return result}))}())};UncontrolledTabs.propTypes={};const components_UncontrolledTabs=UncontrolledTabs,Tabs_defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},Tabs=props=>{const{children,defaultFocus,defaultIndex,focusTabOnClick,onSelect,...attributes}={...Tabs_defaultProps,...props},[focus,setFocus]=(0,react.useState)(defaultFocus),[mode]=(0,react.useState)((props=>null===props.selectedIndex?1:0)(attributes)),[selectedIndex,setSelectedIndex]=(0,react.useState)(1===mode?defaultIndex||0:null);if((0,react.useEffect)((()=>{setFocus(!1)}),[]),1===mode){const tabsCount=count_getTabsCount(children);(0,react.useEffect)((()=>{if(null!=selectedIndex){const maxTabIndex=Math.max(0,tabsCount-1);setSelectedIndex(Math.min(selectedIndex,maxTabIndex))}}),[tabsCount])}let subProps={...props,...attributes};return subProps.focus=focus,subProps.onSelect=(index,last,event)=>{"function"==typeof onSelect&&!1===onSelect(index,last,event)||(focusTabOnClick&&setFocus(!0),1===mode&&setSelectedIndex(index))},null!=selectedIndex&&(subProps.selectedIndex=selectedIndex),delete subProps.defaultFocus,delete subProps.defaultIndex,delete subProps.focusTabOnClick,react.createElement(components_UncontrolledTabs,subProps,children)};Tabs.propTypes={},Tabs.tabsRole="Tabs";const components_Tabs=Tabs,TabList_defaultProps={className:"react-tabs__tab-list"},TabList=props=>{const{children,className,...attributes}={...TabList_defaultProps,...props};return react.createElement("ul",Object.assign({},attributes,{className:clsx_m(className),role:"tablist"}),children)};TabList.tabsRole="TabList",TabList.propTypes={};const components_TabList=TabList,Tab_defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},Tab=props=>{let nodeRef=(0,react.useRef)();const{children,className,disabled,disabledClassName,focus,id,selected,selectedClassName,tabIndex,tabRef,...attributes}={...Tab_defaultProps,...props};return(0,react.useEffect)((()=>{selected&&focus&&nodeRef.current.focus()}),[selected,focus]),react.createElement("li",Object.assign({},attributes,{className:clsx_m(className,{[selectedClassName]:selected,[disabledClassName]:disabled}),ref:node=>{nodeRef.current=node,tabRef&&tabRef(node)},role:"tab",id:`tab${id}`,"aria-selected":selected?"true":"false","aria-disabled":disabled?"true":"false","aria-controls":`panel${id}`,tabIndex:tabIndex||(selected?"0":null),"data-rttab":!0}),children)};Tab.propTypes={},Tab.tabsRole="Tab";const components_Tab=Tab,TabPanel_defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},TabPanel=props=>{const{children,className,forceRender,id,selected,selectedClassName,...attributes}={...TabPanel_defaultProps,...props};return react.createElement("div",Object.assign({},attributes,{className:clsx_m(className,{[selectedClassName]:selected}),role:"tabpanel",id:`panel${id}`,"aria-labelledby":`tab${id}`}),forceRender||selected?children:null)};TabPanel.tabsRole="TabPanel",TabPanel.propTypes={};const components_TabPanel=TabPanel}}]);