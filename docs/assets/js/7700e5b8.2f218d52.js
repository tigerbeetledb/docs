"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i="Creating accounts and transfers in the Node CLI",c={unversionedId:"usage/node-cli",id:"usage/node-cli",title:"Creating accounts and transfers in the Node CLI",description:"Once you've got the TigerBeetle server running, let's connect to the",source:"@site/pages/usage/node-cli.md",sourceDirName:"usage",slug:"/usage/node-cli",permalink:"/usage/node-cli",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/usage/node-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3-node cluster with Docker Compose",permalink:"/setup/with-docker-compose"}},s={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-accounts-and-transfers-in-the-node-cli"},"Creating accounts and transfers in the Node CLI"),(0,a.kt)("p",null,"Once you've got the TigerBeetle server running, let's connect to the\nrunning server and do some accounting!"),(0,a.kt)("p",null,"First install the Node client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"$ npm install -g tigerbeetle-node\n")),(0,a.kt)("p",null,"Then create a client connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"$ node\nWelcome to Node.js v16.14.0.\nType \".help\" for more information.\n> let { createClient } = require('tigerbeetle-node');\n> let client = createClient({ cluster_id: 0, replica_addresses: ['3000'] });\ninfo(message_bus): connected to replica 0\n")),(0,a.kt)("p",null,"Now create two accounts. (Don't worry about the details, you can\nread about them later.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> let errors = await client.createAccounts([\n  {\n    id: 1n,\n    ledger: 1,\n    code: 718,\n    user_data: 0n,\n    reserved: Buffer.alloc(48, 0),\n    flags: 0,\n    debits_pending: 0n,\n    debits_posted: 0n,\n    credits_pending: 0n,\n    credits_posted: 0n,\n    timestamp: 0n,\n  },\n  {\n    id: 2n,\n    ledger: 1,\n    code: 718,\n    user_data: 0n,\n    reserved: Buffer.alloc(48, 0),\n    flags: 0,\n    debits_pending: 0n,\n    debits_posted: 0n,\n    credits_pending: 0n,\n    credits_posted: 0n,\n    timestamp: 0n,\n  },\n]);\n> errors\n[]\n")),(0,a.kt)("p",null,"Now create a transfer of ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," (of some amount/currency) between the two accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> errors = await client.createTransfers([\n  {\n    id: 1n,\n    debit_account_id: 1n,\n    credit_account_id: 2n,\n    pending_id: 0n,\n    user_data: 0n,\n    reserved: 0n,\n    timeout: 0n,\n    ledger: 1,\n    code: 718,\n    flags: 0,\n    amount: 10n,\n    timestamp: 0n,\n  }\n]);\n")),(0,a.kt)("p",null,"Now, the amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," has been credited to account ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and debited\nfrom account ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". Let's query TigerBeetle for these two accounts to\nverify!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> let accounts = await client.lookupAccounts([1n, 2n]);\n> console.log(accounts.map(a => ({\n    id: a.id,\n    debits_posted: a.debits_posted,\n    credits_posted: a.credits_posted,\n    timestamp: a.timestamp,\n  })));\n[\n  {\n    id: 1n,\n    debits_posted: 10n,\n    credits_posted: 0n,\n    timestamp: 1662489240014463675n\n  },\n  {\n    id: 2n,\n    debits_posted: 0n,\n    credits_posted: 10n,\n    timestamp: 1662489240014463676n\n  }\n]\n")),(0,a.kt)("p",null,"And indeed you can see that account ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),"\nand account ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," amount is fully\naccounted for!"))}p.isMDXComponent=!0}}]);