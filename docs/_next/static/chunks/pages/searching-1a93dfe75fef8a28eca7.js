(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{9799:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(5893),i=n(6156),s=n(7294),o=n(9985),c=n(6447),a=n(7812),l=n(7794),u=n(3957),h=n(64),d=n(6430),f=n(5446);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t){var e=(0,s.useState)(t.default),n=e[0],i=e[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{children:Object.values(n).map((function(e,s){return(0,r.jsx)(o.Z,{value:e,type:"number",onChange:function(e){var r=x({},n);r[s]=parseInt(e.target.value.slice(0,18))||0,i(r),t.onChange(Object.values(r))},style:{width:"6.2rem",margin:"0.7rem",padding:"0.8rem",backgroundColor:"rgba(201, 255, 218, 0.8)",borderRadius:"0.5rem"}},s)}))}),(0,r.jsxs)("div",{className:"m-4",children:[(0,r.jsx)(c.ZP,{title:"Add Element",children:(0,r.jsx)(a.Z,{style:x(x({},f.Y4),{},{backgroundColor:"rgba(0, 200, 0, 0.07)"}),onClick:function(){var e=Object.values(x({},n));e.push(Math.ceil(15*(Math.random()-.3))),i(Object.values(e)),t.onChange(Object.values(e))},children:(0,r.jsx)(u.Z,{})})}),(0,r.jsx)(c.ZP,{title:"Remove Last Element",children:(0,r.jsx)(a.Z,{style:x(x({},f.Y4),{},{marginLeft:"40px",backgroundColor:"rgba(0, 200, 0, 0.07)"}),onClick:function(){var e=x({},Object.values(n).slice(0,-1));i(e),t.onChange(Object.values(e))},children:(0,r.jsx)(h.Z,{})})}),(0,r.jsx)(c.ZP,{title:"Randomize",children:(0,r.jsx)(a.Z,{style:x(x({},f.Y4),{},{marginLeft:"40px",backgroundColor:"rgba(0, 200, 0, 0.07)"}),onClick:function(){for(var e=Math.floor(11*Math.random())+2,n=[],r=0;r<e;r++)n.push(Math.floor(15*(Math.random()-.4)));i(n),t.onChange(Object.values(n))},children:(0,r.jsx)(d.Z,{})})})]})]})}},2148:function(t,e,n){"use strict";n.d(e,{J:function(){return p}});var r=n(5893),i=n(6156),s=n(5258),o=n(8358),c=n(2318),a=n(1664),l=n(8459),u=n.n(l),h=n(4222),d=n(5446),f=n(9359);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(){return(0,r.jsx)(s.Z,{position:"sticky",color:"transparent",className:u().Nav,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(c.Z,{variant:"h4",style:x(x({paddingRight:"40px",fontWeight:"bold"},d.SW),{},{color:"#ec5c5c"}),children:h.A})})}),(0,r.jsx)(a.default,{href:"/sorting",children:(0,r.jsx)("a",{children:(0,r.jsxs)(c.Z,{variant:"h6",style:x({paddingRight:"40px"},d.SW),children:[(0,r.jsx)(f.I3,{children:"Sorting Visualization"}),(0,r.jsx)(f.$,{children:"Sorting"})]})})}),(0,r.jsx)(a.default,{href:"/searching",children:(0,r.jsx)("a",{children:(0,r.jsxs)(c.Z,{variant:"h6",style:x({paddingRight:"40px"},d.SW),children:[(0,r.jsx)(f.I3,{children:"Searching Visualization"}),(0,r.jsx)(f.$,{children:"Searching"})]})})})]})})}},4222:function(t,e,n){"use strict";n.d(e,{A:function(){return r},p:function(){return i}});var r="Algo-Wiz",i=[3,4,2,1,2]},5446:function(t,e,n){"use strict";n.d(e,{Y4:function(){return o},CH:function(){return c},SW:function(){return a},w:function(){return l},lG:function(){return u}});var r=n(6610),i=n(5991),s=n(6156),o={border:"none",outline:"none",marginLeft:"10px"},c={fontFamily:"roboto"},a={fontFamily:"Pangolin, cursive"},l={fontFamily:"Open Sans, sans-serif"},u=function(){function t(e){(0,r.Z)(this,t),(0,s.Z)(this,"values",void 0),(0,s.Z)(this,"current",void 0),(0,s.Z)(this,"index",void 0),this.values=e,this.current=this.values[0]||{list:[],why:""},this.index=0}return(0,i.Z)(t,[{key:"validate",value:function(){this.index=Math.min(Math.max(0,this.index),this.values.length-1)}},{key:"next",value:function(){return this.index++,this.validate(),this.current=this.values[this.index],this}},{key:"back",value:function(){return this.index--,this.validate(),this.current=this.values[this.index],this}},{key:"start",value:function(){return this.index=0,this.validate(),this.current=this.values[this.index],this}},{key:"end",value:function(){return this.index=this.values.length-1,this.validate(),this.current=this.values[this.index],this}}]),t}()},8579:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(6156),i=n(5893),s=n(7294),o=n(7794),c=n(9008),a=n(2148),l=n(2088),u=n.n(l),h=n(9985),d=n(282),f=n(2318),j=n(6447),x=n(7812),p=n(5446),v=n(8121),y=n(8042),g=n(8104),b=n(1514),m=n(4222),O=n(9799);function Z(t){return t.map((function(t){return{Value:t.Value,Key:t.Key,Color:t.Color}}))}function w(t){return t.map((function(t){return{Value:t.Value,Key:t.Key,Color:t.Color}}))}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(){var t=(0,s.useState)(m.p),e=t[0],n=t[1],r=(0,s.useState)(new p.lG([])),l=r[0],C=r[1],P=(0,s.useState)(5),k=P[0],S=P[1],D=(0,s.useState)([]),N=D[0],V=D[1],E=(0,s.useState)(""),M=E[0],L=E[1];function B(t){return function(){t.bind(l)(),V(l.current.list),L(l.current.why)}}function I(t){var n=[];S(5),"linear"==t?n=function(t,e){t=function(t){return t.map((function(t,e){return{Value:t,Key:e,Color:"#fce8d8"}}))}(t);var n=[];n.push({list:Z(t),why:"Starting Position"});for(var r=0;r<t.length;r++){if(t[r].Value==e){var i=Z(t);i[r].Color="#c0deff",n.push({list:i,why:"".concat(t[r].Value," == ").concat(e,", Matched!")});break}var s=Z(t);s[r].Color="#c0deff",n.push({list:s,why:"".concat(t[r].Value," != ").concat(e,", Mismatch!")})}return n.push({list:Z(t),why:"Done"}),n}(e,k):"binary"==t&&(n=function(t,e){t=function(t){return t.map((function(t,e){return{Value:t,Key:e,Color:"#fce8d8"}}))}(t);var n=[];n.push({list:w(t),why:"Starting Position"});for(var r=0,i=t.length-1,s=0;r<=i;){if(s=Math.floor(r+(i-r)/2),console.log(s),t[s].Value==e){var o=w(t);o[r].Color="#fd79a8",o[i].Color="#fd79a8",o[s].Color="#55efc4",n.push({list:o,why:"".concat(t[s].Value," == ").concat(e,", Matched!")});break}if(t[s].Value>e){var c=w(t);c[r].Color="#fd79a8",c[i].Color="#fd79a8",c[s].Color="#55efc4",n.push({list:c,why:"".concat(t[s].Value," > ").concat(e,", Mismatch , Adjusting Right Bound!")}),i=s-1}else{var a=w(t);a[r].Color="#fd79a8",a[i].Color="#fd79a8",a[s].Color="#55efc4",n.push({list:a,why:"".concat(t[s].Value," < ").concat(e,", Mismatch , Adjusting Left Bound!")}),r=s+1}}return t[s].Value!=e&&n.push({list:w(t),why:"Element was not found!"}),n.push({list:w(t),why:"Done"}),n}(e,k)),console.log(n),n=n.map((function(t){return{list:t.list.map((function(t){return{n:t.Value,key:t.Key,color:t.Color}})),why:t.why}})),C(new p.lG(n))}return(0,s.useEffect)((function(){V(l.current.list),L(l.current.why)}),[l]),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.default,{children:(0,i.jsxs)("title",{children:[m.A," - Searching Visualizing"]})}),(0,i.jsx)(a.J,{}),(0,i.jsxs)("div",{className:u().cardInputDiv,children:[(0,i.jsx)(h.Z,{id:"filled-basic",color:"primary",label:"Target Element",variant:"filled",size:"small",value:"".concat(k),onChange:function(t){return S(Number(t.target.value))}}),(0,i.jsx)(O.Z,{default:m.p,onChange:n}),(0,i.jsx)("br",{}),(0,i.jsx)(d.Z,{style:_({},p.Y4),className:u().sortButton,onClick:function(){return I("linear")},children:(0,i.jsx)(f.Z,{className:u().sortButtonText,children:(0,i.jsx)("b",{children:"Linear Search"})})}),(0,i.jsx)(d.Z,{style:_(_({},p.Y4),{},{marginLeft:"20px"}),className:u().sortButton,onClick:function(){return I("binary")},children:(0,i.jsx)(f.Z,{className:u().sortButtonText,children:(0,i.jsx)("b",{children:"Binary Search"})})})]}),(0,i.jsxs)("div",{className:u().cardDiv,children:[(0,i.jsx)(o.Z,{className:u().resultDiv,children:N?N.map((function(t){return(0,i.jsx)("div",{className:u().resultItem,style:{height:String(5+1.1*N.map((function(t){return t.n})).sort((function(t,e){return t-e})).indexOf(t.n))+"rem",backgroundColor:t.color},children:(0,i.jsx)(f.Z,{style:_({},p.w),className:"text-center",children:t.n})},t.key)})):null}),(0,i.jsxs)("div",{children:[(0,i.jsx)(f.Z,{style:_({},p.CH),className:"text-center",children:M}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:u().navigation,children:[(0,i.jsx)(j.ZP,{title:"Reset",children:(0,i.jsx)(x.Z,{style:_(_({},p.Y4),{},{marginLeft:"10px"}),onClick:B(l.start),children:(0,i.jsx)(b.Z,{})})}),(0,i.jsx)(j.ZP,{title:"Previous Step",children:(0,i.jsx)(x.Z,{style:_(_({},p.Y4),{},{marginLeft:"10px"}),onClick:B(l.back),children:(0,i.jsx)(y.Z,{})})}),(0,i.jsx)(j.ZP,{title:"Next Step",children:(0,i.jsx)(x.Z,{style:_(_({},p.Y4),{},{marginLeft:"10px"}),onClick:B(l.next),children:(0,i.jsx)(v.Z,{})})}),(0,i.jsx)(j.ZP,{title:"Last Step",children:(0,i.jsx)(x.Z,{style:_(_({},p.Y4),{},{marginLeft:"10px"}),onClick:B(l.end),children:(0,i.jsx)(g.Z,{})})})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})}},8315:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/searching",function(){return n(8579)}])},8459:function(t){t.exports={Nav:"nav_Nav__2-SEC"}},2088:function(t){t.exports={cardDiv:"sort_cardDiv__2GG-V",cardInputDiv:"sort_cardInputDiv__3SnUO",sortButton:"sort_sortButton__27P-d",sortButtonText:"sort_sortButtonText__cSZhy",resultDiv:"sort_resultDiv__s7th8",resultItem:"sort_resultItem__3gIxI",navigation:"sort_navigation__TW6Hg",text_center:"sort_text_center__EXwCJ"}}},function(t){t.O(0,[774,351,402,875],(function(){return e=8315,t(t.s=e);var e}));var e=t.O();_N_E=e}]);