(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3272],{84391:function(w,g,e){"use strict";e.d(g,{Z:function(){return F}});var x=e(28991),O=e(67294),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},D=I,W=e(27029),s=function(p,T){return O.createElement(W.Z,(0,x.Z)((0,x.Z)({},p),{},{ref:T,icon:D}))};s.displayName="UploadOutlined";var F=O.forwardRef(s)},5966:function(w,g,e){"use strict";var x=e(22122),O=e(81253),I=e(67294),D=e(60692),W=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"],F="text",Z=function(E){var L=E.fieldProps,m=E.proFieldProps,l=(0,O.Z)(E,W);return I.createElement(D.Z,(0,x.Z)({mode:"edit",valueType:F,fieldProps:L,filedConfig:{valueType:F},proFieldProps:m},l))},p=function(E){var L=E.fieldProps,m=E.proFieldProps,l=(0,O.Z)(E,s);return I.createElement(D.Z,(0,x.Z)({mode:"edit",valueType:"password",fieldProps:L,proFieldProps:m,filedConfig:{valueType:F}},l))},T=Z;T.Password=p,T.displayName="ProFormComponent",g.Z=T},90672:function(w,g,e){"use strict";var x=e(22122),O=e(81253),I=e(67294),D=e(60692),W=["fieldProps","proFieldProps"],s=function(Z,p){var T=Z.fieldProps,A=Z.proFieldProps,E=(0,O.Z)(Z,W);return I.createElement(D.Z,(0,x.Z)({ref:p,mode:"edit",valueType:"textarea",fieldProps:T,proFieldProps:A},E))};g.Z=I.forwardRef(s)},93279:function(w,g,e){"use strict";var x=e(28991),O=e(81253),I=e(59250),D=e(13013),W=e(57663),s=e(71577),F=e(30887),Z=e(28682),p=e(84305),T=e(88182),A=e(57254),E=e(44545),L=e(94184),m=e.n(L),l=e(67294),$=e(32070),j=e.n($),q=["key","name"],ee=function(u){var P=u.children,d=u.menus,K=u.onSelect,N=u.className,V=u.style,X=(0,l.useContext)(T.ZP.ConfigContext),Y=X.getPrefixCls,b=Y("pro-table-dropdown"),t=l.createElement(Z.Z,{onClick:function(S){return K&&K(S.key)}},d==null?void 0:d.map(function(z){return l.createElement(Z.Z.Item,{key:z.key},z.name)}));return l.createElement(D.Z,{overlay:t,className:m()(b,N)},l.createElement(s.Z,{style:V},P," ",l.createElement(A.Z,null)))},_=function(u){var P=u.className,d=u.style,K=u.onSelect,N=u.menus,V=N===void 0?[]:N,X=u.children,Y=(0,l.useContext)(T.ZP.ConfigContext),b=Y.getPrefixCls,t=b("pro-table-dropdown"),z=l.createElement(Z.Z,{onClick:function(k){K==null||K(k.key)},items:V.map(function(S){var k=S.key,ne=S.name,oe=(0,O.Z)(S,q);return(0,x.Z)((0,x.Z)({key:k},oe),{},{title:oe.title,label:ne})})});return l.createElement(D.Z,{overlay:z,className:m()(t,P)},l.createElement("a",{style:d},X||l.createElement(E.Z,null)))};_.Button=ee,g.Z=_},32070:function(){},86465:function(w,g,e){"use strict";e.r(g),e.d(g,{default:function(){return fe}});var x=e(57338),O=e(25084),I=e(49111),D=e(19650),W=e(57663),s=e(71577),F=e(3182),Z=e(34792),p=e(48086),T=e(71194),A=e(50146),E=e(71153),L=e(60331),m=e(94657),l=e(94043),$=e.n(l),j=e(3980),q=e(49101),ee=e(99937),_=e(16894),te=e(93279),u=e(77613),P=e(67294),d=e(11849),K=e(43358),N=e(34041),V=e(952),X=e(71975),Y=e(5966),b=e(90672),t=e(85893),z=function(y){var U=(0,P.useState)([]),r=(0,m.Z)(U,2),G=r[0],B=r[1],n=(0,j.zE)(function(o){j.hi.loadTags({name:o,category:"repo"}).then(function(R){R&&B(R)})},5);return(0,t.jsx)(V.ZP.Item,(0,d.Z)((0,d.Z)({},y),{},{children:(0,t.jsx)(N.Z,(0,d.Z)((0,d.Z)({mode:"tags",tokenSeparators:[","],placeholder:y.placeholder},y.fieldProps),{},{onSearch:n,className:"ant-pro-filed-search-select pro-field pro-field-".concat(y.width),children:G.map(function(o){return(0,t.jsx)(N.Z.Option,{value:o,children:o},o)})}))}))},S=(0,u.P)(function(h){var y=h.onOk,U=h.onClose,r=h.repo,G=(0,P.useRef)();return(0,t.jsxs)(X.a,{title:r!=null&&r.id?"\u4FEE\u6539\u9898\u5E93":"\u65B0\u589E\u9898\u5E93",formRef:G,visible:!0,initialValues:r,drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){U()}},onFinish:function(){var B=(0,F.Z)($().mark(function n(o){var R;return $().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,j.hi.saveOrUpdateRepo((0,d.Z)((0,d.Z)({},r),o));case 2:R=i.sent,R.success&&y();case 4:case"end":return i.stop()}},n)}));return function(n){return B.apply(this,arguments)}}(),children:[(0,t.jsxs)(V.ZP.Group,{children:[(0,t.jsx)(Y.Z,{name:"name",width:"md",label:"\u9898\u5E93\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u9898\u5E93\u540D\u79F0",required:!0,rules:[{required:!0,message:"\u9898\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,t.jsx)(z,{name:"tag",width:"md",label:"\u6807\u7B7E",placeholder:"\u8BF7\u8F93\u5165\u9898\u5E93\u6807\u7B7E"})]}),(0,t.jsx)(V.ZP.Group,{children:(0,t.jsx)(b.Z,{name:"description",width:"md",label:"\u9898\u5E93\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u9898\u5E93\u540D\u79F0"})})]})}),k=e(99884),ne=e(13299),oe=e(43185),se=e(32620),ue=e(90631),de=e(84391),ie=e(43347),ce=se.Z.Dragger;function ve(h){var y=h.current,U=h.onCancel,r=h.onOk,G=(0,P.useState)(!1),B=(0,m.Z)(G,2),n=B[0],o=B[1],R=(0,P.useState)([]),H=(0,m.Z)(R,2),i=H[0],J=H[1],le={multiple:!1,accept:".xlsx",beforeUpload:function(M){return J([M]),!1},onRemove:function(){J([])},maxCount:1};return(0,t.jsx)(A.Z,{title:"Excel\u6A21\u677F\u5BFC\u5165\u9898\u5E93",onCancel:U,visible:!0,maskClosable:!1,footer:[(0,t.jsx)(s.Z,{onClick:U,children:"\u53D6\u6D88"},"cancel"),(0,t.jsx)(s.Z,{icon:(0,t.jsx)(ue.Z,{}),onClick:function(){j.hi.download("/api/files/downloadTemplate?name=\u5377\u738B\u9898\u5E93\u5BFC\u5165\u6A21\u677F")},children:"\u4E0B\u8F7D\u6A21\u677F"},"downloadTemplate"),(0,t.jsx)(s.Z,{icon:(0,t.jsx)(de.Z,{}),type:"primary",loading:n,onClick:function(){if(i.length===0){p.default.error("\u8BF7\u9009\u62E9\u6587\u4EF6");return}o(!0),console.log(i),j.hi.upload("/api/repos/import",{file:i[0],repoId:y.id},function(M){}).then(function(M){o(!1),M.success?(p.default.success("\u5BFC\u5165\u6210\u529F"),r()):p.default.error(M.message)})},children:"\u5BFC\u5165"},"importTemplate")],children:(0,t.jsxs)(ce,(0,d.Z)((0,d.Z)({},le),{},{children:[(0,t.jsx)("p",{className:"ant-upload-drag-icon",children:(0,t.jsx)(ie.Z,{})}),(0,t.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u8005\u62D6\u62FDExcel\u6587\u4EF6\u5230\u6B64\u5904"})]}))})}var me=(0,u.P)(function(){var h,y=(0,j.eM)(),U=y.repos,r=(0,P.useRef)(),G=(0,P.useState)(),B=(0,m.Z)(G,2),n=B[0],o=B[1],R=(0,P.useState)(),H=(0,m.Z)(R,2),i=H[0],J=H[1],le=(0,P.useState)(),Q=(0,m.Z)(le,2),M=Q[0],ae=Q[1],pe=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u540D\u79F0",dataIndex:"name",ellipsis:!0,width:200},{title:"\u63CF\u8FF0",dataIndex:"description",ellipsis:!0,hideInSearch:!0,width:200},{title:"\u6807\u7B7E",dataIndex:"tag",hideInSearch:!0,width:200,render:function(a){if(a==="-")return"-";var c=["magenta","volcano","orange","blue","geekblue","purple"];return(0,t.jsx)(t.Fragment,{children:a.map(function(v,f){return(0,t.jsx)(L.Z,{color:c[f],children:v.toUpperCase()},v)})})}},{title:"\u9898\u76EE\u6570\u91CF",dataIndex:"total",search:!1,ellipsis:!0,width:200},{title:"\u64CD\u4F5C",valueType:"option",render:function(a,c){return[(0,t.jsx)("a",{onClick:function(){J({visible:!0,current:c})},children:"\u6587\u672C\u5BFC\u5165"},"importText"),(0,t.jsx)("a",{onClick:function(){o({current:c,type:"upload"})},children:"\u6A21\u677F\u5BFC\u5165"},"importExcel"),(0,t.jsx)("a",{onClick:function(){ae({visible:!0,current:c})},children:"\u8BD5\u9898\u7BA1\u7406"},"questions"),(0,t.jsx)(te.Z,{onSelect:function(f){f==="edit"&&o({current:c,type:"edit"}),f==="delete"&&A.Z.confirm({title:"\u5220\u9664\u6A21\u677F",content:(0,t.jsxs)(t.Fragment,{children:["\u786E\u5B9A\u5220\u9664\u6A21\u677F",(0,t.jsx)("span",{style:{fontWeight:"bold",margin:"0 4px"},children:c.name}),"\u5417\uFF1F"]}),okButtonProps:{danger:!0},okText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onOk:function(){j.hi.deleteRepo(c.id).then(function(Ee){if(Ee.success){var re;p.default.success("\u5220\u9664\u6210\u529F"),(re=r.current)===null||re===void 0||re.reload()}})}})},menus:[{key:"edit",name:"\u7F16\u8F91"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];return(0,t.jsxs)(ee.ZP,{title:!1,children:[(0,t.jsx)(_.ZP,{columns:pe,actionRef:r,dataSource:U.list,request:function(){var C=(0,F.Z)($().mark(function a(c){return $().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",y.loadRepos(c));case 1:case"end":return f.stop()}},a)}));return function(a){return C.apply(this,arguments)}}(),columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:{labelWidth:"auto"},pagination:{pageSize:5},scroll:{x:650},dateFormatter:"string",headerTitle:"\u9898\u5E93\u5217\u8868",toolBarRender:function(){return[(0,t.jsx)(s.Z,{icon:(0,t.jsx)(q.Z,{}),type:"primary",onClick:function(){o({type:"add"})},children:"\u65B0\u5EFA"},"button")]}}),((n==null?void 0:n.type)==="add"||(n==null?void 0:n.type)==="edit")&&(0,t.jsx)(S,{onClose:function(){o(void 0)},onOk:function(){var a;o(void 0),(a=r.current)===null||a===void 0||a.reload()},repo:n.current}),(i==null?void 0:i.visible)&&(0,t.jsx)(k.Z,{onClose:function(){return J(void 0)},mode:"exam",title:"\u6DFB\u52A0\u8BD5\u9898",okText:"\u6DFB\u52A0",defaultContent:"",headerVisible:!1,footerVisible:!1,onOk:function(a){var c;j.hi.batchAddRepoTemplate({repoId:i.current.id,templates:((c=a.children)===null||c===void 0?void 0:c.map(function(v){return{name:v.title,mode:"exam",template:v,tag:v.tags,questionType:v.type}}))||[]}).then(function(v){if(v.success){var f;p.default.success("\u5BFC\u5165\u6210\u529F"),(f=r.current)===null||f===void 0||f.reload(),J(void 0)}})}}),(M==null?void 0:M.visible)&&(0,t.jsx)(O.Z,{title:"\u8BD5\u9898\u7BA1\u7406",visible:!0,width:"100%",onClose:function(){return ae(void 0)},bodyStyle:{background:"#eff2f5"},closeIcon:!1,extra:(0,t.jsx)(D.Z,{children:(0,t.jsx)(s.Z,{onClick:function(){return ae(void 0)},children:"\u5173\u95ED"})}),children:(0,t.jsx)(ne.Template,{repoId:(h=M.current)===null||h===void 0?void 0:h.id})}),(n==null?void 0:n.current)&&n.type==="upload"&&(0,t.jsx)(ve,{current:n.current,onCancel:function(){return o(void 0)},onOk:function(){var a;(a=r.current)===null||a===void 0||a.reload(),o(void 0)}})]})}),fe=me}}]);