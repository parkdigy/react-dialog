"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[218],{3388:(e,n,t)=>{t.d(n,{i:()=>ce});var r=t(6551),a=t(9252),o=t(8e3),i=t(7899),l=t(1887),c=t(4315),m=t(5362),u=t(2861),s=t(9552),f=t(8957),d=t(8392),p=t(6436),g=t(4960),h=t(9431),x=t(2981),y=t(280),A=t(7810),b=t(2261),E=t(2297),v=t(9499),k=t(8498),w=t(2913),C=function(){return C=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},C.apply(this,arguments)};function z(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var S,V,_,O,I,M,P,B,j,Z,D,L,T=(0,r.Ay)(E.A)(S||(S=z(["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"],["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"]))),F=(0,r.Ay)(a.A)(V||(V=z(["\n  min-width: 30px;\n"],["\n  min-width: 30px;\n"]))),G=function(e){var n=e.info,t=e.badgeVariant,r=e.expandedBackgroundColor,a=(0,b.zy)(),u=(0,b.Zp)(),s=(0,A.useState)(!1),f=s[0],d=s[1],p=(0,A.useState)(!1),g=p[0],h=p[1];return(0,A.useEffect)((function(){d((0,k.z2)(n.items)),n.items&&n.items.find((function(e){return a.pathname===e.uri}))&&h(!0)}),[n]),(0,A.useEffect)((function(){f&&null!=g&&n.uri!==a.pathname&&n.items&&!n.items.find((function(e){return a.pathname===e.uri}))&&g&&h(!1),f&&!g&&n.items&&n.items.find((function(e){return a.pathname===e.uri}))&&h(!0)}),[a]),A.createElement(A.Fragment,null,A.createElement(o.A,{onClick:f?function(){return h((function(e){return!e}))}:function(){return n.uri&&u(n.uri)},selected:!f&&n.uri===a.pathname,style:{backgroundColor:f&&g?r:void 0}},A.createElement(F,null,n.icon&&A.createElement(i.A,{fontSize:"small"},n.icon)),A.createElement(l.A,{primaryTypographyProps:{style:{fontWeight:1===n.depth?600:void 0}}},n.badge?A.createElement(c.A,{badgeContent:n.badge,color:"error",variant:void 0!==t?t:n.badgeVariant,anchorOrigin:{horizontal:"left",vertical:"top"},slotProps:{badge:{style:{left:"100%",top:"50%",transform:"scale(.8) translate(10px, -50%)"}}}},A.createElement("div",null,n.name)):n.name),f&&A.createElement(T,{sx:{animation:"".concat(g?"open":"close"," 0.1s linear"),transform:"rotate(".concat(g?180:0,"deg)")}})),f&&A.createElement(m.A,{in:g,style:{backgroundColor:g?r:void 0}},n.items&&n.items.map((function(e,n){return A.createElement(G,{key:n,badgeVariant:t,info:e})}))))},H=(0,r.Ay)(u.A)(_||(_=z(["\n  padding: 0;\n"],["\n  padding: 0;\n"]))),N=A.memo((function(e){var n=e.list,t=e.badgeVariant,r=(0,s.A)(),a=n.map((function(e){return C(C({},e),{icon:e.icon?e.icon.replace(/[A-Z]/g,(function(e,n){return"".concat(n>0?"_":"").concat(e.toLowerCase())})):void 0})})),o=(0,f.X4)(r.palette.primary.main,r.palette.action.selectedOpacity/2);return A.createElement(H,null,a.map((function(e,n){return A.createElement(G,{key:n,info:e,badgeVariant:t,expandedBackgroundColor:o})})))})),W=(0,r.Ay)(w.A)(O||(O=z(["\n  max-height: 100%;\n"],["\n  max-height: 100%;\n"]))),X=(0,r.Ay)(d.A)((function(e){return e.theme.unstable_sx({borderBottom:"thin solid #f5f5f5",color:"text.primary"})})),q=A.memo((function(e){var n=e.logo,t=e.badgeVariant,r=e.list;return A.createElement(W,null,A.createElement(X,null,A.createElement(p.A,null,n)),r&&A.createElement(N,{badgeVariant:t,list:r}))})),J=(0,r.Ay)(d.A)(I||(I=z(["\n  position: relative;\n"],["\n  position: relative;\n"]))),K=(0,r.Ay)(d.A)((function(e){return e.theme.unstable_sx({display:{xs:"none",sm:"flex"},alignItems:"center",opacity:.5})})),Q=(0,r.Ay)(d.A)(M||(M=z(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"],["\n  margin-right: 0.25rem;\n  line-height: 0;\n"]))),R=(0,r.Ay)(i.A)(P||(P=z(["\n  font-size: 1rem;\n"],["\n  font-size: 1rem;\n"]))),U=(0,r.Ay)(g.A)(B||(B=z(["\n  font-size: 0.7rem;\n"],["\n  font-size: 0.7rem;\n"]))),Y=(0,r.Ay)("div")(j||(j=z(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"],["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"]))),$=(0,r.Ay)("div")(Z||(Z=z(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"],["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"]))),ee=A.memo((function(e){var n=e.title,t=e.icon,r=e.headTitle,a=e.headIcon,o=a?a.replace(/[A-Z]/g,(function(e,n){return"".concat(n>0?"_":"").concat(e.toLowerCase())})):void 0,l=t?t.replace(/[A-Z]/g,(function(e,n){return"".concat(n>0?"_":"").concat(e.toLowerCase())})):void 0;return A.createElement(J,null,r&&A.createElement(K,null,o&&A.createElement(Q,null,A.createElement(R,null,o)),A.createElement(U,null,r)),A.createElement(Y,null,l&&A.createElement($,null,A.createElement(i.A,{fontSize:"small"},l)),A.createElement("div",null,n)))})),ne=220,te=(0,r.Ay)(d.A)(D||(D=z(["\n  display: flex;\n  height: 100%;\n"],["\n  display: flex;\n  height: 100%;\n"]))),re=(0,r.Ay)(h.A)((function(e){return e.theme.unstable_sx({backdropFilter:"blur(20px)",backgroundColor:"rgba(255, 255, 255, 0.7)",color:"text.primary",borderBottom:"thin solid #f5f5f5"})})),ae=(0,r.Ay)(x.Ay)((function(e){return e.theme.unstable_sx({"& .MuiDrawer-paper":{boxSizing:"border-box",width:ne}})})),oe=(0,r.Ay)(x.Ay)((function(e){return e.theme.unstable_sx({"& .MuiDrawer-paper":{boxSizing:"border-box",width:ne}})})),ie=(0,r.Ay)("div")(L||(L=z(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"],["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]))),le=["xs","sm","md","lg","xl"],ce=function(e){var n,t,r,a,o,i,l=e.children,c=e.logo,m=e.badgeVariant,u=e.menu,s=e.menuHideScreen,f=void 0===s?"sm":s,h=e.appBarControl,x=(0,b.zy)(),E=(0,A.useState)(!1),w=E[0],C=E[1],z=(0,A.useState)({}),S=z[0],V=z[1];(0,A.useEffect)((function(){var e={};u&&u.forEach((function(n){(0,k.Ie)(n.uri)&&n.items&&n.items.length>0?n.items.map((function(t){e[t.uri]={name:t.name,parentName:n.name,parentIcon:n.icon}})):n.uri&&(e[n.uri]={name:n.name,icon:n.icon})})),V(e)}),[u]),(0,A.useEffect)((function(){C(!1)}),[x]);var _,O=(0,A.useCallback)((function(){C((function(e){return!e}))}),[]),I=(0,A.useMemo)((function(){var e=!1;return{display:le.reduce((function(n,t){return t===f?(e=!0,n[t]="block"):n[t]=e?"none":"block",n}),{})}}),[f]),M=(0,A.useMemo)((function(){var e=!1;return{display:le.reduce((function(n,t){return t===f?(e=!0,n[t]="none"):n[t]=e?"block":"none",n}),{})}}),[f]),P="xs"===(_=f)?"sm":"sm"===_?"md":"md"===_?"lg":"xl",B={width:(n={},n[P]="calc(100% - ".concat(ne,"px)"),n),ml:(t={},t[P]="".concat(ne,"px"),t)},j={mr:2,display:(r={},r[P]="none",r)},Z={width:(a={},a[P]=ne,a),flexShrink:(o={},o[P]=0,o)},D={width:(i={},i[P]="calc(100% - ".concat(ne,"px)"),i),flexGrow:1,p:2,display:"flex",flexDirection:"column",minHeight:"100vh"},L=S[x.pathname];return A.createElement(te,null,A.createElement(re,{position:"fixed",elevation:0,sx:B},A.createElement(p.A,null,A.createElement(y.A,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:O,sx:j},A.createElement(v.A,null)),A.createElement(g.A,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1}},L&&A.createElement(ee,{title:L.name,icon:L.icon,headTitle:L.parentName,headIcon:L.parentIcon})),h)),A.createElement(d.A,{component:"nav","aria-label":"mailbox folders",sx:Z},A.createElement(ae,{variant:"temporary",open:w,onClose:O,sx:I,ModalProps:{keepMounted:!0}},u&&A.createElement(q,{logo:c,badgeVariant:m,list:u})),A.createElement(oe,{variant:"permanent",open:!0,sx:M},u&&A.createElement(q,{logo:c,badgeVariant:m,list:u}))),A.createElement(d.A,{component:"main",sx:D},A.createElement(p.A,null),A.createElement(ie,null,l)))}}}]);