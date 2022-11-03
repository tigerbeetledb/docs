"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},s="Integration",l={unversionedId:"usage/integration",id:"usage/integration",title:"Integration",description:"TigerBeetle is designed to guard against bugs not only in its",source:"@site/pages/usage/integration.md",sourceDirName:"usage",slug:"/usage/integration",permalink:"/usage/integration",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/usage/integration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Modeling",permalink:"/usage/data-modeling"},next:{title:"Currency Exchange",permalink:"/recipes/currency-exchange"}},o={},c=[{value:"Consistency",id:"consistency",level:2},{value:"Client Sessions",id:"client-sessions",level:4},{value:"Requests",id:"requests",level:4},{value:"Events",id:"events",level:4},{value:"Accounts",id:"accounts",level:4},{value:"Transfers",id:"transfers",level:4},{value:"Reply Order",id:"reply-order",level:3},{value:"Example",id:"example",level:4},{value:"Retries",id:"retries",level:3},{value:"Consistency with Foreign Databases",id:"consistency-with-foreign-databases",level:3},{value:"Example",id:"example-1",level:4},{value:"Client Sessions",id:"client-sessions-1",level:2},{value:"Client Session Lifecycle",id:"client-session-lifecycle",level:3},{value:"Client Session Eviction",id:"client-session-eviction",level:3},{value:"Requests",id:"requests-1",level:2},{value:"Batching Events",id:"batching-events",level:3},{value:"API Layer Architecture",id:"api-layer-architecture",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration"},"Integration"),(0,a.kt)("p",null,"TigerBeetle is designed to guard against bugs not only in its\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/TIGER_STYLE.md"},"own code"),", but\nat the boundaries, in the application code which interfaces with TigerBeetle.\nThis is exhibited by the client's API design, which may be surprising (see ",(0,a.kt)("a",{parentName:"p",href:"#retries"},"Retries"),") when\ncontrasted with a more conventional database."),(0,a.kt)("p",null,"Strict consistency guarantees (at the database level) simplify application logic and error handling\nfarther up the stack."),(0,a.kt)("h2",{id:"consistency"},"Consistency"),(0,a.kt)("p",null,"TigerBeetle provides strict serializability\n(",(0,a.kt)("a",{parentName:"p",href:"http://www.bailis.org/blog/linearizability-versus-serializability/"},"serializability + linearizability"),")\nto each ",(0,a.kt)("a",{parentName:"p",href:"#client-sessions"},"client session"),"."),(0,a.kt)("p",null,"But consistency models can seem arcane.\nWhat specific guarantees does TigerBeetle provide to applications?"),(0,a.kt)("h4",{id:"client-sessions"},(0,a.kt)("a",{parentName:"h4",href:"#client-sessions"},"Client Sessions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A client session may have at most one in-flight request."),(0,a.kt)("li",{parentName:"ul"},"A client session reads its own writes."),(0,a.kt)("li",{parentName:"ul"},"A client session observes writes in the order that they occur on the cluster."),(0,a.kt)("li",{parentName:"ul"},"A client session observes ",(0,a.kt)("a",{parentName:"li",href:"/reference/accounts#debits_posted"},(0,a.kt)("inlineCode",{parentName:"a"},"debits_posted"))," and\n",(0,a.kt)("a",{parentName:"li",href:"/reference/accounts#credits_posted"},(0,a.kt)("inlineCode",{parentName:"a"},"credits_posted"))," as monotonically increasing.\nThat is, a client session will never see ",(0,a.kt)("inlineCode",{parentName:"li"},"credits_posted")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"debits_posted")," decrease."),(0,a.kt)("li",{parentName:"ul"},"A client session never observes uncommitted updates."),(0,a.kt)("li",{parentName:"ul"},"A client session never observes a broken invariant (e.g.\n",(0,a.kt)("a",{parentName:"li",href:"/reference/accounts#flagscredits_must_not_exceed_debits"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.credits_must_not_exceed_debits")),"\nor ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#flagslinked"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.linked")),")."),(0,a.kt)("li",{parentName:"ul"},"Multiple client sessions may receive replies ",(0,a.kt)("a",{parentName:"li",href:"#reply-order"},"out of order")," relative to one another."),(0,a.kt)("li",{parentName:"ul"},"A client session can consider a request executed when it receives a reply for the request.")),(0,a.kt)("h4",{id:"requests"},(0,a.kt)("a",{parentName:"h4",href:"#requests"},"Requests")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A request executes within the cluster at most once."),(0,a.kt)("li",{parentName:"ul"},"Requests do not ",(0,a.kt)("a",{parentName:"li",href:"#retries"},"time out")," \u2014 a timeout typically implies failure, which cannot be\nconclusively determined in the context of network faults."),(0,a.kt)("li",{parentName:"ul"},"Requests retried by their original client session receive identical replies."),(0,a.kt)("li",{parentName:"ul"},"Requests retried by a different client (same request body, different session) may receive\n",(0,a.kt)("a",{parentName:"li",href:"#consistency-with-foreign-databases"},"different replies"),"."),(0,a.kt)("li",{parentName:"ul"},"Events within a request are executed in sequential order."),(0,a.kt)("li",{parentName:"ul"},"Events within a request do not interleave with events from other requests.\n(TODO: Can timeouts interleave batches, or should we shift the batch so that timeouts land\nentirely before/after?)"),(0,a.kt)("li",{parentName:"ul"},"All events within a request batch are committed, or none are.")),(0,a.kt)("h4",{id:"events"},(0,a.kt)("a",{parentName:"h4",href:"/reference/operations/"},"Events")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once committed, an event will always be committed \u2014 the cluster's state never backtracks."),(0,a.kt)("li",{parentName:"ul"},"Within a cluster, object timestamps are unique.\nFor all objects ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," belonging to the same cluster, ",(0,a.kt)("inlineCode",{parentName:"li"},"A.timestamp \u2260 B.timestamp"),"."),(0,a.kt)("li",{parentName:"ul"},"Within a cluster, object timestamps are strictly increasing.\nFor all objects ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," belonging to the same cluster, if ",(0,a.kt)("inlineCode",{parentName:"li"},"A.timestamp < B.timestamp"),",\nthen ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," was committed earlier than ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,a.kt)("li",{parentName:"ul"},"If a client session is terminated and restarts, it is guaranteed to see updates for which the\ncorresponding reply was received prior to termination."),(0,a.kt)("li",{parentName:"ul"},"If a client session is terminated and restarts, it is ",(0,a.kt)("em",{parentName:"li"},"not")," guaranteed to see updates for\nwhich the corresponding reply was ",(0,a.kt)("em",{parentName:"li"},"not")," received prior to the restart. Those updates may\noccur at any point in the future, or never. Handling application crash recovery safely requires\n",(0,a.kt)("a",{parentName:"li",href:"#consistency-with-foreign-databases"},"using ",(0,a.kt)("inlineCode",{parentName:"a"},"id"),"s to idempotently retry events"),".")),(0,a.kt)("h4",{id:"accounts"},(0,a.kt)("a",{parentName:"h4",href:"/reference/accounts"},"Accounts")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accounts are immutable \u2014 once created, they are never modified\n(excluding balance fields, which are modified by transfers)."),(0,a.kt)("li",{parentName:"ul"},"There is at most one ",(0,a.kt)("inlineCode",{parentName:"li"},"Account")," with a particular ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,a.kt)("li",{parentName:"ul"},"The sum of all accounts' ",(0,a.kt)("inlineCode",{parentName:"li"},"debits_pending")," equals the sum of all accounts' ",(0,a.kt)("inlineCode",{parentName:"li"},"credits_pending"),"."),(0,a.kt)("li",{parentName:"ul"},"The sum of all accounts' ",(0,a.kt)("inlineCode",{parentName:"li"},"debits_posted")," equals the sum of all accounts' ",(0,a.kt)("inlineCode",{parentName:"li"},"credits_posted"),".")),(0,a.kt)("h4",{id:"transfers"},(0,a.kt)("a",{parentName:"h4",href:"/reference/transfers"},"Transfers")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transfers are immutable \u2014 once created, they are never modified."),(0,a.kt)("li",{parentName:"ul"},"There is at most one ",(0,a.kt)("inlineCode",{parentName:"li"},"Transfer")," with a particular ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#pending-transfer"},"pending transfer")," resolves at most once."),(0,a.kt)("li",{parentName:"ul"},"Transfer ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#timeout"},"timeouts")," are deterministic, driven\nby the cluster's timestamp.")),(0,a.kt)("h3",{id:"reply-order"},"Reply Order"),(0,a.kt)("p",null,"Replies to a client session always arrive in order \u2014 a client session may have only one request\nin-flight, and clients ignore (duplicate) replies to their prior requests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requests are executed in the order they arrive at the cluster's primary."),(0,a.kt)("li",{parentName:"ul"},"Replies to different clients may arrive out of order.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider two clients ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," sends request ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081"),"."),(0,a.kt)("li",{parentName:"ol"},"Client ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," sends request ",(0,a.kt)("inlineCode",{parentName:"li"},"B\u2081"),".")),(0,a.kt)("p",null,"Client ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," sent its request first, but requests ",(0,a.kt)("inlineCode",{parentName:"p"},"A\u2081")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B\u2081")," may execute in either order \u2014\nwhichever arrives first at the primary will execute first."),(0,a.kt)("p",null,"In this diagram, the requests are delivered out of order \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"B\u2081")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"A\u2081"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\n    autonumber\n    participant Client A\n    participant Client B\n    participant (Network)\n    participant Cluster\n    Client A->>(Network): A\u2081 (request)\n    Client B->>(Network): B\u2081 (request)\n    Note over (Network): Request A\u2081 is delayed by the network.\n    (Network)->>Cluster: B\u2081 (request)\n    (Network)->>Cluster: A\u2081 (request)\n    Cluster->>(Network): B\u2081 (reply)\n    Cluster->>(Network): A\u2081 (reply)\n    (Network)->>Client B: B\u2081(reply)\n    (Network)->>Client A: A\u2081 (reply)\n")),(0,a.kt)("p",null,"Suppose instead ",(0,a.kt)("inlineCode",{parentName:"p"},"A\u2081")," arrives and executes before ",(0,a.kt)("inlineCode",{parentName:"p"},"B\u2081"),".\nThe replies may be delivered in the same order (",(0,a.kt)("inlineCode",{parentName:"p"},"A\u2081")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"B\u2081"),"), or they may be reordered, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\n    autonumber\n    participant Client A\n    participant Client B\n    participant (Network)\n    participant Cluster\n    Client A->>(Network): A\u2081 (request)\n    Client B->>(Network): B\u2081 (request)\n    (Network)->>Cluster: A\u2081 (request)\n    (Network)->>Cluster: B\u2081 (request)\n    Cluster->>(Network): A\u2081 (reply)\n    Cluster->>(Network): B\u2081 (reply)\n    Note over (Network): Reply A\u2081 is delayed by the network.\n    (Network)->>Client B: B\u2081(reply)\n    (Network)->>Client A: A\u2081 (reply)\n")),(0,a.kt)("h3",{id:"retries"},"Retries"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"#client-sessions"},"client session")," will automatically retry a request until either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the client receives a corresponding reply from the cluster, or"),(0,a.kt)("li",{parentName:"ul"},"the client is terminated.")),(0,a.kt)("p",null,"Unlike most database or RPC clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the TigerBeetle client will never time out"),(0,a.kt)("li",{parentName:"ul"},"the TigerBeetle client has no retry limits"),(0,a.kt)("li",{parentName:"ul"},"the TigerBeetle client does not surface network errors")),(0,a.kt)("p",null,"With TigerBeetle's strict consistency model, surfacing these errors at the client/application level\nwould be misleading. An error would imply that a request did not execute, when that is not known:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A request delayed by the network could execute after its timeout."),(0,a.kt)("li",{parentName:"ul"},"A reply delayed by the network could execute before its timeout.")),(0,a.kt)("h3",{id:"consistency-with-foreign-databases"},"Consistency with Foreign Databases"),(0,a.kt)("p",null,"TigerBeetle objects may correspond to objects in a foreign data store (e.g. another DBMS). Keeping\nmultiple data stores consistent (in sync) is subtle in the context of application process faults."),(0,a.kt)("p",null,"Object creation events are idempotent, but only the first attempt will return ",(0,a.kt)("inlineCode",{parentName:"p"},".ok"),",\nwhile all successive identical attempts return ",(0,a.kt)("inlineCode",{parentName:"p"},".exists"),". The client may crash after creating\nthe object, but before receiving the ",(0,a.kt)("inlineCode",{parentName:"p"},".ok")," reply. Because the session resets, neither that client\nnor any others will see the object's corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},".ok")," result."),(0,a.kt)("p",null,"Therefore, to recover to the correct state after a crash, an application that synchronizes updates\nbetween multiple data stores must treat ",(0,a.kt)("inlineCode",{parentName:"p"},".exists")," as equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},".ok"),"."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Suppose that an application creates users within Postgres, and for each user a\ncorresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," in TigerBeetle."),(0,a.kt)("p",null,"This scenario depicts the typical case:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Create user ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081")," in Postgres with ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_id = A\u2081")," and\n",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_exists = false"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),': Send "create account" request ',(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081")," to the cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Cluster"),": Create ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081"),"; reply ",(0,a.kt)("inlineCode",{parentName:"li"},"ok"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Receive reply ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081: ok")," from the cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Set ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_exists = true"),".")),(0,a.kt)("p",null,"But suppose the application crashes and restarts immediately after sending its request (step 2):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Create user ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081")," in Postgres with ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_id = A\u2081")," and\n",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_exists = false"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),': Send "create account" request ',(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081")," to the cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Crash. Restart."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Cluster"),": Create ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081"),"; reply ",(0,a.kt)("inlineCode",{parentName:"li"},"ok")," \u2014 but the application session has reset,\nso this reply never reaches the application)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),': Send "create account" request ',(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081")," to the cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Cluster"),": Create ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081"),"; reply ",(0,a.kt)("inlineCode",{parentName:"li"},"exists"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Receive reply ",(0,a.kt)("inlineCode",{parentName:"li"},"A\u2081: exists")," from the cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Application"),": Set ",(0,a.kt)("inlineCode",{parentName:"li"},"U\u2081.account_exists = true"),".")),(0,a.kt)("p",null,"In the second case, the application observes that the account is created by receiving ",(0,a.kt)("inlineCode",{parentName:"p"},".exists"),"\n(step 6) instead of ",(0,a.kt)("inlineCode",{parentName:"p"},".ok"),"."),(0,a.kt)("p",null,"Note that the retry (step 5) reused the same account ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from the original request (step 2).\nAn alternate approach is to generate a new account ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),' for each "create account" attempt,\nand perhaps store the account\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"id")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"U\u2081")," when it is successfully created.\nThen account creation could be restricted to the ",(0,a.kt)("inlineCode",{parentName:"p"},".ok")," code \u2014 but application restarts would leave\norphaned accounts in TigerBeetle, which may be confusing for auditing and debugging."),(0,a.kt)("h2",{id:"client-sessions-1"},"Client Sessions"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"client session")," is a sequence of alternating ",(0,a.kt)("a",{parentName:"p",href:"#requests"},"requests")," and replies between a client\nand a cluster."),(0,a.kt)("p",null,"A client session may have at most one in-flight request \u2014 i.e. at most one unique request on the\nnetwork for which a reply has not been received. This simplifies consistency and allows the cluster\nto statically guarantee capacity in its incoming message queue. Additional requests from the\napplication are queued by the client, to be dequeued and sent when their preceding request receives\na reply."),(0,a.kt)("p",null,"TigerBeetle has a ",(0,a.kt)("a",{parentName:"p",href:"#client-session-eviction"},"hard limit")," on the number of concurrent\nclient sessions, and encourages minimizing the number of concurrent clients to\n",(0,a.kt)("a",{parentName:"p",href:"#batching-events"},"maximize throughput"),"."),(0,a.kt)("h3",{id:"client-session-lifecycle"},"Client Session Lifecycle"),(0,a.kt)("p",null,"A client session begins when a client registers itself with the cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Each client session has a unique identifier ("client id") \u2014 an ephemeral random 128-bit id.'),(0,a.kt)("li",{parentName:"ul"},'The client sends a special "register" message which is committed by the cluster, at which point\nthe client is "registered" \u2014 once it receives the reply, it may begin sending requests.'),(0,a.kt)("li",{parentName:"ul"},"Client registration is handled automatically by the TigerBeetle client implementation when the\nclient is initialized, before it sends its first request."),(0,a.kt)("li",{parentName:"ul"},"When a client restarts (for example, the application service running the TigerBeetle client is\nrestarted) it does not resume its old session \u2014 it starts a new session, with a new (random)\nclient id.")),(0,a.kt)("p",null,"A client session ends when either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the client session is ",(0,a.kt)("a",{parentName:"li",href:"#client-session-eviction"},"evicted"),", or"),(0,a.kt)("li",{parentName:"ul"},"the client terminates")),(0,a.kt)("p",null,"\u2014 whichever occurs first."),(0,a.kt)("h3",{id:"client-session-eviction"},"Client Session Eviction"),(0,a.kt)("p",null,"When a client session is registering and the number of active sessions in the cluster is already at\nthe cluster's concurrent client session\n",(0,a.kt)("a",{parentName:"p",href:"https://tigerbeetle.com/blog/a-database-without-dynamic-memory/"},"limit")," (",(0,a.kt)("inlineCode",{parentName:"p"},"config.clients_max"),",\n32 by default), an existing client session must be evicted to make space for\nthe new session."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After a session is evicted by the cluster, no future requests from that session will ever execute."),(0,a.kt)("li",{parentName:"ul"},"The evicted session is chosen as the session that committed a request the longest time ago.")),(0,a.kt)("p",null,"The cluster sends a message to notify the evicted session that it has ended. Typically the evicted\nclient is no longer active (already terminated), but if it is active, the eviction message causes it\nto self-terminate, bubbling up to the application as an ",(0,a.kt)("inlineCode",{parentName:"p"},"session evicted")," error."),(0,a.kt)("p",null,"(TODO: Right now evicted clients panic \u2014 fix that so this is accurate.)"),(0,a.kt)("p",null,"If active clients are terminating with ",(0,a.kt)("inlineCode",{parentName:"p"},"session evicted")," errors, it (most likely) indicates that\nthe application is trying to run ",(0,a.kt)("a",{parentName:"p",href:"#batching-events"},"too many")," concurrent clients."),(0,a.kt)("h2",{id:"requests-1"},"Requests"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"request")," is a ",(0,a.kt)("a",{parentName:"p",href:"#batching-events"},"batch")," of one or more\n",(0,a.kt)("a",{parentName:"p",href:"/reference/operations/"},"operation events")," sent to the cluster in a single message."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All events within a request batch share the same operation type."),(0,a.kt)("li",{parentName:"ul"},"The cluster commits an entire batch at once, each event in series."),(0,a.kt)("li",{parentName:"ul"},"The cluster returns a single reply for each unique request it commits."),(0,a.kt)("li",{parentName:"ul"},"The cluster's reply contains results corresponding to each event in the request."),(0,a.kt)("li",{parentName:"ul"},"Unless ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#flagslinked"},"linked"),", events within a request\n",(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_transfers#result"},"succeed or fail")," independently.")),(0,a.kt)("h3",{id:"batching-events"},"Batching Events"),(0,a.kt)("p",null,"To achieve high throughput, TigerBeetle amortizes the overhead of consensus and I/O by\nbatching many operation events in each request. For the best performance, each request should batch\nas many events as possible. Typically this means funneling events through fewer client instances."),(0,a.kt)("p",null,"The maximum number of events per batch depends on the maximum message size\n(",(0,a.kt)("inlineCode",{parentName:"p"},"config.message_size_max"),") and the operation type.\n(TODO: Expose batch size in the client instead)."),(0,a.kt)("p",null,"In the default configuration, the batch sizes are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Batch Size"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_accounts")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_transfers")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_accounts")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_transfers")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")))),(0,a.kt)("p",null,"Presently the client application is responsible for batching events, but only as a stopgap\nbecause this has not yet been implemented within the clients themselves."),(0,a.kt)("h4",{id:"api-layer-architecture"},"API Layer Architecture"),(0,a.kt)("p",null,"In some application architectures, the number of services that need to query TigerBeetle may:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#client-session-eviction"},"exceed ",(0,a.kt)("inlineCode",{parentName:"a"},"config.clients_max")),", or"),(0,a.kt)("li",{parentName:"ul"},"may require additional ",(0,a.kt)("a",{parentName:"li",href:"#batching-events"},"batching")," to optimize throughput.")),(0,a.kt)("p",null,'Rather than each service connecting to TigerBeetle directly, application services can forward their\nrequests to a pool of intermediate services (the "API layer") which can coalesce events from\nmany application services into requests, and forward back the respective\nreplies. This approach enables larger batch sizes and higher throughput, but comes at a cost: the\napplication services\' sessions are no longer linearizable, because the API services may restart at\nany time relative to the application service.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart LR\n    App1[Application service 1]\n    App2[Application service 2]\n    App3[Application service 3]\n    App4[Application service 4]\n    Cluster[TigerBeetle cluster]\n\n    App1 <--\x3e API1\n    App2 <--\x3e API1\n    App3 <--\x3e API2\n    App4 <--\x3e API2\n\n    subgraph API\n        API1{API 1}\n        API2{API 2}\n    end\n\n    API1 <--\x3e Cluster\n    API2 <--\x3e Cluster\n")))}u.isMDXComponent=!0}}]);