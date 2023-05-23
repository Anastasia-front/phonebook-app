(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[351],{9351:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return un}});var r,i,o,a,c,s,u,l,d,p,f,x,h=t(9439),m=t(168),g=t(7691),b=g.ZP.section(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),v=g.ZP.h1(i||(i=(0,m.Z)(["\n  font-size: 25px;\n  margin: 20px auto;\n"]))),Z=t(184),y=function(n){var e=n.title,t=n.children;return(0,Z.jsxs)(b,{children:[(0,Z.jsx)(v,{children:e}),t]})},j=g.ZP.form(o||(o=(0,m.Z)(["\n  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);\n  background-color: rgb(245, 255, 251);\n  padding: 25px 15px 15px 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex;\n  gap: 25px;\n  width: 300px;\n"]))),w=g.ZP.label(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n"]))),C=g.ZP.form(c||(c=(0,m.Z)(["\n  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);\n  background-color: rgb(245, 255, 251);\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 25px;\n  min-width: 200px;\n  position: relative;\n"]))),k=(g.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 600px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 50px;\n  }\n"]))),g.ZP.button(u||(u=(0,m.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 50px;\n  height: 50px;\n  font-size: 40px;\n  padding-bottom: 1px;\n  padding-right: 4.5px;\n  color: white;\n  background-color: rgb(0, 137, 123);\n  border-radius: 50%;\n  border-style: none;\n  transition: transform 0.2s;\n  transition: font-size 0.2s;\n\n  &:hover {\n    box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);\n  }\n"])))),P=g.ZP.button(l||(l=(0,m.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  width: 30px;\n  height: 30px;\n  font-size: 18px;\n  font-weight: 900;\n  padding-bottom: 4px;\n  padding-right: 5.5px;\n  color: rgb(0, 137, 123);\n  background-color: white;\n  border-radius: 50%;\n  border: 1px solid rgb(0, 137, 123);\n\n  &:hover {\n    box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);\n  }\n"]))),z=g.ZP.div(d||(d=(0,m.Z)(["\n  padding: 10px 30px 30px 30px;\n  border-radius: 5px;\n  background-color: rgb(220, 255, 252);\n  position: relative;\n"]))),_=t(292),F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},A=t(9434),I=t(6052),L=function(n){return n.contacts.items},S=function(n){return n.filter.value},E=function(n){return n.contacts.isLoading},M=function(n){return n.contacts.error},T=t(1643),W=t(2791),D=t(3736);function R(n){var e=n.onClose,t=(0,A.I0)(),r=(0,A.v9)(L),i=(0,A.v9)(E),o=(0,A.v9)(M),a=(0,W.useState)(!1),c=(0,h.Z)(a,2),s=c[0],u=c[1],l=F(),d=F();return(0,Z.jsxs)(j,{onSubmit:function(n){n.preventDefault();var i=n.target,o=i.elements.name.value,a=i.elements.number.value;r.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," is already in contacts")):(u(!0),t((0,I.uK)({name:o,number:a})),i.reset(),e()),setTimeout((function(){u(!1)}),1e3)},children:[(0,Z.jsxs)(w,{htmlFor:l,style:{fontFamily:"Caveat",fontWeight:"600"},children:["Name",(0,Z.jsx)(_.Z,{color:"primary",type:"text",name:"name",id:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(w,{htmlFor:d,style:{fontFamily:"Caveat",fontWeight:"600"},children:["Number",(0,Z.jsx)(_.Z,{color:"primary",type:"tel",name:"number",id:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),s&&!o&&i?(0,Z.jsx)(D.Z,{variant:"contained",style:{margin:"0 auto"},children:(0,Z.jsx)(T.BR,{height:24,stroke:"#fff",style:{padding:"0 40px"}})}):(0,Z.jsx)(D.Z,{variant:"contained",style:{margin:"0 auto"},type:"submit",children:"Add to contact"})]})}var q,N,V,B,G,H,K=g.ZP.ul(p||(p=(0,m.Z)(["\n  margin: 0;\n  padding: 0 0 0 15px;\n  list-style-type: circle;\n"]))),O=g.ZP.li(f||(f=(0,m.Z)(["\n  display: list-item;\n  font-size: 12px;\n"]))),U=(g.ZP.button(x||(x=(0,m.Z)(["\n  background-color: #ffcec8;\n  border: 1px solid grey;\n  border-radius: 3px;\n  margin-left: 7px;\n  padding: 3px;\n  font-size: 12px;\n  height: min-content;\n  &:hover,\n  &:active,\n  &:focus {\n    background-color: teal;\n  }\n"]))),t(7247)),$=g.ZP.div(q||(q=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),J=function(n){var e=n.id,t=n.name,r=n.number,i=(0,A.v9)(M),o=(0,A.I0)(),a=(0,W.useState)(!1),c=(0,h.Z)(a,2),s=c[0],u=c[1];return(0,Z.jsxs)($,{children:[(0,Z.jsxs)("p",{style:{fontFamily:"Caveat",fontWeight:"400",fontSize:18},children:[t,": ",r]}),s&&!i?(0,Z.jsx)(D.Z,{style:{marginLeft:25,height:36},variant:"contained",children:(0,Z.jsx)(T.BR,{height:18,stroke:"#fff",style:{padding:"0.5px 10.5px"}})}):(0,Z.jsx)(D.Z,{type:"button",style:{marginLeft:25,height:36},variant:"contained",endIcon:(0,Z.jsx)(U.Z,{}),size:"small",onClick:function(){o((0,I.GK)(e)),u(!0)},children:"Delete"})]})},Q=function(){var n=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}((0,A.v9)(L),(0,A.v9)(S));return(0,Z.jsx)(K,{children:n.length?n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,Z.jsx)(O,{children:(0,Z.jsx)(J,{id:e,name:t,number:r})},e)})):(0,Z.jsx)("h3",{style:{textAlign:"center",marginLeft:70},children:"There are no contacts in your phonebook"})})},X=g.ZP.div(N||(N=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n"]))),Y=g.ZP.h3(V||(V=(0,m.Z)(["\n  font-size: 15px;\n  margin: 10px auto;\n"]))),nn=g.ZP.input(B||(B=(0,m.Z)(["\n  background-color: #f5fffb;\n  border: 1px solid #ababab;\n  border-radius: 3px;\n  width: 150px;\n  margin: 0 auto;\n"]))),en=t(4808),tn=function(){var n=(0,A.I0)();return(0,Z.jsxs)(X,{children:[(0,Z.jsx)(Y,{style:{fontFamily:"Caveat",fontWeight:"600"},children:"Find contacts by name:"}),(0,Z.jsx)(nn,{type:"text",onChange:function(e){var t;t=e.currentTarget.value,n((0,en.T)(t))}})]})},rn=t(4164),on=g.ZP.div(G||(G=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),an=g.ZP.div(H||(H=(0,m.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),cn=document.querySelector("#modal-root");function sn(n){var e=n.onClose,t=n.children;(0,W.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,rn.createPortal)((0,Z.jsx)(on,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,Z.jsx)(an,{children:t})}),cn)}var un=function(){var n=(0,A.I0)(),e=(0,A.v9)(M),t=(0,A.v9)(L),r=(0,W.useState)(!1),i=(0,h.Z)(r,2),o=i[0],a=i[1],c=function(){a(!1)};return(0,W.useEffect)((function(){n((0,I.yF)())}),[n]),(0,Z.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,Z.jsxs)(y,{title:"Contacts",children:[(0,Z.jsxs)(C,{style:{maxWidth:500},children:[(0,Z.jsx)(k,{type:"button",onClick:function(){a(!0)},children:"+"}),0!==t.length&&(0,Z.jsx)(tn,{}),!e&&(0,Z.jsx)(Q,{}),o&&(0,Z.jsx)(sn,{onClose:c,children:(0,Z.jsxs)(z,{children:[(0,Z.jsx)(P,{type:"button",onClick:c,children:"x"}),(0,Z.jsx)(y,{title:"Additor",children:(0,Z.jsx)(R,{onClose:c,style:{maxWidth:500}})})]})})]}),e&&(0,Z.jsxs)("b",{style:{margin:"10px auto",width:"50%",textAlign:"center"},children:["The operation failed with error: $",e]})]})})}},7247:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return i.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return x.Z},unstable_useId:function(){return h},unsupportedProp:function(){return m},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return Z.Z}});var r=t(5902),i=t(4036),o=t(8949).Z,a=t(9201),c=t(3199);var s=function(n,e){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var p=function(n,e){return function(){return null}},f=t(2971).Z,x=t(162),h=t(6248).Z;var m=function(n,e,t,r,i){return null},g=t(8744),b=t(9683),v=t(2071),Z=t(3031),y={configure:function(n){r.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=351.b13d4cc4.chunk.js.map