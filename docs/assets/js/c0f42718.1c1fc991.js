"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},s="Accounts",l={unversionedId:"reference/accounts",id:"reference/accounts",title:"Accounts",description:"An Account is a record storing the cumulative effect of committed",source:"@site/pages/reference/accounts.md",sourceDirName:"reference",slug:"/reference/accounts",permalink:"/reference/accounts",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/reference/accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating accounts and transfers in the Node CLI",permalink:"/usage/node-cli"},next:{title:"Transfers",permalink:"/reference/transfers"}},o={},c=[{value:"Updates",id:"updates",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>user_data</code>",id:"user_data",level:3},{value:"<code>reserved</code>",id:"reserved",level:3},{value:"<code>ledger</code>",id:"ledger",level:3},{value:"<code>code</code>",id:"code",level:3},{value:"<code>flags</code>",id:"flags",level:3},{value:"<code>flags.linked</code>",id:"flagslinked",level:4},{value:"<code>flags.debits_must_not_exceed_credits</code>",id:"flagsdebits_must_not_exceed_credits",level:4},{value:"<code>flags.credits_must_not_exceed_debits</code>",id:"flagscredits_must_not_exceed_debits",level:4},{value:"<code>debits_pending</code>",id:"debits_pending",level:3},{value:"<code>debits_posted</code>",id:"debits_posted",level:3},{value:"<code>credits_pending</code>",id:"credits_pending",level:3},{value:"<code>credits_posted</code>",id:"credits_posted",level:3},{value:"<code>timestamp</code>",id:"timestamp",level:3},{value:"Internals",id:"internals",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," is a record storing the cumulative effect of committed\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers"},"transfers"),"."),(0,a.kt)("p",null,"TigerBeetle uses the same data structures internally and\nexternally. This means that sometimes you need to set temporary values\nfor fields that TigerBeetle, not you (the user), are responsible."),(0,a.kt)("h3",{id:"updates"},"Updates"),(0,a.kt)("p",null,"Account fields ",(0,a.kt)("em",{parentName:"p"},"cannot be changed by the user")," after\ncreation. However, debits and credits fields are updated by\nTigerBeetle as transfers move money to and from an account."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,"This is a unique, client-defined identifier for the account."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero or ",(0,a.kt)("inlineCode",{parentName:"li"},"2^128 - 1")," (the highest 128-bit unsigned integer)"),(0,a.kt)("li",{parentName:"ul"},"Must not conflict with another account")),(0,a.kt)("h3",{id:"user_data"},(0,a.kt)("inlineCode",{parentName:"h3"},"user_data")),(0,a.kt)("p",null,"This is an optional secondary identifier to link this account to an\nexternal entity."),(0,a.kt)("p",null,"As an example, you might use a UUID that ties together a group of\naccounts."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)")),(0,a.kt)("h3",{id:"reserved"},(0,a.kt)("inlineCode",{parentName:"h3"},"reserved")),(0,a.kt)("p",null,"This space may be used for additional data in the future."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 48 bytes"),(0,a.kt)("li",{parentName:"ul"},"Must be zero")),(0,a.kt)("h3",{id:"ledger"},(0,a.kt)("inlineCode",{parentName:"h3"},"ledger")),(0,a.kt)("p",null,"This is an identifier that partitions the sets of accounts that can\ntransact with each other. Put another way, money cannot transfer\nbetween two accounts with different ",(0,a.kt)("inlineCode",{parentName:"p"},"ledger")," values. See:\n",(0,a.kt)("inlineCode",{parentName:"p"},"errors.accounts_must_have_the_same_ledger"),"."),(0,a.kt)("p",null,"In a typical use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Map each currency tracked within the database to a distinct ledger. And,"),(0,a.kt)("li",{parentName:"ul"},"Tag each account with the ",(0,a.kt)("inlineCode",{parentName:"li"},"ledger")," indicating the currency in which the balance is denominated.")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero")),(0,a.kt)("h3",{id:"code"},(0,a.kt)("inlineCode",{parentName:"h3"},"code")),(0,a.kt)("p",null,"This is a user-defined enum denoting the category of the account."),(0,a.kt)("p",null,"As an example, you might use codes ",(0,a.kt)("inlineCode",{parentName:"p"},"1000"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"3340")," to indicate asset\naccounts in general, where ",(0,a.kt)("inlineCode",{parentName:"p"},"1001")," is Bank Account and ",(0,a.kt)("inlineCode",{parentName:"p"},"1002")," is Money\nMarket Account and ",(0,a.kt)("inlineCode",{parentName:"p"},"2003")," is Motor Vehicles and so on."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 16-bit unsigned integer (2 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero")),(0,a.kt)("h3",{id:"flags"},(0,a.kt)("inlineCode",{parentName:"h3"},"flags")),(0,a.kt)("p",null,"A bitfield that toggles additional behavior."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 16-bit unsigned integer (2 bytes)")),(0,a.kt)("h4",{id:"flagslinked"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.linked")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," flag is specified, it links an account with the next\naccount in the batch, to create a chain of accounts, of arbitrary\nlength, which all succeed or fail in creation together. The tail of a\nchain is denoted by the first account without this flag. The last\naccount in a batch may therefore never have ",(0,a.kt)("inlineCode",{parentName:"p"},"flags.linked")," set as\nthis would leave a chain open-ended."),(0,a.kt)("p",null,"Multiple chains or individual accounts may coexist within a batch to\nsucceed or fail independently. Accounts within a chain are executed\nin order, or are rolled back on error, so that the effect of each\naccount in the chain is visible to the next, and so that the chain is\neither visible or invisible as a unit to subsequent accounts after the\nchain. The account that was the first to break the chain will have a\nunique error result. Other accounts in the chain will have their error\nresult set to ",(0,a.kt)("inlineCode",{parentName:"p"},"linked_event_failed"),"."),(0,a.kt)("h4",{id:"flagsdebits_must_not_exceed_credits"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.debits_must_not_exceed_credits")),(0,a.kt)("p",null,"When set, transfers will be rejected that would cause this account's\ndebits to exceed credits. Specifically when ",(0,a.kt)("inlineCode",{parentName:"p"},"account.debits_pending +\naccount.debits_posted + transfer.amount > account.credits_posted"),"."),(0,a.kt)("p",null,"This cannot be set when ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_must_not_exceed_debits")," is also set."),(0,a.kt)("h4",{id:"flagscredits_must_not_exceed_debits"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.credits_must_not_exceed_debits")),(0,a.kt)("p",null,"When set, transfers will be rejected that would cause this account's\ncredits to exceed debits. Specifically when ",(0,a.kt)("inlineCode",{parentName:"p"},"account.credits_pending +\naccount.credits_posted + transfer.amount > account.debits_posted"),"."),(0,a.kt)("p",null,"This cannot be set when ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_must_not_exceed_credits")," is also set."),(0,a.kt)("h3",{id:"debits_pending"},(0,a.kt)("inlineCode",{parentName:"h3"},"debits_pending")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," counts debits reserved by pending transfers. When a pending transfer posts, voids, or times out, the amount is removed from ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending"),"."),(0,a.kt)("p",null,"Money in ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," is reserved \u2014 that is, it cannot be spent until the corresponding pending transfer finishes."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be zero when the account is created")),(0,a.kt)("h3",{id:"debits_posted"},(0,a.kt)("inlineCode",{parentName:"h3"},"debits_posted")),(0,a.kt)("p",null,"Amount of posted debits."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be zero when the account is created")),(0,a.kt)("h3",{id:"credits_pending"},(0,a.kt)("inlineCode",{parentName:"h3"},"credits_pending")),(0,a.kt)("p",null,"Amount of pending credits."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be zero when the account is created")),(0,a.kt)("h3",{id:"credits_posted"},(0,a.kt)("inlineCode",{parentName:"h3"},"credits_posted")),(0,a.kt)("p",null,"Amount of posted credits."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be zero when the account is created")),(0,a.kt)("h3",{id:"timestamp"},(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp")),(0,a.kt)("p",null,"This is the time the account was created, as nanoseconds since\nUNIX epoch."),(0,a.kt)("p",null,"It is set by TigerBeetle to the moment the account arrives at\nthe cluster."),(0,a.kt)("p",null,"Additionally, all timestamps are unique, immutable and ",(0,a.kt)("a",{parentName:"p",href:"http://book.mixu.net/distsys/time.html"},"totally\nordered"),'. So an account that\nis created before another account is guaranteed to have an earlier\ntimestamp. In other systems this is also called a "physical"\ntimestamp, "ingestion" timestamp, "record" timestamp, or "system"\ntimestamp.'),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"User sets to zero on creation")),(0,a.kt)("h2",{id:"internals"},"Internals"),(0,a.kt)("p",null,"If you're curious and want to learn more, you can find the source code\nfor this struct in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/tigerbeetle.zig"},"src/tigerbeetle.zig"),". Search\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"const Account = extern struct {"),"."),(0,a.kt)("p",null,"You can find the source code for creating an account in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/state_machine.zig"},"src/state_machine.zig"),". Search\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"fn create_account("),"."))}u.isMDXComponent=!0}}]);