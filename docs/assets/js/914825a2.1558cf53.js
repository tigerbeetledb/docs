"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"/",sidebar_position:1},l="Getting started",o={unversionedId:"intro",id:"intro",title:"Getting started",description:"TigerBeetle is a distributed financial accounting database designed",source:"@site/pages/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Single-node cluster with Docker",permalink:"/deployment/with-docker"}},c={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"TigerBeetle is a distributed financial accounting database designed\nfor mission critical safety and performance."),(0,a.kt)("h1",{id:"running-tigerbeetle"},"Running TigerBeetle"),(0,a.kt)("p",null,"To get TigerBeetle up-and-running locally, check out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deployment/with-docker"},"Run a single-node cluster with Docker")),(0,a.kt)("li",{parentName:"ul"},"Or ",(0,a.kt)("a",{parentName:"li",href:"/deployment/from-source"},"run a single-node cluster from source")),(0,a.kt)("li",{parentName:"ul"},"Or ",(0,a.kt)("a",{parentName:"li",href:"/deployment/with-docker-compose"},"run a three-node cluster with docker-compose"))),(0,a.kt)("h1",{id:"using-tigerbeetle"},"Using TigerBeetle"),(0,a.kt)("p",null,"Once you've got a TigerBeetle server, check out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/usage/node-cli"},"Creating accounts and transfers in the Node CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/usage/integration"},"Integrating TigerBeetle with an application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/usage/data-modeling"},"Modeling application data within TigerBeetle"))),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("p",null,"To understand TigerBeetle's data model, see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/accounts"},"Accounts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/transfers"},"Transfers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/"},"Operations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"create_accounts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"create_transfers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/lookup_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"lookup_accounts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/lookup_transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"lookup_transfers")))))),(0,a.kt)("h1",{id:"community"},"Community"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/tigerbeetledb"},"Twitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetledb/tigerbeetle"},"GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/tigerbeetle/shared_invite/zt-1gf3qnvkz-GwkosudMCM3KGbGiSu87RQ"},"Slack"))))}s.isMDXComponent=!0}}]);