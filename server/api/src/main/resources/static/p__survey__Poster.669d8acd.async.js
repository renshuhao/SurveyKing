(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[304],{34108:function(y){y.exports={main:"main___21rJo"}},34070:function(y){y.exports={main:"main___135N1"}},49788:function(y){y.exports={main:"main___3fcDw"}},73713:function(y){y.exports={main:"main___3PlGX"}},72373:function(y){y.exports={main:"main___lXNcV"}},93916:function(y){y.exports={main:"main___UJX15",cmp:"cmp___2nkeC",cmpIcon:"cmpIcon___3_Wuh",cmpText:"cmpText___1uVZ6",close:"close___33Xtp",cmpTop:"cmpTop___15tlX",cmpList:"cmpList___2VkX2",detailList:"detailList___1CfRb"}},25271:function(y){y.exports={main:"main___2krr5",canvas:"canvas___-PTQi"}},71804:function(y){y.exports={main:"main___1pYX9",item:"item___1uSX4",desc:"desc___3xA87",thumbnail:"thumbnail___2-pjw"}},79468:function(y){y.exports={main:"main___2SoBw",unselected:"unselected___tqp--",stretch:"stretch___1n1Eg",rotate:"rotate___2a-x0",stretchDot:"stretchDot___25Yua"}},15036:function(y){y.exports={main:"main___349pA",attribute:"attribute___2xEX9",attributeIcon:"attributeIcon___3Nfw1",empty:"empty___jtunA",title:"title___umNfY",item:"item___3vdZZ",itemRight:"itemRight___177Zc"}},73418:function(y){y.exports={main:"main___G6HSt",empty:"empty___1A4Dv",title:"title___2ZOkC",item:"item___2dUEY",itemRight:"itemRight___2ThVu",pouseAnimation:"pouseAnimation___11Ht1"}},42554:function(y){y.exports={main:"main___3iBmI",close:"close___3MO16",item:"item___3OeSn",name:"name___2bVyY",thumbnail:"thumbnail___2vV0l"}},11776:function(y){y.exports={main:"main___2BWdq",item:"item___4osz2",release:"release___2RQrA",txt:"txt___IF_aZ"}},61767:function(y,ee,u){"use strict";u.r(ee),u.d(ee,{default:function(){return Dt}});var j=u(67294),T=u(94657),H=u(11628),te=u(23156),V=u(80937),h=u(11849),U=j.createContext({}),D="http://150.158.30.131:8181/";function ye(){return Math.random()}function L(i,t){var n=(0,h.Z)({},i);return n=be(n,["width","height","lineHeight","fontSize","borderWidth"]),n=je(n,["animationDuration","animationDelay"]),t||(delete n.top,delete n.right,delete n.bottom,delete n.left,delete n.transform,delete n.borderWidth,delete n.animationName),n}function be(i,t){return t.forEach(function(n){i[n]&&(i[n]+"").indexOf("px")===-1&&(i[n]=i[n]+"px")}),i}function je(i,t){return t.forEach(function(n){i[n]&&(i[n]+"").indexOf("s")===-1&&(i[n]=i[n]+"s")}),i}var ne=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,o=null;return function(){o!==null&&clearTimeout(o),o=setTimeout(t,n)}};function Et(){return document.getElementById("root")}function Zt(){}function It(i){return document.getElementById("cmp"+i)}function Se(){var i=(0,j.useState)(0),t=(0,T.Z)(i,2),n=t[1],o=(0,j.useCallback)(function(){n(function(a){return a+1})},[]);return o}function W(){return(0,j.useContext)(U)}var Ne=u(72373),De=u.n(Ne),e=u(85893);function ae(i){var t=i.children,n=i.baseCmp,o=i.value,a=i.style,l=a===void 0?{width:200,height:200}:a,r=W(),c=j.useMemo(function(){return(0,h.Z)((0,h.Z)({},n),{},{data:(0,h.Z)((0,h.Z)({},n.data),{},{value:o,style:(0,h.Z)((0,h.Z)({},n.data.style),l)})})},[n,o,l]),s=function(g){g.preventDefault(),g.stopPropagation(),r.addCmp(c)},v=function(g){g.dataTransfer.setData("add-component",JSON.stringify(c))};return(0,e.jsx)("li",{className:De().main,onClick:s,draggable:"true",onDragStart:v,children:t})}var Rt=[{style:{width:180,height:320},value:D+"chuliu.jpeg"},{style:{width:180,height:320},value:D+"hua-bg.png"},{style:{width:315,height:187},value:D+"tiger.png"},{style:{width:128,height:30},value:D+"fu.png"},{style:{width:40,height:30},value:D+"gold-coins.png"},{style:{width:40,height:30},value:D+"gold-coins2.png"},{style:{width:120,height:230},value:D+"meng.webp"},{style:{width:300,height:152},value:D+"taohuayun.png"},{style:{width:300,height:312},value:D+"hua.png"},{style:{width:320,height:200},value:D+"certificate.jpg"},{style:{width:320,height:200},value:D+"rose.jpg"},{style:{width:320,height:200},value:D+"red-rose.jpg"},{style:{width:320,height:200},value:D+"peony.jpg"},{style:{width:320,height:200},value:D+"flower.jpg"}];function Ee(i){var t=i.baseCmp,n=(0,H.IE)(),o=n.images[te.__.PosterImage];return(0,e.jsx)(e.Fragment,{children:o.map(function(a,l){return(0,e.jsx)(ae,{baseCmp:t,value:"/api/public/preview/".concat(a.id),children:(0,e.jsx)("img",{src:"/api/public/preview/".concat(a.id),alt:""})},"img"+l)})})}var Ze=(0,V.Pi)(Ee),Ie=u(18454),R=u(61501),oe=[{type:"QRNormal",component:R.QRNormal},{type:"QRRandRect",component:R.QRRandRect},{type:"QRDsj",component:R.QRDsj},{type:"QR25D",component:R.QR25D},{type:"QRImage",component:R.QRImage},{type:"QRResImage",component:R.QRResImage},{type:"QRBubble",component:R.QRBubble},{type:"QRFunc",component:R.QRFunc},{type:"QRLine",component:R.QRLine}];function Re(i){var t,n=(t=oe.find(function(o){return o.type===i}))===null||t===void 0?void 0:t.component;return n||R.QRNormal}function we(i){var t=i.baseCmp,n=(0,H.IE)(),o=(0,Ie.Jg)(n.id);return(0,e.jsx)(e.Fragment,{children:oe.map(function(a,l){return(0,e.jsx)(ae,{baseCmp:(0,h.Z)((0,h.Z)({},t),{},{data:(0,h.Z)((0,h.Z)({},t.data),{},{componentType:a.type})}),value:o,style:{width:120,height:120,backgroundColor:"#ffffff"},children:j.createElement(a.component,{value:o})},"img"+l)})})}var Me=we,Be=u(93916),A=u.n(Be),J=0,$=1,Q=2,X=3,Fe=[{desc:"\u6587\u672C",icon:"Text",data:{type:J,value:"\u6587\u672C",iconfont:"iconfont icon-wenben",style:{top:1,left:0,width:80,height:30,lineHeight:30,fontSize:12,fontWeight:"normal",color:"#000",backgroundColor:"#ffffff00",textAlign:"left",borderRadius:"0%",borderStyle:"none",borderWidth:"0",borderColor:"#ffffff00"}}},{desc:"\u6309\u94AE",icon:"Button",data:{type:$,value:"\u6309\u94AE",iconfont:"iconfont icon-anniu",style:{top:0,left:0,width:80,height:30,lineHeight:30,fontSize:12,fontWeight:"normal",color:"#000",backgroundColor:"#ffffff00",textAlign:"left",borderRadius:"0%",borderStyle:"none",borderWidth:"0",borderColor:"#ffffff00"}}},{desc:"\u56FE\u7247",icon:"Picture",data:{type:Q,iconfont:"iconfont icon-image",value:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1333208373,3297678241&fm=26&gp=0.jpg",style:{top:0,left:0,width:200,height:100,borderRadius:"0%",borderStyle:"none",borderWidth:"0",borderColor:"#ffffff00"}}},{desc:"\u4E8C\u7EF4\u7801",icon:"Qrcode",data:{type:X,iconfont:"iconfont icon-image",value:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1333208373,3297678241&fm=26&gp=0.jpg",style:{top:0,left:0,width:200,height:100,borderRadius:"0%",borderStyle:"none",borderWidth:"0",borderColor:"#ffffff00"}}}],O=u(12377),Ae=u(54549);function Pe(){var i=W(),t=(0,j.useState)(null),n=(0,T.Z)(t,2),o=n[0],a=n[1],l=function(s,v){v.data.type===Q||v.data.type===X||s.dataTransfer.setData("add-component",JSON.stringify(v))},r=function(s,v){if(s.preventDefault(),s.stopPropagation(),v.data.type===J||v.data.type===$){i.addCmp(v);return}if(o)a(null);else{var b=null;switch(v.data.type){case Q:b=(0,e.jsx)(Ze,{baseCmp:v});break;case X:b=(0,e.jsx)(Me,{baseCmp:v});break;default:b=null}a(b)}};return(0,e.jsxs)("div",{id:"cmps",className:A().main,children:[(0,e.jsx)("div",{className:A().cmpList,children:Fe.map(function(c){return(0,e.jsxs)("div",{className:A().cmp,draggable:c.data.type!==Q,onDragStart:function(v){return l(v,c)},onClick:function(v){return r(v,c)},children:[(0,e.jsx)("span",{className:"".concat(A().cmpIcon),children:(0,e.jsx)(O.MT,{infer:c.icon})}),(0,e.jsxs)("span",{className:A().cmpText,children:[" ",c.desc," "]})]},c.desc)})}),o&&(0,e.jsx)(Ae.Z,{onClick:function(){return a(null)},className:A().close}),o&&(0,e.jsx)("ul",{className:A().detailList,children:o})]})}var Te=(0,V.Pi)(Pe),G=u(69610),se=u(54941),ie=u(43028),le=u(5869),He=u(71804),B=u.n(He);function Le(i){var t=i.index,n=i.pos,o=i.cmp,a=W(),l=function(f){f.stopPropagation(),a.deleteSelectedCmp(o)},r=function(){a.addCmp(o)},c=function(f){a.changeCmpIndex(t)},s=function(f){a.changeCmpIndex(t,0)},v=a.getCmps(),b=function(f,p){var x=document.getElementById("cmp"+p.onlyKey),C=x.className;C.indexOf("hover")===-1&&x.setAttribute("class",C+" hover")},g=function(f,p){var x=document.getElementById("cmp"+p.onlyKey),C=x.className;C.indexOf("hover")>-1&&x.setAttribute("class",C.slice(0,-6))},d=function(f,p){a.setSelectedCmp(p)};return(0,e.jsxs)("ul",{className:B().main,style:n,children:[(0,e.jsx)("li",{className:B().item,onClick:r,children:"\u590D\u5236"}),(0,e.jsx)("li",{className:B().item,onClick:l,children:"\u5220\u9664"}),(0,e.jsx)("li",{className:B().item,onClick:c,children:"\u7F6E\u9876"}),(0,e.jsx)("li",{className:B().item,onClick:s,children:"\u7F6E\u5E95"}),v.map(function(m){return(0,e.jsxs)("li",{className:B().item,onMouseOver:function(p){return b(p,m)},onMouseLeave:function(p){return g(p,m)},onClick:function(p){return d(p,m)},children:[(0,e.jsx)("div",{className:B().desc,children:m.desc}),(0,e.jsx)("div",{className:B().thumbnail,style:{width:m.data.style.width,height:m.data.style.height},children:ue(m)})]},m.onlyKey)})]})}var Oe=u(73713),ke=u.n(Oe);function We(i){var t=i.style;return(0,e.jsx)("div",{className:ke().main,style:L(t,!1),children:i.value})}var Qe=u(34108),Ke=u.n(Qe);function Ue(i){var t=i.style;return(0,e.jsx)("button",{className:Ke().main,style:L(t,!1),children:i.value})}var Xe=u(34070),Ye=u.n(Xe);function ze(i){var t=i.style;return(0,e.jsx)("img",{className:Ye().main,style:L(t),src:i.value,alt:""})}var Ve=u(49788),Je=u.n(Ve);function $e(i){var t=i.style,n=i.componentType;return j.createElement(Re(n),{value:i.value,style:L(t),className:Je().main})}var Ge=u(94184),P=u.n(Ge),qe=u(79468),I=u.n(qe),re=function(i){(0,ie.Z)(n,i);var t=(0,le.Z)(n);function n(o,a){var l;return(0,G.Z)(this,n),l=t.call(this,o),l.moveByMouse=function(r,c){r.preventDefault(),l.context.updateSelectedCmpStyle(c,"frequently")},l.whichEvent=function(r){var c=l.context,s=c.getSelectedCmp(),v={};switch(r.keyCode){case 37:v.left=s.data.style.left-1,l.moveByMouse(r,v);break;case 38:v.top=s.data.style.top-1,l.moveByMouse(r,v);break;case 39:v.left=s.data.style.left+1,l.moveByMouse(r,v);break;case 40:v.top=s.data.style.top+1,l.moveByMouse(r,v);break;default:break}},l.onStoreChange=function(){l.forceUpdate()},l.setShowContextMenu=function(r){r.stopPropagation(),r.preventDefault(),l.state.showContextMenu&&l.setState({showContextMenu:!1})},l.handleMouseDown=function(r,c){r.stopPropagation(),r.preventDefault();var s=l.context.getCmp(l.props.index),v=r.pageX,b=r.pageY,g=function(f){var p=f.pageX,x=f.pageY,C=p-v,S=x-b,w={};c&&(c.indexOf("top")>=0&&(S=0-S,w.top=s.data.style.top-S),c.indexOf("left")>=0&&(C=0-C,w.left=s.data.style.left-C)),ne(l.context.updateSelectedCmpStyle((0,h.Z)((0,h.Z)({},w),{},{width:s.data.style.width+C,height:s.data.style.height+S}),"frequently"))},d=function m(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),l.context.recordCanvasChangeHistory()};document.addEventListener("mousemove",g),document.addEventListener("mouseup",d)},l.handleDragStart=function(r){l.setActive(r);var c=r.pageX,s=r.pageY;r.dataTransfer.setData("startPos",JSON.stringify({pageX:c,pageY:s}))},l.setActive=function(r){r.stopPropagation();var c=l.context.getCmp(l.props.index);l.context.setSelectedCmp(c)},l.handleContextMenu=function(r){r.preventDefault(),l.setState({showContextMenu:!0})},l.handleMouseDownofRotate=function(r){r.stopPropagation(),r.preventDefault();var c=l.context.updateSelectedCmpStyle,s=r.pageX,v=r.pageY,b=function(m){var f=m.pageX,p=m.pageY,x=f-s,C=p-v,S=360*Math.atan2(C,x)/(2*Math.PI);ne(c({transform:"rotate(".concat(S,"deg)")},"frequently"))},g=function d(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",d),l.context.recordCanvasChangeHistory()};document.addEventListener("mousemove",b),document.addEventListener("mouseup",g)},l.state={showContextMenu:!1},l}return(0,se.Z)(n,[{key:"componentDidMount",value:function(){document.getElementById("root").addEventListener("click",this.setShowContextMenu),document.onkeydown=this.whichEvent,this.unregisterCmpsEntity=this.context.registerCmpsEntity(this.context.getCmp(this.props.index).onlyKey,this)}},{key:"componentWillUnmount",value:function(){document.getElementById("root").removeEventListener("click",this.setShowContextMenu),this.unregisterCmpsEntity()}},{key:"render",value:function(){var a=this,l=this.props.index,r=this.context,c=r.getCmp(this.props.index),s=r.getSelectedCmp(),v=s&&s.onlyKey===c.onlyKey,b=this.state.showContextMenu,g=c.data.style,d=g.top-4,m=g.left-4,f=g.width,p=g.height;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"cmp"+c.onlyKey,className:I().main+" "+(v?"selected":I().unselected),style:(0,h.Z)((0,h.Z)({},L(g,!0)),{},{zIndex:l}),draggable:!0,onDragStart:this.handleDragStart,onClick:this.setActive,onContextMenu:this.handleContextMenu,children:ue(c)}),v&&(0,e.jsxs)("ul",{className:I().stretch,style:{transform:"rotate".concat(g.transform)},children:[(0,e.jsx)("li",{className:P()(I().rotate,"iconfont icon-xuanzhuan"),style:{top:d-20,left:m+f/2},onMouseDown:this.handleMouseDownofRotate}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d,left:m},onMouseDown:function(C){return a.handleMouseDown(C,"top left")}}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d,left:m+f/2},onMouseDown:function(C){return a.handleMouseDown(C,"top")}}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d,left:m+f+2},onMouseDown:function(C){return a.handleMouseDown(C,"top right")}}),(0,e.jsx)("li",{style:{top:d+p/2,left:m+f+2},onMouseDown:this.handleMouseDown}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d+p+2,left:m+f+2},onMouseDown:this.handleMouseDown}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d+p+2,left:m+f/2},onMouseDown:this.handleMouseDown}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d+p+2,left:m},onMouseDown:function(C){return a.handleMouseDown(C,"bottom left")}}),(0,e.jsx)("li",{className:I().stretchDot,style:{top:d+p/2,left:m},onMouseDown:function(C){return a.handleMouseDown(C,"left")}})]}),b&&(0,e.jsx)(Le,{index:l,pos:{top:g.top-80,left:g.left+60},cmp:c})]})}}]),n}(j.Component);re.contextType=U;function ue(i){var t=i.data,n=null;switch(t.type){case J:n=(0,e.jsx)(We,(0,h.Z)({},t));break;case $:n=(0,e.jsx)(Ue,(0,h.Z)({},t));break;case Q:n=(0,e.jsx)(ze,(0,h.Z)({},t));break;case X:n=(0,e.jsx)($e,(0,h.Z)({},t));break;default:n=null}return n}var _e=u(25271),ce=u.n(_e),et=u(11776),E=u.n(et),tt=u(42554),K=u.n(tt),nt=[{id:"0",name:"\u5956\u72B6",img:D+"gaoshaoyun.png",cmps:'{"style":{"width":320,"height":568,"backgroundColor":"#ffffff00","backgroundImage":"","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat","boxSizing":"content-box"},"cmps":[{"desc":"\u56FE\u7247","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/certificate.jpg","style":{"top":0,"left":0,"width":320,"height":200,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.2471236123826679},{"desc":"\u56FE\u7247","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/tiger.png","style":{"top":138,"left":243,"width":43,"height":39,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.7204251020316776},{"desc":"\u6587\u672C","data":{"type":0,"value":"\u9AD8\u5C11\u4E91\u540C\u5B66\uFF1A","iconfont":"iconfont icon-wenben","style":{"top":72,"left":29,"width":80,"height":30,"lineHeight":30,"fontSize":"12","fontWeight":"bold","color":"#000","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.19367990107557298},{"desc":"\u6587\u672C","data":{"type":0,"value":"\u57282021\u5E74\u5EA6\u8868\u73B0\u4F18\u5F02\uFF0C\u88AB\u8BC4\u4E3A","iconfont":"iconfont icon-wenben","style":{"top":98,"left":53,"width":179,"height":26,"lineHeight":30,"fontSize":12,"fontWeight":"bold","color":"#000","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.5641712922935813},{"desc":"\u6587\u672C","data":{"type":0,"value":"\u4E09\u597D\u5B66\u751F","iconfont":"iconfont icon-wenben","style":{"top":127,"left":106,"width":92,"height":31,"lineHeight":30,"fontSize":"22","fontWeight":"bold","color":"#fc0000ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.3161408071395724},{"desc":"\u6587\u672C","data":{"type":0,"value":"\u7279\u53D1\u6B64\u72B6\uFF0C\u4EE5\u8D44\u9F13\u52B1\uFF01","iconfont":"iconfont icon-wenben","style":{"top":155,"left":28,"width":179,"height":26,"lineHeight":30,"fontSize":12,"fontWeight":"bold","color":"#000","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#ffffff00"}},"onlyKey":0.5359619832019422}]}'},{id:"1",name:"\u65B0\u5E74",img:D+"newyear.png",cmps:'{"style":{"width":320,"height":568,"backgroundColor":"#ffffff00","backgroundImage":"http://150.158.30.131:8181/chuliu.jpeg","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat","boxSizing":"content-box"},"cmps":[{"desc":"\u56FE\u7247","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/tiger.png","style":{"top":355,"left":-15,"width":72,"height":86,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#fff","animationName":"jello","animationDelay":0,"animationDuration":1,"animationIterationCount":"infinite"}},"onlyKey":0.284866448554715},{"desc":"\u56FE\u7247","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/hua.png","style":{"top":499,"left":155,"width":61,"height":66,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#fff"}},"onlyKey":0.04785683542864816}]}'}];function at(i){var t=i.openOrCloseTpl,n=i.globalCanvas,o=function(l){n.updateCanvas(JSON.parse(l)),t(!1)};return(0,e.jsxs)("ul",{className:K().main,children:[(0,e.jsx)("li",{className:K().close,onClick:t,children:(0,e.jsx)("i",{className:"iconfont icon-close"})}),nt.map(function(a){return(0,e.jsxs)("li",{className:K().item,onClick:function(){return o(a.cmps)},children:[(0,e.jsx)("div",{className:K().name,children:a.name}),(0,e.jsx)("div",{className:K().thumbnail,children:(0,e.jsx)("img",{src:a.img,alt:a.name})})]},a.id)})]})}var ot=u(29306),st=u.n(ot),wt=u(71194),de=u(50146),Mt=u(18106),me=u(51752),Bt=u(43185),it=u(11324),q=u(83279),lt=u(3182),Ft=u(22385),rt=u(61580),ut=u(94043),he=u.n(ut),ct=u(62298),ve=u(42768),dt=u(57119),At=u(57663),fe=u(71577),mt=u(73171),ht=function(t){var n=t.file,o=t.onPreview,a=t.onRemove;return(0,e.jsxs)("div",{className:"ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card",children:[(0,e.jsx)("div",{className:"ant-upload-list-item-info",children:(0,e.jsxs)("span",{className:"ant-upload-span",children:[(0,e.jsx)("a",{className:"ant-upload-list-item-thumbnail",href:n.url,target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("img",{src:n.thumbUrl,alt:n.fileName,className:"ant-upload-list-item-image"})}),(0,e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"ant-upload-list-item-name",title:n.url,href:n.url,children:n.name})]})}),(0,e.jsxs)("span",{className:"ant-upload-list-item-actions",children:[(0,e.jsx)(fe.Z,{title:"\u8BBE\u7F6E\u80CC\u666F",size:"small",onClick:o,type:"text",icon:(0,e.jsx)(ve.Z,{style:{color:"white"},className:"ant-upload-list-item-card-actions-btn"})}),(0,e.jsx)(fe.Z,{title:"\u5220\u9664\u56FE\u7247",size:"small",type:"text",onClick:a,icon:(0,e.jsx)(mt.Z,{style:{color:"white"},className:"ant-upload-list-item-card-actions-btn"})})]})]})},pe=function(t){var n=(0,H.IE)(),o=t.list,a=t.type,l=(0,j.useState)([]),r=(0,T.Z)(l,2),c=r[0],s=r[1];(0,j.useEffect)(function(){s(o.map(function(d){return{uid:d.id,name:d.originalName,status:"done",thumbUrl:d.previewUrl||"/api/public/preview/".concat(d.id,"@thumbnail"),url:d.previewUrl||"/api/public/preview/".concat(d.id)}})||[])},[o]);var v=(0,e.jsx)("div",{children:(0,e.jsx)(rt.Z,{title:"\u56FE\u7247\u4E0A\u4F20",children:(0,e.jsx)(ct.Z,{style:{minWidth:30}})})}),b=function(){var d=(0,lt.Z)(he().mark(function m(f){var p,x,C,S;return he().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:p=f.onSuccess,x=f.onError,C=f.file,S=f.onProgress,n.uploadImage(a,C,function(F){S&&S({percent:F.loaded/F.total*100})}).then(function(F){if(F.success&&p&&p(F.data),!F.success&&x){var _=new Error("Some error");x({event:_})}});case 2:case"end":return k.stop()}},m)}));return function(f){return d.apply(this,arguments)}}(),g=function(m){s(m.fileList)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(it.Z,{listType:"picture-card",accept:".jpg,.jpeg,.png,.gif,.bmp,.wbmp",customRequest:b,multiple:!0,itemRender:function(m,f,p,x){return(0,e.jsx)(ht,{file:f,onPreview:x.preview,onRemove:x.remove})},showUploadList:{showPreviewIcon:!1,downloadIcon:(0,e.jsx)(ve.Z,{}),showDownloadIcon:!0},fileList:c,iconRender:function(m){return(0,e.jsx)("a",{children:m.name})},onPreview:function(m){var f,p=((f=m.response)===null||f===void 0?void 0:f.id)||m.uid},onRemove:function(m){var f=m.uid;return de.Z.confirm({title:"\u786E\u8BA4",icon:(0,e.jsx)(dt.Z,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u56FE\u7247\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){n.deleteImage(f,a).then(function(x){x&&s(function(C){return(0,q.Z)(C.filter(function(S){var w;return((w=S.response)===null||w===void 0?void 0:w.id)||S.uid!==f}))})})}}),!1},onChange:g,children:v})})},ge=me.Z.TabPane,vt=function(t){var n=t.onCancel,o=(0,H.IE)(),a=o.images[6];return(0,j.useEffect)(function(){o.loadFiles(6)},[]),(0,e.jsx)(de.Z,{onCancel:n,visible:!0,footer:!1,closable:!1,bodyStyle:{padding:"2px 5px",height:450,overflowY:"auto"},width:650,children:(0,e.jsxs)(me.Z,{defaultActiveKey:"1",className:"img-box-modal",children:[(0,e.jsx)(ge,{tab:"\u7D20\u6750\u56FE",children:(0,e.jsx)(pe,{type:6,list:a||[]})},"bgi"),(0,e.jsx)(ge,{tab:"\u6A21\u677F",children:(0,e.jsx)(pe,{type:2,list:[]})},"hi")]})})},ft=(0,V.Pi)(vt);function pt(){var i=(0,j.useState)(!1),t=(0,T.Z)(i,2),n=t[0],o=t[1],a=W(),l=(0,j.useState)(!1),r=(0,T.Z)(l,2),c=r[0],s=r[1],v=(0,H.IE)(),b=function(){a.goPrevCanvasHistory()},g=function(){a.goNextCanvasHistory()},d=(0,j.useCallback)(function(){o(!n)},[n]),m=function(){a.emptyCanvas()},f=function(){st().toBlob(document.getElementById("canvas"),{bgcolor:"white"}).then(function(x){x.name=v.name;var C=window.URL.createObjectURL(x),S=document.createElement("a");S.href=C,S.setAttribute("download",v.name+".png"),document.body.appendChild(S),S.click(),document.body.removeChild(S)}).catch(function(x){console.log(x)})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("ul",{className:E().main,children:[(0,e.jsxs)("li",{className:E().item,onClick:function(){return s(!0)},children:[(0,e.jsx)("span",{className:"".concat(E().chooseTemplateIcon),children:(0,e.jsx)(O.MT,{infer:"Choose"})}),(0,e.jsx)("span",{className:E().txt,children:"\u7D20\u6750\u7BA1\u7406"})]}),(0,e.jsxs)("li",{className:E().item,onClick:b,children:[(0,e.jsx)("span",{className:P()(E().lastStep),children:(0,e.jsx)(O.MT,{infer:"Undo"})}),(0,e.jsx)("span",{className:E().txt,children:"\u4E0A\u4E00\u6B65"})]}),(0,e.jsxs)("li",{className:E().item,onClick:g,children:[(0,e.jsx)("span",{className:P()(E().nextStep),children:(0,e.jsx)(O.MT,{infer:"Redo"})}),(0,e.jsx)("span",{className:E().txt,children:"\u4E0B\u4E00\u6B65"})]}),(0,e.jsxs)("li",{className:E().item,onClick:m,children:[(0,e.jsx)("span",{className:P()(E().clearCanvasIcon),children:(0,e.jsx)(O.MT,{infer:"Clear"})}),(0,e.jsx)("span",{className:E().txt,children:"\u6E05\u7A7A\u753B\u5E03"})]}),(0,e.jsxs)("li",{className:P()(E().item),onClick:f,children:[(0,e.jsx)("span",{className:P()(E().releaseIcon),children:(0,e.jsx)(O.MT,{infer:"Publish"})}),(0,e.jsx)("span",{className:E().txt,children:"\u4E0B\u8F7D\u6D77\u62A5"})]})]}),n&&(0,e.jsx)(at,{openOrCloseTpl:d,globalCanvas:a}),c&&(0,e.jsx)(ft,{onCancel:function(){return s(!1)}})]})}function gt(){var i=W(),t=i.getCanvasStyle(),n=i.getCmps(),o=(0,j.useState)(null),a=(0,T.Z)(o,2),l=a[0],r=a[1],c=(0,j.useRef)();(0,j.useEffect)(function(){var g=c.current.getBoundingClientRect();r(g);var d=function(f){["canvas","root","app","content","editCmp"].indexOf(f.target.id)>-1&&i.setSelectedCmp(null)};document.getElementById("root").addEventListener("click",d)},[i]);var s=function(d){d.preventDefault(),d.stopPropagation()},v=function(d){d.preventDefault(),d.stopPropagation()},b=function(d){d.preventDefault(),d.stopPropagation();var m=d.dataTransfer.getData("add-component");if(m){m=JSON.parse(m);var f=d.pageY-l.top-15,p=d.pageX-l.left-40,x=(0,h.Z)((0,h.Z)({},m),{},{data:(0,h.Z)((0,h.Z)({},m.data),{},{style:(0,h.Z)((0,h.Z)({},m.data.style),{},{top:f,left:p})})});i.addCmp(x)}else{var C=d.dataTransfer.getData("startPos");C=JSON.parse(C);var S=d.pageX-C.pageX,w=d.pageY-C.pageY,k=i.getSelectedCmp(),F=k.data.style.top+w,_=k.data.style.left+S;i.updateSelectedCmpStyle({top:F,left:_})}};return(0,e.jsxs)("div",{id:"content",className:ce().main,children:[(0,e.jsx)(pt,{}),(0,e.jsx)("div",{className:ce().canvas,id:"canvas",style:(0,h.Z)((0,h.Z)({},L(t)),{},{backgroundImage:"url(".concat(t.backgroundImage,")")}),ref:c,onDragEnter:s,onDragOver:s,onDragLeave:v,onDrop:b,children:c.current&&n.map(function(g,d){return g.data?(0,e.jsx)(re,{index:d},g.onlyKey):null})})]})}var Ct=gt,Ce=u(32059),Y=u(97671),xt=u(15036),M=u.n(xt);function yt(i){var t=i.globalCanvas,n=t.getCanvasStyle(),o=function(l,r){var c=r.name,s=r.value;l&&(l.stopPropagation(),l.preventDefault()),t.updateCanvasStyle((0,Ce.Z)({},c,s))};return(0,e.jsx)("div",{className:M().main,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:M().title,children:[(0,e.jsx)("span",{className:"iconfont icon-shuxing".concat(" ",M().attributeIcon)}),(0,e.jsx)("span",{className:M().attribute,children:"\u753B\u5E03\u5C5E\u6027"})]}),n.width!==void 0&&(0,e.jsx)(z,{label:"\u753B\u5E03\u5BBD\u5EA6(px)",children:(0,e.jsx)("input",{className:M().itemRight,type:"number",value:n.width,onChange:function(l){return o(l,{name:"width",value:l.target.value})}})}),n.height!==void 0&&(0,e.jsx)(z,{label:"\u753B\u5E03\u9AD8\u5EA6(px)",children:(0,e.jsx)("input",{className:M().itemRight,type:"number",value:n.height,onChange:function(l){return o(l,{name:"height",value:l.target.value})}})}),n.backgroundColor!==void 0&&(0,e.jsx)(z,{label:"\u80CC\u666F\u989C\u8272",children:(0,e.jsx)(Y.ZP,{className:M().itemRight,initialValue:n.backgroundColor,onChange:function(l){return o(null,{name:"backgroundColor",value:l.hex})},placement:"right"})}),n.backgroundImage!==void 0&&(0,e.jsx)(z,{label:"\u80CC\u666F\u56FE\u7247",children:(0,e.jsx)("input",{className:M().itemRight,type:"text",value:n.backgroundImage,onChange:function(l){return o(l,{name:"backgroundImage",value:l.target.value})}})})]})})}function z(i){var t=i.label,n=i.children;return(0,e.jsxs)("div",{className:M().item,children:[(0,e.jsx)("label",{children:t}),n]})}var bt=u(73418),N=u.n(bt);function jt(i){var t=i.selectedCmp,n=i.globalCanvas,o=t.data,a=o.style,l=function(s){s.stopPropagation(),s.preventDefault();var v=s.target.value;n.updateSelectedCmpValue(v)},r=function(s,v){var b=v.name,g=v.value;s&&(s.stopPropagation(),s.preventDefault());var d=(0,Ce.Z)({},b,g);b==="animationName"&&(g===""?Object.assign(d,{animationDelay:0,animationDuration:0,animationIterationCount:0}):a.animationName||Object.assign(d,{animationDelay:0,animationDuration:1,animationIterationCount:1})),n.updateSelectedCmpStyle(d)};return(0,e.jsxs)("div",{id:"editCmp",className:N().main,children:[(0,e.jsx)("div",{className:N().title,children:t.desc}),o.value!==void 0&&(0,e.jsx)(Z,{label:t.desc==="\u56FE\u7247"?"\u56FE\u7247\u5730\u5740":"\u63CF\u8FF0",children:(0,e.jsx)("input",{className:N().itemRight,type:"text",value:o.value,onChange:function(s){return l(s)}})}),a.fontSize!==void 0&&(0,e.jsx)(Z,{label:"\u5B57\u4F53\u5927\u5C0F",children:(0,e.jsx)("input",{className:N().itemRight,type:"number",value:a.fontSize,onChange:function(s){return r(s,{name:"fontSize",value:s.target.value})}})}),["\u6587\u672C","\u6309\u94AE"].indexOf(t.desc)>-1&&(0,e.jsx)(Z,{label:"\u5B57\u4F53\u7C97\u7EC6",children:(0,e.jsxs)("select",{className:N().itemRight,value:a.fontWeight,onChange:function(s){r(s,{name:"fontWeight",value:s.target.value})},children:[(0,e.jsx)("option",{value:"normal",children:"normal"}),(0,e.jsx)("option",{value:"bold",children:"bold"}),(0,e.jsx)("option",{value:"lighter",children:"lighter"})]})}),a.lineHeight!==void 0&&(0,e.jsx)(Z,{label:"\u884C\u9AD8",children:(0,e.jsx)("input",{className:N().itemRight,type:"number",value:a.lineHeight,onChange:function(s){return r(s,{name:"lineHeight",value:s.target.value})}})}),a.textAlign!==void 0&&(0,e.jsx)(Z,{label:"\u5BF9\u9F50",children:(0,e.jsxs)("select",{className:N().itemRight,value:a.textAlign,onChange:function(s){r(s,{name:"textAlign",value:s.target.value})},children:[(0,e.jsx)("option",{value:"left",children:"\u5C45\u5DE6"}),(0,e.jsx)("option",{value:"center",children:"\u5C45\u4E2D"}),(0,e.jsx)("option",{value:"right",children:"\u5C45\u53F3\u8FB9"})]})}),a.borderRadius!==void 0&&(0,e.jsx)(Z,{label:"\u5706\u89D2",children:(0,e.jsx)("input",{className:N().itemRight,type:"text",value:a.borderRadius,onChange:function(s){return r(s,{name:"borderRadius",value:s.target.value})}})}),(0,e.jsx)(Z,{label:"\u8FB9\u6846\u6837\u5F0F",children:(0,e.jsxs)("select",{className:N().itemRight,value:a.borderStyle,onChange:function(s){r(s,{name:"borderStyle",value:s.target.value})},children:[(0,e.jsx)("option",{value:"none",children:"none"}),(0,e.jsx)("option",{value:"dashed",children:"dashed"}),(0,e.jsx)("option",{value:"dotted",children:"dotted"}),(0,e.jsx)("option",{value:"double",children:"double"}),(0,e.jsx)("option",{value:"groove",children:"groove"}),(0,e.jsx)("option",{value:"hidden",children:"hidden"}),(0,e.jsx)("option",{value:"solid",children:"solid"})]})}),(0,e.jsx)(Z,{label:"\u8FB9\u6846\u5BBD\u5EA6",children:(0,e.jsx)("input",{className:N().itemRight,type:"number",value:a.borderWidth,onChange:function(s){return r(s,{name:"borderWidth",value:s.target.value})}})}),(0,e.jsx)(Z,{label:"\u8FB9\u6846\u989C\u8272",children:(0,e.jsx)(Y.ZP,{className:N().itemRight,initialValue:a.borderColor||"#ffffff00",onChange:function(s){return r(null,{name:"borderColor",value:s.hex})},placement:"right"})}),a.color!==void 0&&(0,e.jsx)(Z,{label:"\u5B57\u4F53\u989C\u8272",children:(0,e.jsx)(Y.ZP,{className:N().itemRight,initialValue:a.color,onChange:function(s){return r(null,{name:"color",value:s.hex})},placement:"right"})}),a.backgroundColor!==void 0&&(0,e.jsx)(Z,{label:"\u80CC\u666F\u989C\u8272",children:(0,e.jsx)(Y.ZP,{className:N().itemRight,initialValue:a.backgroundColor,onChange:function(s){return r(null,{name:"backgroundColor",value:s.hex})},placement:"right"})}),(0,e.jsx)(Z,{label:"\u52A8\u753B\u540D\u79F0",children:(0,e.jsxs)("select",{className:N().itemRight,value:a.animationName,onChange:function(s){r(s,{name:"animationName",value:s.target.value})},children:[(0,e.jsx)("option",{value:"",children:"\u65E0\u52A8\u753B"}),(0,e.jsx)("option",{value:"toggle",children:"\u95EA\u70C1"}),(0,e.jsx)("option",{value:"jello",children:"\u679C\u51BB"}),(0,e.jsx)("option",{value:"shake",children:"\u6296\u52A8"}),(0,e.jsx)("option",{value:"wobble",children:"\u5DE6\u53F3\u6447\u6446"})]})}),a.animationName&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Z,{label:"\u52A8\u753B\u6301\u7EED\u65F6\u957F(s)",children:(0,e.jsx)("input",{className:N().itemRight,type:"number",value:a.animationDuration,onChange:function(s){return r(s,{name:"animationDuration",value:s.target.value})}})}),(0,e.jsxs)(Z,{label:"\u52A8\u753B\u5FAA\u73AF\u6B21\u6570",children:[(0,e.jsx)("button",{className:P()("iconfont icon-wuqiongda",{selected:a.animationIterationCount==="infinite"}),onClick:function(s){return r(s,{name:"animationIterationCount",value:a.animationIterationCount==="infinite"?1:"infinite"})}}),(0,e.jsx)("input",{className:N().itemRight,type:"number",disabled:a.animationIterationCount!=="infinite",value:a.animationIterationCount,onChange:function(s){return r(s,{name:"animationIterationCount",value:s.target.value})}})]}),(0,e.jsx)(Z,{label:"\u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4(s)",children:(0,e.jsx)("input",{className:N().itemRight,type:"number",value:a.animationDelay,onChange:function(s){return r(s,{name:"animationDelay",value:s.target.value})}})}),a.animationIterationCount==="infinite"&&(0,e.jsxs)("button",{className:N().pouseAnimation,onClick:function(s){return r(s,{name:"animationPlayState",value:a.animationPlayState!=="running"?"running":"paused"})},children:[a.animationPlayState!=="running"?"\u6682\u505C":"\u5F00\u59CB","\u52A8\u753B\u6F14\u793A"]})]})]})}function Z(i){var t=i.label,n=i.children;return(0,e.jsxs)("div",{className:N().item,children:[(0,e.jsx)("label",{children:t}),n]})}var xe=function(i){(0,ie.Z)(n,i);var t=(0,le.Z)(n);function n(){var o;(0,G.Z)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return o=t.call.apply(t,[this].concat(l)),o.onStoreChange=function(){o.forceUpdate()},o}return(0,se.Z)(n,[{key:"componentDidMount",value:function(){this.unregister=this.context.registerStoreChangeCmps(this)}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"render",value:function(){var a=this.context.getSelectedCmp();return a?(0,e.jsx)(jt,(0,h.Z)((0,h.Z)({},this.props),{},{selectedCmp:a,globalCanvas:this.context})):(0,e.jsx)(yt,{globalCanvas:this.context})}}]),n}(j.Component);xe.contextType=U;var St=function i(){var t=this;(0,G.Z)(this,i),this.cmpsEntity=void 0,this.defaultCanvas=void 0,this.canvas=void 0,this.canvasChangeHistory=void 0,this.canvasIndex=void 0,this.listeners=void 0,this.selectedCmp=void 0,this.storeChangeCmps=void 0,this.getCanvasData=function(){return(0,h.Z)({},t.canvas)},this.goPrevCanvasHistory=function(){var n=t.canvasIndex-1<0?0:t.canvasIndex-1;if(n!==t.canvasIndex&&t.canvasChangeHistory[n]){t.canvasIndex=n;var o=t.canvasChangeHistory[n];t.canvas=o,t.runListeners()}},this.goNextCanvasHistory=function(){var n=t.canvasIndex+1>t.canvasChangeHistory.length-1?t.canvasChangeHistory.length-1:t.canvasIndex+1;if(n!==t.canvasIndex&&t.canvasChangeHistory[n]){t.canvasIndex=n;var o=t.canvasChangeHistory[n];t.canvas=o,t.runListeners()}},this.recordCanvasChangeHistory=function(){t.canvasChangeHistory.push(t.canvas),t.canvasIndex=t.canvasChangeHistory.length-1},this.getCanvasStyle=function(){return(0,h.Z)({},t.canvas.style)},this.updateCanvas=function(n){t.selectedCmp=null,t.canvas=(0,h.Z)({},n),t.runListeners(),t.recordCanvasChangeHistory()},this.emptyCanvas=function(){t.canvas=(0,h.Z)({},t.defaultCanvas),t.runListeners(),t.recordCanvasChangeHistory()},this.updateCanvasStyle=function(n){var o=(0,h.Z)((0,h.Z)({},t.canvas),{},{style:(0,h.Z)((0,h.Z)({},t.getCanvasStyle()),n)});JSON.stringify(o)!==JSON.stringify(t.canvas)&&(t.canvas=o,t.runListeners(),t.recordCanvasChangeHistory())},this.registerStoreChangeCmps=function(n){return t.storeChangeCmps.push(n),function(){t.storeChangeCmps=t.storeChangeCmps.filter(function(o){return n.onlyKey!==o.onlyKey})}},this.registerCmpsEntity=function(n,o){return t.cmpsEntity.set(n,o),function(){return t.cmpsEntity.delete(n)}},this.forceCmpsUpdate=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];o.forEach(function(l){var r;(r=t.cmpsEntity.get(l.onlyKey))===null||r===void 0||r.onStoreChange()}),t.storeChangeCmps.forEach(function(l){var r=l.onStoreChange;return r()})},this.getCmp=function(n){var o=t.getCmps();return(0,h.Z)({},o[n])},this.getCmps=function(){return(0,q.Z)(t.canvas.cmps)},this.setCmps=function(n){t.canvas=(0,h.Z)((0,h.Z)({},t.canvas),{},{cmps:n})},this.updateCmps=function(n){t.setCmps(n),t.runListeners(),t.recordCanvasChangeHistory()},this.addCmp=function(n){t.selectedCmp=(0,h.Z)((0,h.Z)({},n),{},{onlyKey:ye()});var o=t.getCmps();t.updateCmps([].concat((0,q.Z)(o),[t.selectedCmp]))},this.updateCmp=function(n){for(var o=t.getCmps(),a=0;a<o.length;a++)if(o[a].onlyKey===n.onlyKey){o[a]=n;break}t.setCmps(o),t.forceCmpsUpdate(n)},this.getSelectedCmp=function(){return t.selectedCmp},this.setSelectedCmp=function(n){if(t.selectedCmp!==n){var o=[];t.selectedCmp&&o.push(t.selectedCmp),t.selectedCmp=n,t.selectedCmp&&o.push(t.selectedCmp),t.forceCmpsUpdate.apply(t,o)}},this.updateSelectedCmpStyle=function(n,o){var a=t.getSelectedCmp(),l=(0,h.Z)((0,h.Z)({},a),{},{data:(0,h.Z)((0,h.Z)({},a.data),{},{style:(0,h.Z)((0,h.Z)({},a.data.style),n)})});JSON.stringify(l)!==JSON.stringify(t.selectedCmp)&&(t.selectedCmp=l,t.updateCmp(l),o||t.recordCanvasChangeHistory())},this.updateSelectedCmpValue=function(n){var o=t.getSelectedCmp(),a=(0,h.Z)((0,h.Z)({},o),{},{data:(0,h.Z)((0,h.Z)({},o.data),{},{value:n})});t.selectedCmp=a,t.updateCmp(a),t.recordCanvasChangeHistory()},this.deleteSelectedCmp=function(n){t.setSelectedCmp(null);var o=t.getCmps();t.updateCmps(o.filter(function(a){return a.onlyKey!==n.onlyKey}))},this.changeCmpIndex=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.getCmps().length-1;if(n!==o){var a=t.getCmps(),l=a[n];a[n]=a[o],a[o]=l,t.updateCmps(a)}},this.runListeners=function(){t.listeners.forEach(function(n){return n()})},this.subscribe=function(n){return t.listeners.push(n),function(){t.listeners=t.listeners.filter(function(o){return o!==n})}},this.getCanvas=function(){var n=["getCanvasData","recordCanvasChangeHistory","goPrevCanvasHistory","goNextCanvasHistory","updateCanvas","emptyCanvas","getCanvasStyle","updateCanvasStyle","registerStoreChangeCmps","registerCmpsEntity","getCmp","getCmps","setCmps","addCmp","getSelectedCmp","setSelectedCmp","updateSelectedCmpStyle","updateSelectedCmpValue","deleteSelectedCmp","changeCmpIndex","subscribe"],o={};return n.forEach(function(a){o[a]=t[a]}),o},this.cmpsEntity=new Map,this.defaultCanvas={style:{width:320,height:568,backgroundColor:"#ffffff00",backgroundImage:"",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",boxSizing:"content-box"},cmps:[]},this.canvas=(0,h.Z)({},this.defaultCanvas),this.canvasChangeHistory=[],this.canvasIndex=-1,this.listeners=[],this.selectedCmp=null,this.storeChangeCmps=[]};function Nt(i){var t=(0,j.useRef)();if(!t.current)if(i)t.current=i;else{var n=new St;t.current=n.getCanvas()}return t.current}function Dt(){var i=Se(),t=(0,H.IE)(),n=Nt();return(0,j.useEffect)(function(){t.loadFiles(te.__.PosterImage)},[]),(0,j.useLayoutEffect)(function(){var o=n.subscribe(function(){i()});return function(){o()}},[n,i]),(0,e.jsx)("div",{className:"survey-poster",children:(0,e.jsxs)(U.Provider,{value:n,children:[(0,e.jsx)(Te,{}),(0,e.jsx)(Ct,{}),(0,e.jsx)(xe,{})]})})}}}]);
