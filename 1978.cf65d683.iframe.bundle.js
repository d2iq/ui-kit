"use strict";(self.webpackChunk_d2iq_ui_kit=self.webpackChunk_d2iq_ui_kit||[]).push([[1978],{"./packages/shared/styles/styleUtils/resets/linkReset.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>linkReset});const linkReset=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js").iv`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`},"./packages/tablev2/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C0:()=>DropdownMenuCell,c8:()=>EmptyCell,MB:()=>MutedCell,Bp:()=>Sorter,iA:()=>Table,w7:()=>TooltipHeaderCell});var react=__webpack_require__("./node_modules/react/index.js"),DropdownMenu=__webpack_require__("./packages/dropdownMenu/components/DropdownMenu.tsx"),packages_button=__webpack_require__("./packages/button/index.ts"),icon=__webpack_require__("./packages/icon/index.ts"),system_icons_enum=__webpack_require__("./packages/icons/dist/system-icons-enum.ts"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const style=emotion_css_esm.iv`
  display: flex;
  justify-content: flex-end;
`,trigger=react.createElement(packages_button.JK,null,react.createElement(icon.J,{shape:system_icons_enum.i.EllipsisVertical,size:"xs"})),DropdownMenuCell=props=>react.createElement("div",{className:style},react.createElement(DropdownMenu.Z,_extends({trigger},props)));try{DropdownMenuCell.displayName="DropdownMenuCell",DropdownMenuCell.__docgenInfo={description:"",displayName:"DropdownMenuCell",props:{className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Groups of dropdown menu items",name:"children",required:!0,type:{name:"ReactElement<DropdownSectionProps, string | JSXElementConstructor<any>> | ReactElement<DropdownSectionProps, string | JSXElementConstructor<...>>[]"}},onSelect:{defaultValue:null,description:"Callback for when a menu item is clicked",name:"onSelect",required:!1,type:{name:"((selectedItem: string, stateAndHelpers?: ControllerStateAndHelpers<ReactElement<DropdownMenuItemProps, string | JSXElementConstructor<any>>>) => void)"}},preferredDirections:{defaultValue:null,description:"The preferred direction to open the menu in relation to the trigger",name:"preferredDirections",required:!1,type:{name:"Direction[]"}},overlayRoot:{defaultValue:null,description:"Which DOM node the dropdown menu will attach to",name:"overlayRoot",required:!1,type:{name:"HTMLElement"}},disablePortal:{defaultValue:null,description:"Whether the dropdown node should be portalled to document.body, or open in it's parent DOM node",name:"disablePortal",required:!1,type:{name:"boolean"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}},initialIsOpen:{defaultValue:null,description:"Whether the dropdown starts open",name:"initialIsOpen",required:!1,type:{name:"boolean"}},menuMaxHeight:{defaultValue:null,description:"Maximum height the menu can grow to. Can accept any number value and it will add `px` or any valid maxHeight value including vh, ems, or rems.",name:"menuMaxHeight",required:!1,type:{name:"MaxHeight<string | number>"}},menuMaxWidth:{defaultValue:null,description:"Maximum width the menu can grow to. Can accept any number value and it will add `px` or any valid maxWidth value including vw, ems, or rems.",name:"menuMaxWidth",required:!1,type:{name:"MaxWidth<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tablev2/DropdownMenuCell.tsx#DropdownMenuCell"]={docgenInfo:DropdownMenuCell.__docgenInfo,name:"DropdownMenuCell",path:"packages/tablev2/DropdownMenuCell.tsx#DropdownMenuCell"})}catch(__react_docgen_typescript_loader_error){}const EmptyCell=()=>react.createElement(react.Fragment,null,"–");var typography=__webpack_require__("./packages/styleUtils/typography/index.ts"),designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js");const MutedCell=({children})=>react.createElement(typography.xv,{tag:"div",color:designTokens.themeTextColorSecondary,wrap:"truncate"},children);try{MutedCell.displayName="MutedCell",MutedCell.__docgenInfo={description:"",displayName:"MutedCell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tablev2/MutedCell.tsx#MutedCell"]={docgenInfo:MutedCell.__docgenInfo,name:"MutedCell",path:"packages/tablev2/MutedCell.tsx#MutedCell"})}catch(__react_docgen_typescript_loader_error){}var styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts"),iconSizes=__webpack_require__("./packages/shared/styles/styleUtils/layout/iconSizes.ts"),modifierUtils=__webpack_require__("./packages/shared/styles/styleUtils/modifiers/modifierUtils.ts"),linkReset=__webpack_require__("./packages/shared/styles/styleUtils/resets/linkReset.ts");const RESIZE_ICON_SIZE_WITH_UNIT=iconSizes._.xxs,table=emotion_css_esm.iv`
  display: grid;
  grid-auto-rows: max-content;
  position: relative;
  overflow: auto;
  z-index: ${designTokens.zIndexContent};
`,rowWithStickyColumn=emotion_css_esm.iv`
  > [role="gridcell"],
  > [role="columnheader"] {
    &:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
    }
  }
`,headerRow=emotion_css_esm.iv`
  ${(0,styleUtils.Cg)("vert","heavy")};
  position: sticky;
  top: 0;
  z-index: 2;
`,highlightedRow=emotion_css_esm.iv`
  &,
  & > [role="gridcell"] {
    background-color: ${designTokens.themeBgHover};
  }
`,contentRow=emotion_css_esm.iv`
  &:hover {
    ${highlightedRow};
  }
`,sortable=dir=>emotion_css_esm.iv`
  position: relative;

  &:after {
    content: "";
    display: ${dir?"inline-block":"none"};
    line-height: 0;
    margin-left: ${4}px;
    margin-right: -${12}px;
    vertical-align: middle;
    ${(0,styleUtils.CD)("desc"===dir?"top":"bottom",4,"currentColor")};
  }
`,headerHover=emotion_css_esm.iv`
  &:hover {
    .sortIcon {
      :after {
        display: inline-block;
      }
    }
  }
`,sortableButton=emotion_css_esm.iv`
  max-width: 100%;
`,nowrap=emotion_css_esm.iv`
  white-space: nowrap;
`,cell=textAlign=>emotion_css_esm.iv`
  ${(0,styleUtils.o3)("all","xs")};
  text-overflow: ellipsis;
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
  background-color: ${designTokens.themeBgPrimary};
  min-width: 0;
  padding-right: calc(
    ${modifierUtils.u.xs} + ${RESIZE_ICON_SIZE_WITH_UNIT}
  );
  position: relative;
  text-align: ${textAlign};

  > &:first-child {
    transition: box-shadow 200ms ease-out;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    a {
      ${linkReset.P};
      ${(0,styleUtils.L6)("medium")};
    }
  }
`,makeSpaceForSortIndicator=emotion_css_esm.iv`
  padding-right: calc(
    ${modifierUtils.u.xs} + ${RESIZE_ICON_SIZE_WITH_UNIT} +
      ${12}px
  );
`,headerCell=textAlign=>emotion_css_esm.iv`
  ${cell(textAlign)};
  ${(0,styleUtils.L6)("medium")};
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;
  text-overflow: ellipsis;
  white-space: nowrap;
  --draggable-opacity: 0;
  &:hover {
    --draggable-opacity: 1;
  }
  &:active ~ * {
    user-select: none;
  }
`,rowScrollShadow=emotion_css_esm.iv`
  &:first-child {
    box-shadow:
      4px 0px 6px 0 rgba(0, 0, 0, 0.12),
      2px 0px 2px 0 rgba(0, 0, 0, 0.06);
    clip-path: polygon(120% 0%, 0% 0%, 0% 100%, 120% 100%);
  }
`,cellFlexWrapper=emotion_css_esm.iv`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  line-height: normal;
`,tableScrollObserver=emotion_css_esm.iv`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
`;var layout=__webpack_require__("./packages/styleUtils/layout/index.ts"),tooltip=__webpack_require__("./packages/tooltip/index.ts");const iconAlign=emotion_css_esm.iv`
  margin-bottom: 1px;
`,TooltipHeaderCell=({children,tooltipIcon,tooltipContent})=>{const generatedId=`colTooltip-${react.useId()}`;return react.createElement(layout.kC,{gutterSize:"xxs",className:cellFlexWrapper},react.createElement("div",{className:styleUtils.Th},children),react.createElement(layout.B5,{flex:"shrink"},react.createElement(tooltip.u,{id:`${generatedId}-tooltip`,trigger:react.createElement("div",{className:iconAlign},react.createElement(tooltip.n,{shape:tooltipIcon}))},tooltipContent)))};try{TooltipHeaderCell.displayName="TooltipHeaderCell",TooltipHeaderCell.__docgenInfo={description:"",displayName:"TooltipHeaderCell",props:{tooltipContent:{defaultValue:null,description:"Helper content that explains the content in the column.",name:"tooltipContent",required:!1,type:{name:"ReactNode"}},tooltipIcon:{defaultValue:null,description:"Icon to display for the tooltip.",name:"tooltipIcon",required:!1,type:{name:"enum",value:[{value:'"system-circle-information"'},{value:'"system-circle-question"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tablev2/TooltipHeaderCell.tsx#TooltipHeaderCell"]={docgenInfo:TooltipHeaderCell.__docgenInfo,name:"TooltipHeaderCell",path:"packages/tablev2/TooltipHeaderCell.tsx#TooltipHeaderCell"})}catch(__react_docgen_typescript_loader_error){}let initialX=0;const className=emotion_css_esm.iv`
  padding: 0 0.25em;
  cursor: col-resize;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${designTokens.themeBgPrimary};
  opacity: var(--draggable-opacity);
  &:hover {
    background-color: ${designTokens.themeBgHover};
  }
`,Draggable=props=>{const[x,setX]=react.useState(0),updateMousePosition=e=>{setX(e.clientX-initialX)},onMouseUp=e=>{props.onRelativeXChange(e.clientX-initialX),setX(0),document.removeEventListener("mousemove",updateMousePosition),document.removeEventListener("mouseup",onMouseUp)};return react.createElement("div",{onMouseDown:e=>{initialX=e.clientX,document.addEventListener("mousemove",updateMousePosition),document.addEventListener("mouseup",onMouseUp)},className,style:{transform:`translate(${x}px, 0)`},role:"button"},react.createElement("div",null,react.createElement(icon.J,{shape:system_icons_enum.i.ResizeHorizontal,size:"xxs",color:designTokens.textColorSecondary})))},Sorter={string:prop=>(_,dir)=>(a,b)=>null==a[prop]?1:null==b[prop]?-1:dir*(a[prop]||"").localeCompare(b[prop]||""),number:prop=>(_,dir)=>(a,b)=>null==a[prop]?1:null==b[prop]?-1:dir*((a[prop]||0)-(b[prop]||0))};try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"The draggable small handler used to size table columns.",displayName:"Draggable",props:{onRelativeXChange:{defaultValue:null,description:"",name:"onRelativeXChange",required:!0,type:{name:"(i: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tablev2/Util.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"packages/tablev2/Util.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}const useIntersect=({root,rootMargin,threshold=0})=>{const[entry,updateEntry]=react.useState(),node=react.useRef(null),observer=react.useRef(new window.IntersectionObserver((([entry])=>updateEntry(entry)),{root,rootMargin,threshold}));return react.useEffect((()=>{const{current:currentObserver}=observer;return currentObserver.disconnect(),node&&node.current&&currentObserver.observe(node.current),()=>currentObserver.disconnect()}),[node]),[node,entry]};function Table_extends(){return Table_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Table_extends.apply(this,arguments)}const rowClassName=(columns,stickyFirstCol)=>{return(0,emotion_css_esm.cx)((gridTemplateFragments=columns.map((c=>c.width)),emotion_css_esm.iv`
  ${(0,styleUtils.Cg)("bottom")};
  display: grid;
  grid-template-columns: ${gridTemplateFragments.join(" ")};
`),{[rowWithStickyColumn]:stickyFirstCol});var gridTemplateFragments},ariaSortStringMap={asc:"ascending",desc:"descending"};function HeaderCell({column,id,update,state,showScrollShadow}){const generatedId=`headerCell-${react.useId()}`,headerCellId=id||generatedId,cell=react.useRef(null),[width,setWidth]=react.useState(0);react.useEffect((()=>setWidth(cell.current?.clientWidth??0)));const order=state.sortBy===headerCellId?state.order:null,onClick=column.sorter&&(()=>update({sortBy:headerCellId,order:"asc"===order?"desc":"asc"})),header=column.sorter?react.createElement(packages_button.JK,{onClick,"data-cy":`table-headercell-${headerCellId}-button`,className:sortableButton},column.header,Boolean(column.sorter)&&react.createElement("span",{"data-cy":"sortIcon",className:(0,emotion_css_esm.cx)(sortable(order),"sortIcon")})):column.header;return react.createElement("div",{className:(0,emotion_css_esm.cx)(headerCell(column.textAlign),{[makeSpaceForSortIndicator]:Boolean(column.sorter),[headerHover]:Boolean(column.sorter),[rowScrollShadow]:showScrollShadow}),id,ref:cell,role:"columnheader","aria-sort":order?ariaSortStringMap[order]:"none"},header,react.createElement(Draggable,{onRelativeXChange:change=>{const newWidth=Math.max(width+change,50);state.columns.find((c=>c.id===id)).width=`${newWidth}px`,update({columns:state.columns.slice(0)})}}))}function HeaderRow({columns,state,stickyFirstCol=!0,update,showScrollShadow}){const className=(0,emotion_css_esm.cx)(rowClassName(columns,stickyFirstCol),headerRow);return react.createElement("div",{role:"row",className,key:"headerRow"},columns.map((({id})=>react.createElement(HeaderCell,{key:id,id,column:columns.find((c=>c.id===id)),update,state,showScrollShadow}))))}const getWidth=(col,state)=>state.find((s=>s.id===col.id))?.width||col.initialWidth||"1fr";function Table({data,columns,initialSorter,onStateChange,stickyFirstCol=!0,toId,children,...divProps}){const[state,setState]=react.useState({columns:columns.map((c=>({id:c.id,width:c.initialWidth||null}))),order:initialSorter?.order??"asc",sortBy:initialSorter?.by??null}),tableRef=react.useRef(null),[ref,entry]=useIntersect({root:tableRef.current}),col=columns.find((c=>c.id===state.sortBy)),sort=col?.sorter?.(state.order,"asc"===state.order?1:-1)??(()=>0),sortedData=[...data].sort(sort),internalColumns=columns.map((c=>({...c,width:getWidth(c,state.columns)})));return react.createElement("div",Table_extends({},divProps,{className:table,role:"grid",ref:tableRef}),react.createElement(HeaderRow,{columns:internalColumns,stickyFirstCol,state,update:x=>{setState({...state,...x}),onStateChange?.({...state,...x})},showScrollShadow:!entry?.isIntersecting&&stickyFirstCol}),sortedData.map((el=>react.createElement(Row,{key:"row-"+toId(el),columns:internalColumns,el,toId,stickyFirstCol,showScrollShadow:!entry?.isIntersecting&&stickyFirstCol}))),react.createElement("div",{ref,className:tableScrollObserver}))}const Row=react.memo((function Row({columns,el,stickyFirstCol,toId,showScrollShadow=!1}){const rowId=toId(el),className=(0,emotion_css_esm.cx)(rowClassName(columns,stickyFirstCol),contentRow);return react.createElement("div",{role:"row",className,key:`row-${rowId}`},columns.map((({id:colID,render,textAlign,sorter,contentNoWrap=!0})=>react.createElement("div",{key:rowId+colID,"aria-describedby":colID,className:(0,emotion_css_esm.cx)(cell(textAlign),{[makeSpaceForSortIndicator]:Boolean(sorter)&&"right"===textAlign,[rowScrollShadow]:showScrollShadow,[nowrap]:contentNoWrap}),role:"gridcell"},render(el)))))}));try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"readonly Entry[]"}},columns:{defaultValue:null,description:"Table columns",name:"columns",required:!0,type:{name:"Column<Entry, ColIDs>[]"}},initialSorter:{defaultValue:null,description:"The ID and direction to initially sort by.",name:"initialSorter",required:!1,type:{name:'{ by: Sort; order?: "desc" | "asc"; }'}},onStateChange:{defaultValue:null,description:"A callback invoked whenever the internal state of the table is changed.\nHave a look at the State type to see what's in there.",name:"onStateChange",required:!1,type:{name:"((a: State) => void)"}},stickyFirstCol:{defaultValue:{value:"true"},description:"Whether the first column shall be sticky. Defaults to true.",name:"stickyFirstCol",required:!1,type:{name:"boolean"}},toId:{defaultValue:null,description:"A function that provides a stable and unique ID for entries in the table.",name:"toId",required:!0,type:{name:"(a: Entry) => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tablev2/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"packages/tablev2/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./packages/tooltip/components/TooltipIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons_dist_system_icons_enum__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/dist/system-icons-enum.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icon/index.ts"),_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-tokens/build/js/designTokens.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TooltipIcon=({shape=_icons_dist_system_icons_enum__WEBPACK_IMPORTED_MODULE_1__.i.CircleInformation,...iconProps})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__.J,_extends({shape,size:"xs",color:_design_tokens_build_js_designTokens__WEBPACK_IMPORTED_MODULE_3__.greyLightDarken1},iconProps)),__WEBPACK_DEFAULT_EXPORT__=TooltipIcon;try{TooltipIcon.displayName="TooltipIcon",TooltipIcon.__docgenInfo={description:"",displayName:"TooltipIcon",props:{shape:{defaultValue:{value:"SystemIcons.CircleInformation"},description:"Icon to display, choose either (i) or (?).",name:"shape",required:!1,type:{name:"enum",value:[{value:'"system-circle-information"'},{value:'"system-circle-question"'}]}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Which icon size to use for the width and height of the icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"xxl"'}]}},color:{defaultValue:null,description:"The fill color of the icon",name:"color",required:!1,type:{name:"string"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"If an icon is more than decorative and requires further context include a description for screen readers",name:"ariaLabel",required:!1,type:{name:"string"}},block:{defaultValue:null,description:"Sets display to block if true",name:"block",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tooltip/components/TooltipIcon.tsx#TooltipIcon"]={docgenInfo:TooltipIcon.__docgenInfo,name:"TooltipIcon",path:"packages/tooltip/components/TooltipIcon.tsx#TooltipIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>components_Tooltip,n:()=>TooltipIcon.Z});var react=__webpack_require__("./node_modules/react/index.js"),Dropdownable=__webpack_require__("./packages/dropdownable/components/Dropdownable.tsx"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),designTokens=__webpack_require__("./packages/design-tokens/build/js/designTokens.js"),containerWithCaret=__webpack_require__("./packages/shared/styles/containerWithCaret.ts");const tooltip=emotion_css_esm.iv`
  background-color: ${designTokens.themeBgPrimaryInverted};
  border-radius: ${designTokens.borderRadiusDefault};
  box-sizing: border-box;
  font-size: ${designTokens.fontSizeS};
`,getTooltipArrow=direction=>emotion_css_esm.iv`
  ${(0,containerWithCaret.c)(direction,designTokens.themeBgPrimaryInverted)};
`;var styleUtils=__webpack_require__("./packages/shared/styles/styleUtils/index.ts");const TooltipContent=({direction=Dropdownable.N.TopCenter,children,id,maxWidth,minWidth,isOpen,className,"data-cy":dataCy="tooltipContent"})=>react.createElement(react.Fragment,null,react.createElement("div",{"aria-hidden":!isOpen,id,className:(0,emotion_css_esm.cx)(tooltip,(0,containerWithCaret.j)(direction),styleUtils.vF,(0,styleUtils.o3)("horiz","s"),(0,styleUtils.o3)("vert","xs"),className),role:"tooltip",style:{minWidth,maxWidth:maxWidth||void 0},"data-cy":dataCy},children),react.createElement("div",{className:getTooltipArrow(direction)})),components_TooltipContent=react.memo(TooltipContent);try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{direction:{defaultValue:{value:"Direction.TopCenter"},description:"Set a direction for the tooltip to open toward",name:"direction",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"top"'}]}},isOpen:{defaultValue:null,description:"Controls if opened by default",name:"isOpen",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Allows custom styling",name:"className",required:!1,type:{name:"string"}},"data-cy":{defaultValue:null,description:"Human-readable selector used for writing tests",name:"data-cy",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number | null"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tooltip/components/TooltipContent.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"packages/tooltip/components/TooltipContent.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}var getFocusableChildNodes=__webpack_require__("./packages/utilities/getFocusableChildNodes.ts");const Tooltip=({ariaLabel,children,disablePortal,id,maxWidth=300,minWidth,onClose,isOpen:isOpenProp=!1,preferredDirections,suppress,trigger})=>{const generatedId=`tooltip-${react.useId()}`,tooltipId=id||generatedId,triggerRef=react.useRef(null),[isOpen,setIsOpen]=react.useState(isOpenProp);suppress&&isOpenProp!==isOpen&&setIsOpen(isOpenProp);const handleOpen=()=>{suppress||setIsOpen(!0)},handleClose=()=>{suppress||(setIsOpen(!1),onClose&&onClose())};react.useEffect((()=>{const nodeToFocus=(triggerRef.current?(0,getFocusableChildNodes.K)(triggerRef.current):null)||triggerRef.current;nodeToFocus&&(nodeToFocus.setAttribute("tabindex","0"),nodeToFocus.setAttribute("aria-describedby",tooltipId))}));const triggerProps={"aria-label":ariaLabel,onMouseOver:handleOpen,onMouseLeave:handleClose,onFocus:handleOpen,onBlur:handleClose,"data-cy":"tooltip",ref:node=>{triggerRef.current=null!=node?node:null}};return react.createElement("span",disablePortal?{}:triggerProps,react.createElement(Dropdownable.Z,{isOpen,dropdown:react.createElement(components_TooltipContent,{id:tooltipId,isOpen,minWidth,maxWidth},children),preferredDirections:preferredDirections||[Dropdownable.N.TopCenter,Dropdownable.N.TopLeft,Dropdownable.N.TopRight,Dropdownable.N.BottomCenter,Dropdownable.N.BottomLeft,Dropdownable.N.BottomRight],disablePortal},disablePortal?react.createElement("span",triggerProps,trigger):trigger))},components_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},preferredDirections:{defaultValue:null,description:"",name:"preferredDirections",required:!1,type:{name:"Direction[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},suppress:{defaultValue:null,description:"",name:"suppress",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},disablePortal:{defaultValue:null,description:"",name:"disablePortal",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},maxWidth:{defaultValue:{value:"300"},description:"",name:"maxWidth",required:!1,type:{name:"number | null"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tooltip/components/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/tooltip/components/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}var TooltipIcon=__webpack_require__("./packages/tooltip/components/TooltipIcon.tsx")},"./packages/utilities/getFocusableChildNodes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>getFirstFocusableChildNode,f:()=>getAllFocusableChildNodes});const focusableNodeSelectors=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"].join(","),getFirstFocusableChildNode=element=>element.matches(focusableNodeSelectors)?element:element.querySelector(focusableNodeSelectors),getAllFocusableChildNodes=element=>{const focusableNodeList=element.querySelectorAll(focusableNodeSelectors)||[];return[].slice.call(focusableNodeList)}}}]);