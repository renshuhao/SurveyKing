(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[17],{90672:function(b,S,e){"use strict";var Y=e(95395),U=e(97445),K=e(67294),Q=e(78729),c=["fieldProps","proFieldProps"],W=function(Z,M){var p=Z.fieldProps,d=Z.proFieldProps,j=(0,U.Z)(Z,c);return K.createElement(Q.Z,(0,Y.Z)({ref:M,mode:"edit",valueType:"textarea",fieldProps:p,proFieldProps:d},j))};S.Z=K.forwardRef(W)},86468:function(b,S,e){"use strict";e.d(S,{lq:function(){return j},FQ:function(){return V},fl:function(){return N}});var Y=e(43358),U=e(97268),K=e(20228),Q=e(11382),c=e(11849),W=e(94657),L=e(93224),Z=e(68489),M=e(15196),p=e(67294),d=e(85893),j=function(l){var T=l.fps,A=T===void 0?30:T,F=l.fetcher,_=l.width,E=l.className,G=l.defaultOptions,a=l.readonly,R=l.value,C=(0,L.Z)(l,["fps","fetcher","width","className","defaultOptions","readonly","value"]),n=(0,p.useState)(!1),f=(0,W.Z)(n,2),y=f[0],B=f[1],P=(0,p.useState)(G||[]),t=(0,W.Z)(P,2),s=t[0],O=t[1],m=p.useRef(0),i=N(_),I=(0,Z.zE)(function(v){B(!0),O([]),m.current+=1;var z=m.current;l.fetcher(v).then(function(h){z===m.current&&(O(h),B(!1))})},A);if(a){var x;return(0,d.jsx)(M.ZP.Item,(0,c.Z)((0,c.Z)({},C),{},{children:(0,d.jsx)("span",{children:(x=s.find(function(v){return v.value===R}))===null||x===void 0?void 0:x.label})}))}return(0,d.jsx)(M.ZP.Item,(0,c.Z)((0,c.Z)({},C),{},{children:(0,d.jsx)(U.Z,(0,c.Z)({showSearch:!0,placeholder:l.placeholder,filterOption:!1,onSearch:I,allowClear:!0,onFocus:function(){return I("")},onClear:function(){return I("")},loading:y,notFoundContent:y?(0,d.jsx)(Q.Z,{size:"small"}):null,options:s},i))}))},$=e(62999),H=e(51753),V=function(l){var T=l.width,A=l.className,F=l.treeData,_=l.placeholder,E=l.readonly,G=l.value,a=(0,L.Z)(l,["width","className","treeData","placeholder","readonly","value"]),R=N(T);if(E){var C;return(0,d.jsx)(M.ZP.Item,(0,c.Z)((0,c.Z)({},a),{},{children:(0,d.jsx)("span",{children:(C=(0,Z.hE)(F,G,"key"))===null||C===void 0?void 0:C.title})}))}return(0,d.jsx)(M.ZP.Item,(0,c.Z)((0,c.Z)({},a),{},{children:(0,d.jsx)(H.Z,(0,c.Z)({dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:F,placeholder:_,treeDefaultExpandAll:!0},R))}))};function N(D){if(!D)return{};if(typeof D=="number")return{style:{width:D}};if(typeof D=="string")return{className:"pro-field ".concat(typeof D=="string"?"pro-field-".concat(D):"")}}},79871:function(b,S,e){"use strict";e.d(S,{G:function(){return B},y:function(){return y}});var Y=e(57663),U=e(71577),K=e(3182),Q=e(71194),c=e(50146),W=e(34792),L=e(48086),Z=e(94657),M=e(83279),p=e(94043),d=e.n(p),j=e(68489),$=e(57119),H=e(49101),V=e(16894),N=e(93279),D=e(80937),l=e(60780),T=e.n(l),A=e(67294),F=e(11849),_=e(90672),E=e(15196),G=e(71975),a=e(5966),R=e(77613),C=e(86468),n=e(85893),f=(0,R.P)(function(P){var t=P.dept,s=P.readonly,O=P.onClose,m=P.onOk,i=(0,j.m2)(),I=(0,A.useRef)(),x=!!(t!=null&&t.id),v=i.depts,z=(0,A.useMemo)(function(){return T()(v.map(function(h){return{value:h.id,title:h.name,key:h.id,parentId:h.parentId}}),{parentProperty:"parentId",customID:"value"})},[v]);return(0,n.jsxs)(G.Z,{title:s?"\u7EC4\u7EC7\u673A\u6784\u8BE6\u60C5":x?"\u4FEE\u6539\u7EC4\u7EC7\u673A\u6784":"\u65B0\u5EFA\u7EC4\u7EC7\u673A\u6784",formRef:I,initialValues:(0,F.Z)({},t),visible:!0,submitter:{submitButtonProps:{style:{display:s?"none":"block"}}},drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){O()}},onFinish:function(){var h=(0,K.Z)(d().mark(function o(r){var u;return d().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,i.saveOrUpdateDept((0,F.Z)((0,F.Z)({},t),r));case 2:u=g.sent,u.success?m():L.default.error("\u4FDD\u5B58\u5931\u8D25");case 4:case"end":return g.stop()}},o)}));return function(o){return h.apply(this,arguments)}}(),children:[(0,n.jsxs)(E.ZP.Group,{children:[(!t||t&&t.id!=="1")&&v.length>0&&(0,n.jsx)(C.FQ,{name:"parentId",width:"md",treeData:z,label:"\u4E0A\u7EA7\u90E8\u95E8",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0,readonly:s,value:t==null?void 0:t.id,rules:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,n.jsx)(a.Z,{name:"code",width:"md",label:"\u7F16\u7801",placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801",readonly:s,required:!0,rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}]})]}),(0,n.jsxs)(E.ZP.Group,{children:[(0,n.jsx)(a.Z,{name:"name",width:"md",label:"\u5168\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5168\u79F0",readonly:s,required:!0,rules:[{required:!0,message:"\u5168\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,n.jsx)(a.Z,{name:"shortName",width:"md",label:"\u7B80\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u7B80\u79F0",readonly:s,required:!0})]}),(0,n.jsx)(E.ZP.Group,{children:(0,n.jsx)(C.lq,{fps:2,name:"managerId",width:"md",label:"\u8D1F\u8D23\u4EBA",placeholder:"\u8F93\u5165\u59D3\u540D\u68C0\u7D22",readonly:s,value:t==null?void 0:t.managerId,defaultOptions:x?[{label:t.managerName,value:t.managerId}]:void 0,fetcher:function(o){return j.hi.loadUsers({name:o}).then(function(r){return r.list.map(function(u){return{label:u.name,value:u.id}})})}})}),(0,n.jsx)(E.ZP.Group,{children:(0,n.jsx)(_.Z,{name:"remark",width:690,label:"\u5907\u6CE8",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",readonly:s})})]})});function y(P,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!t)return P;for(var m=(0,M.Z)(P);m.length;){var i=m[O?"pop":"shift"]();if(i&&i[s]===t)return[i];i!=null&&i.children&&m.push.apply(m,(0,M.Z)(i.children))}return null}var B=(0,D.Pi)(function(P){var t=P.selectedDept,s=(0,j.m2)(),O=s.loading,m=(0,A.useRef)(),i=(0,A.useState)({visible:!1}),I=(0,Z.Z)(i,2),x=I[0],v=I[1],z=y(T()(s.depts,{customID:"id",parentProperty:"parentId"}),t),h=[{title:"\u673A\u6784\u540D\u79F0",dataIndex:"name",width:200},{title:"\u673A\u6784\u7B80\u79F0",dataIndex:"shortName",search:!1,width:200},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"managerName",search:!1,width:150},{title:"\u64CD\u4F5C",valueType:"option",render:function(r,u){return[(0,n.jsx)("a",{onClick:function(){return v({visible:!0,current:u,readonly:!0})},children:"\u8BE6\u60C5"},"editable"),(0,n.jsx)(N.Z,{onSelect:function(g){if(g==="edit"&&v({visible:!0,current:u}),g==="delete"){if(u.children&&u.children.length>0){L.default.error("\u8BF7\u5148\u5220\u9664\u5B50\u673A\u6784\uFF01");return}c.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u673A\u6784?",icon:(0,n.jsx)($.Z,{}),onOk:function(){s.deleteDept(u.id)}})}},menus:[{key:"edit",name:"\u7F16\u8F91"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];return(0,n.jsxs)("div",{children:[(0,n.jsx)(V.ZP,{columns:h,actionRef:m,loading:O,dataSource:z,request:(0,K.Z)(d().mark(function o(){return d().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",s.loadDepts());case 1:case"end":return u.stop()}},o)})),columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:!1,scroll:{x:650},pagination:!1,dateFormatter:"string",headerTitle:"\u673A\u6784\u7BA1\u7406",toolBarRender:function(){return[(0,n.jsx)(U.Z,{icon:(0,n.jsx)(H.Z,{}),type:"primary",onClick:function(){v({visible:!0})},children:"\u65B0\u5EFA"},"button")]}}),x.visible&&(0,n.jsx)(f,{onOk:function(){v({visible:!1})},dept:x.current,readonly:x.readonly,onClose:function(){return v({visible:!1})}})]})})},40017:function(b,S,e){"use strict";e.d(S,{A:function(){return C}});var Y=e(58024),U=e(39144),K=e(32157),Q=e(32138),c=e(34792),W=e(48086),L=e(49111),Z=e(19650),M=e(22385),p=e(31097),d=e(94657),j=e(83279),$=e(68489),H=e(81162),V=e(17828),N=e(59879),D=e(91816),l=e(86504),T=e(63258),A=e(80937),F=e(60780),_=e.n(F),E=e(67294),G=e(79871),a=e(85893);function R(n){var f=[];return n.forEach(function(y){y.children&&(f.push(y.key),f.push.apply(f,(0,j.Z)(R(y.children))))}),f}var C=(0,A.Pi)(function(n){var f=(0,$.m2)(),y=f.depts;(0,E.useEffect)(function(){f.loadDepts()},[f]);var B=(0,E.useMemo)(function(){return _()(y.map(function(o){return{title:o.name,key:o.id,parentId:o.parentId}}),{parentProperty:"parentId",customID:"key"})},[y]),P=(0,E.useState)([]),t=(0,d.Z)(P,2),s=t[0],O=t[1],m=(0,E.useState)(!0),i=(0,d.Z)(m,2),I=i[0],x=i[1],v=(0,E.useMemo)(function(){return R(B)},[B]),z=function(r){O(r),x(!1)},h=function(r){r.length>0?n.onSelect(r[0]):n.onSelect(void 0)};return(0,a.jsx)(U.Z,{title:"\u7EC4\u7EC7\u673A\u6784",extra:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(Z.Z,{children:[s.length>0?(0,a.jsx)(p.Z,{title:"\u6298\u53E0\u6240\u6709",children:(0,a.jsx)(H.Z,{style:{cursor:"pointer"},onClick:function(){return O([])}})}):(0,a.jsx)(p.Z,{title:"\u5C55\u5F00\u6240\u6709",children:(0,a.jsx)(V.Z,{style:{cursor:"pointer"},onClick:function(){return O(v)}})}),(0,a.jsx)(p.Z,{title:"\u5237\u65B0",children:(0,a.jsx)(N.Z,{style:{cursor:"pointer"},onClick:function(){return f.loadDepts()}})})]})}),children:(0,a.jsx)(Q.Z,{expandedKeys:s,onExpand:z,draggable:!0,autoExpandParent:I,onSelect:h,showIcon:!0,treeData:B,onDrop:function(r){if(r.dragNode.pos!=="".concat(r.node.pos,"-0")){if(r.node.parentId!==r.dragNode.parentId&&r.dragNode.parentId!==r.node.key){W.default.error("\u53EA\u80FD\u6539\u53D8\u540C\u7EA7\u673A\u6784\u7684\u987A\u5E8F");return}var u=r.dragNode.parentId,J=(0,G.y)(B,u,"key");if(J){var g,X=(g=J[0].children)===null||g===void 0?void 0:g.map(function(k){return k.key}),w=r.dragNode.key,q=X.indexOf(w);X.splice(q,1,""),X.splice(r.dropPosition,0,w),f.sortDept(X.filter(function(k){return k}))}}},icon:function(r){var u=r.expanded;return u?(0,a.jsx)(D.Z,{}):!r.data.children||r.data.children.length===0?(0,a.jsx)(l.Z,{}):(0,a.jsx)(T.Z,{})}})})})}}]);