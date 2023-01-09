"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),_=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},f=function(e){var n=_(e.components);return r.createElement(o.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=_(t),p=a,u=c["".concat(o,".").concat(p)]||c[p]||l[p]||i;return t?r.createElement(u,d(d({ref:n},f),{},{components:t})):r.createElement(u,d({ref:n},f))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var _=2;_<i;_++)d[_]=t[_];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>_});var r=t(7462),a=(t(7294),t(3905));const i={},d="create_transfers",s={unversionedId:"reference/operations/create_transfers",id:"reference/operations/create_transfers",title:"create_transfers",description:"Create one or more Transfers. A successfully created transfer will modify the",source:"@site/pages/reference/operations/create_transfers.md",sourceDirName:"reference/operations",slug:"/reference/operations/create_transfers",permalink:"/reference/operations/create_transfers",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/reference/operations/create_transfers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_accounts",permalink:"/reference/operations/create_accounts"},next:{title:"lookup_accounts",permalink:"/reference/operations/lookup_accounts"}},o={},_=[{value:"Examples",id:"examples",level:2},{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2},{value:"<code>ok</code>",id:"ok",level:3},{value:"<code>linked_event_failed</code>",id:"linked_event_failed",level:3},{value:"<code>linked_event_chain_open</code>",id:"linked_event_chain_open",level:3},{value:"<code>reserved_flag</code>",id:"reserved_flag",level:3},{value:"<code>reserved_field</code>",id:"reserved_field",level:3},{value:"<code>id_must_not_be_zero</code>",id:"id_must_not_be_zero",level:3},{value:"<code>id_must_not_be_int_max</code>",id:"id_must_not_be_int_max",level:3},{value:"<code>debit_account_id_must_not_be_zero</code>",id:"debit_account_id_must_not_be_zero",level:3},{value:"<code>debit_account_id_must_not_be_int_max</code>",id:"debit_account_id_must_not_be_int_max",level:3},{value:"<code>credit_account_id_must_not_be_zero</code>",id:"credit_account_id_must_not_be_zero",level:3},{value:"<code>credit_account_id_must_not_be_int_max</code>",id:"credit_account_id_must_not_be_int_max",level:3},{value:"<code>accounts_must_be_different</code>",id:"accounts_must_be_different",level:3},{value:"<code>pending_id_must_be_zero</code>",id:"pending_id_must_be_zero",level:3},{value:"<code>ledger_must_not_be_zero</code>",id:"ledger_must_not_be_zero",level:3},{value:"<code>code_must_not_be_zero</code>",id:"code_must_not_be_zero",level:3},{value:"<code>amount_must_not_be_zero</code>",id:"amount_must_not_be_zero",level:3},{value:"<code>debit_account_not_found</code>",id:"debit_account_not_found",level:3},{value:"<code>credit_account_not_found</code>",id:"credit_account_not_found",level:3},{value:"<code>accounts_must_have_the_same_ledger</code>",id:"accounts_must_have_the_same_ledger",level:3},{value:"<code>transfer_must_have_the_same_ledger_as_accounts</code>",id:"transfer_must_have_the_same_ledger_as_accounts",level:3},{value:"<code>exists_with_different_flags</code>",id:"exists_with_different_flags",level:3},{value:"<code>exists_with_different_debit_account_id</code>",id:"exists_with_different_debit_account_id",level:3},{value:"<code>exists_with_different_credit_account_id</code>",id:"exists_with_different_credit_account_id",level:3},{value:"<code>exists_with_different_user_data</code>",id:"exists_with_different_user_data",level:3},{value:"<code>exists_with_different_pending_id</code>",id:"exists_with_different_pending_id",level:3},{value:"<code>exists_with_different_timeout</code>",id:"exists_with_different_timeout",level:3},{value:"<code>exists_with_different_code</code>",id:"exists_with_different_code",level:3},{value:"<code>exists_with_different_amount</code>",id:"exists_with_different_amount",level:3},{value:"<code>exists</code>",id:"exists",level:3},{value:"<code>overflows_debits_pending</code>",id:"overflows_debits_pending",level:3},{value:"<code>overflows_credits_pending</code>",id:"overflows_credits_pending",level:3},{value:"<code>overflows_debits_posted</code>",id:"overflows_debits_posted",level:3},{value:"<code>overflows_credits_posted</code>",id:"overflows_credits_posted",level:3},{value:"<code>overflows_debits</code>",id:"overflows_debits",level:3},{value:"<code>overflows_credits</code>",id:"overflows_credits",level:3},{value:"<code>overflows_timeout</code>",id:"overflows_timeout",level:3},{value:"<code>exceeds_credits</code>",id:"exceeds_credits",level:3},{value:"<code>exceeds_debits</code>",id:"exceeds_debits",level:3},{value:"<code>cannot_post_and_void_pending_transfer</code>",id:"cannot_post_and_void_pending_transfer",level:3},{value:"<code>pending_transfer_cannot_post_or_void_another</code>",id:"pending_transfer_cannot_post_or_void_another",level:3},{value:"<code>timeout_reserved_for_pending_transfer</code>",id:"timeout_reserved_for_pending_transfer",level:3},{value:"<code>pending_id_must_not_be_zero</code>",id:"pending_id_must_not_be_zero",level:3},{value:"<code>pending_id_must_not_be_int_max</code>",id:"pending_id_must_not_be_int_max",level:3},{value:"<code>pending_id_must_be_different</code>",id:"pending_id_must_be_different",level:3},{value:"<code>pending_transfer_not_found</code>",id:"pending_transfer_not_found",level:3},{value:"<code>pending_transfer_not_pending</code>",id:"pending_transfer_not_pending",level:3},{value:"<code>pending_transfer_has_different_debit_account_id</code>",id:"pending_transfer_has_different_debit_account_id",level:3},{value:"<code>pending_transfer_has_different_credit_account_id</code>",id:"pending_transfer_has_different_credit_account_id",level:3},{value:"<code>pending_transfer_has_different_ledger</code>",id:"pending_transfer_has_different_ledger",level:3},{value:"<code>pending_transfer_has_different_code</code>",id:"pending_transfer_has_different_code",level:3},{value:"<code>exceeds_pending_transfer_amount</code>",id:"exceeds_pending_transfer_amount",level:3},{value:"<code>pending_transfer_has_different_amount</code>",id:"pending_transfer_has_different_amount",level:3},{value:"<code>pending_transfer_already_posted</code>",id:"pending_transfer_already_posted",level:3},{value:"<code>pending_transfer_already_voided</code>",id:"pending_transfer_already_voided",level:3},{value:"<code>pending_transfer_expired</code>",id:"pending_transfer_expired",level:3}],f={toc:_};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create_transfers"},(0,a.kt)("inlineCode",{parentName:"h1"},"create_transfers")),(0,a.kt)("p",null,"Create one or more ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer")),"s. A successfully created transfer will modify the\namount fields of its ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},"debit")," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},"credit")," accounts."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/currency-exchange"},"Currency Exchange"))),(0,a.kt)("h2",{id:"event"},"Event"),(0,a.kt)("p",null,"The transfer to create. See ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer"))," for constraints."),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"Results are listed in this section in order of descending precedence \u2014 that is, if more than one\nerror is applicable to the transfer being created, only the result listed first is returned."),(0,a.kt)("h3",{id:"ok"},(0,a.kt)("inlineCode",{parentName:"h3"},"ok")),(0,a.kt)("p",null,"The transfer was successfully created; did not previously exist."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," is generated by the client implementation; the network protocol does not include a\nresult when the transfer was successfully created."),(0,a.kt)("h3",{id:"linked_event_failed"},(0,a.kt)("inlineCode",{parentName:"h3"},"linked_event_failed")),(0,a.kt)("p",null,"The transfer was not created.\nOne or more of the other transfers in the ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagslinked"},"linked chain")," is invalid, so\nthe whole chain failed."),(0,a.kt)("h3",{id:"linked_event_chain_open"},(0,a.kt)("inlineCode",{parentName:"h3"},"linked_event_chain_open")),(0,a.kt)("p",null,"The transfer was not created.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagslinked"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.linked"))," flag was set on the last event in the\nbatch, which is not legal. (",(0,a.kt)("inlineCode",{parentName:"p"},"flags.linked")," indicates that the chain continues to the next\noperation)."),(0,a.kt)("h3",{id:"reserved_flag"},(0,a.kt)("inlineCode",{parentName:"h3"},"reserved_flag")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsreserved"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.reserved"))," is nonzero, but must be zero."),(0,a.kt)("h3",{id:"reserved_field"},(0,a.kt)("inlineCode",{parentName:"h3"},"reserved_field")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#reserved"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.reserved"))," is nonzero, but must be zero."),(0,a.kt)("h3",{id:"id_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"id_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.id"))," is zero, which is a reserved value."),(0,a.kt)("h3",{id:"id_must_not_be_int_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"id_must_not_be_int_max")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.id"))," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2^128 - 1"),", which is a reserved value."),(0,a.kt)("h3",{id:"debit_account_id_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"debit_account_id_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," is zero, but must be a valid\naccount id."),(0,a.kt)("h3",{id:"debit_account_id_must_not_be_int_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"debit_account_id_must_not_be_int_max")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2^128 - 1"),", but must be a\nvalid account id."),(0,a.kt)("h3",{id:"credit_account_id_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"credit_account_id_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," is zero, but must be a valid\naccount id."),(0,a.kt)("h3",{id:"credit_account_id_must_not_be_int_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"credit_account_id_must_not_be_int_max")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2^128 - 1"),", but must be a\nvalid account id."),(0,a.kt)("h3",{id:"accounts_must_be_different"},(0,a.kt)("inlineCode",{parentName:"h3"},"accounts_must_be_different")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," must not be equal."),(0,a.kt)("p",null,"That is, an account cannot transfer money to itself."),(0,a.kt)("h3",{id:"pending_id_must_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_id_must_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\nOnly post/void transfers can reference a pending transfer."),(0,a.kt)("p",null,"Either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#flagspost_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.post_pending_transfer"))," must be set, or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#flagsvoid_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.void_pending_transfer"))," must be set, or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," must be zero.")),(0,a.kt)("h3",{id:"ledger_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"ledger_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#ledger"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.ledger"))," is zero, but must be nonzero."),(0,a.kt)("h3",{id:"code_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"code_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#code"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.code"))," is zero, but must be nonzero."),(0,a.kt)("h3",{id:"amount_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"amount_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#amount"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.amount"))," is zero, but must be nonzero."),(0,a.kt)("p",null,"Every transfer must move value.\nOnly posting and voiding transfer amounts may be zero \u2014 when zero, they will move the full pending\namount."),(0,a.kt)("h3",{id:"debit_account_not_found"},(0,a.kt)("inlineCode",{parentName:"h3"},"debit_account_not_found")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," must refer to an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Account"),"."),(0,a.kt)("h3",{id:"credit_account_not_found"},(0,a.kt)("inlineCode",{parentName:"h3"},"credit_account_not_found")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," must refer to an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Account"),"."),(0,a.kt)("h3",{id:"accounts_must_have_the_same_ledger"},(0,a.kt)("inlineCode",{parentName:"h3"},"accounts_must_have_the_same_ledger")),(0,a.kt)("p",null,"The transfer was not created. The accounts referred to by\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," must have an identical\n",(0,a.kt)("a",{parentName:"p",href:"/reference/accounts#ledger"},(0,a.kt)("inlineCode",{parentName:"a"},"ledger")),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/recipes/currency-exchange"},"Currency exchange")," is implemented with multiple transfers."),(0,a.kt)("h3",{id:"transfer_must_have_the_same_ledger_as_accounts"},(0,a.kt)("inlineCode",{parentName:"h3"},"transfer_must_have_the_same_ledger_as_accounts")),(0,a.kt)("p",null,"The transfer was not created. The accounts referred to by\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.debit_account_id"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.credit_account_id"))," are equivalent, but\ndiffer from the ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#ledger"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.ledger")),"."),(0,a.kt)("h3",{id:"exists_with_different_flags"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_flags")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flags"},(0,a.kt)("inlineCode",{parentName:"a"},"flags")),"."),(0,a.kt)("h3",{id:"exists_with_different_debit_account_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_debit_account_id")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"debit_account_id")),"."),(0,a.kt)("h3",{id:"exists_with_different_credit_account_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_credit_account_id")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"credit_account_id")),"."),(0,a.kt)("h3",{id:"exists_with_different_user_data"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_user_data")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#user_data"},(0,a.kt)("inlineCode",{parentName:"a"},"user_data")),"."),(0,a.kt)("h3",{id:"exists_with_different_pending_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_pending_id")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"pending_id")),"."),(0,a.kt)("h3",{id:"exists_with_different_timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_timeout")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#timeout"},(0,a.kt)("inlineCode",{parentName:"a"},"timeout")),"."),(0,a.kt)("h3",{id:"exists_with_different_code"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_code")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#code"},(0,a.kt)("inlineCode",{parentName:"a"},"code")),"."),(0,a.kt)("h3",{id:"exists_with_different_amount"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists_with_different_amount")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with a different\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#amount"},(0,a.kt)("inlineCode",{parentName:"a"},"amount")),"."),(0,a.kt)("h3",{id:"exists"},(0,a.kt)("inlineCode",{parentName:"h3"},"exists")),(0,a.kt)("p",null,"A transfer with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," already exists, and is identical to the transfer in the request."),(0,a.kt)("p",null,"To correctly recover from application crashes\n",(0,a.kt)("a",{parentName:"p",href:"/usage/integration#conistency-with-foreign-databases"},"many applications")," should handle\n",(0,a.kt)("inlineCode",{parentName:"p"},"exists")," exactly as ",(0,a.kt)("a",{parentName:"p",href:"#ok"},(0,a.kt)("inlineCode",{parentName:"a"},"ok")),"."),(0,a.kt)("h3",{id:"overflows_debits_pending"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_debits_pending")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.debits_pending + transfer.amount")," would overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_credits_pending"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_credits_pending")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account.credits_pending + transfer.amount")," would overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_debits_posted"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_debits_posted")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.debits_posted + transfer.amount")," would overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_credits_posted"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_credits_posted")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.credits_posted + transfer.amount")," would overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_debits"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_debits")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.debits_pending + debit_account.debits_posted + transfer.amount"),"\nwould overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_credits"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_credits")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account.credits_pending + credit_account.credits_posted + transfer.amount"),"\nwould overflow a 64-bit unsigned integer."),(0,a.kt)("h3",{id:"overflows_timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"overflows_timeout")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("inlineCode",{parentName:"p"},"transfer.timestamp + transfer.timeout")," would overflow a 64-bit unsigned integer."),(0,a.kt)("p",null,"This computation uses the ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timestamp"))," value assigned by the\nreplica, not the ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," value sent by the client."),(0,a.kt)("h3",{id:"exceeds_credits"},(0,a.kt)("inlineCode",{parentName:"h3"},"exceeds_credits")),(0,a.kt)("p",null,"The transfer was not created.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},"debit account")," has\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debits_must_not_exceed_credits"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.debits_must_not_exceed_credits"))," set,\nbut ",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.debits_pending + debit_account.debits_posted + transfer.amount"),"\nwould exceed ",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account.credits_posted"),"."),(0,a.kt)("h3",{id:"exceeds_debits"},(0,a.kt)("inlineCode",{parentName:"h3"},"exceeds_debits")),(0,a.kt)("p",null,"The transfer was not created.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},"credit account")," has\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credits_must_not_exceed_debits"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.credits_must_not_exceed_debits"))," set,\nbut ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account.debits_pending + credit_account.debits_posted + transfer.amount"),"\nwould exceed ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account.debits_posted"),"."),(0,a.kt)("h3",{id:"cannot_post_and_void_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"h3"},"cannot_post_and_void_pending_transfer")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspost_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.post_pending_transfer"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsvoid_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.void_pending_transfer"))," are mutually exclusive."),(0,a.kt)("h3",{id:"pending_transfer_cannot_post_or_void_another"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_cannot_post_or_void_another")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspending"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.pending"))," is mutually exclusive with\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspost_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.post_pending_transfer"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsvoid_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.void_pending_transfer")),"."),(0,a.kt)("h3",{id:"timeout_reserved_for_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"h3"},"timeout_reserved_for_pending_transfer")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#timeout"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timeout"))," is nonzero, but only\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspending"},"pending")," transfers have nonzero timeouts."),(0,a.kt)("h3",{id:"pending_id_must_not_be_zero"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_id_must_not_be_zero")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspost_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.post_pending_transfer"))," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsvoid_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.flags.void_pending_transfer"))," is set,\nbut ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," is zero. A posting or voiding transfer must\nreference a ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspending"},(0,a.kt)("inlineCode",{parentName:"a"},"pending"))," transfer."),(0,a.kt)("h3",{id:"pending_id_must_not_be_int_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_id_must_not_be_int_max")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2^128 - 1"),", which is a reserved value."),(0,a.kt)("h3",{id:"pending_id_must_be_different"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_id_must_be_different")),(0,a.kt)("p",null,"The transfer was not created.\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," is set to the same id as\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.id")),". Instead it should refer to a different (existing) transfer."),(0,a.kt)("h3",{id:"pending_transfer_not_found"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_not_found")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," does not exist."),(0,a.kt)("h3",{id:"pending_transfer_not_pending"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_not_pending")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," exists, but does not\nhave ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspending"},(0,a.kt)("inlineCode",{parentName:"a"},"flags.pending"))," set."),(0,a.kt)("h3",{id:"pending_transfer_has_different_debit_account_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_has_different_debit_account_id")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," exists, but with a\ndifferent ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"debit_account_id")),"."),(0,a.kt)("p",null,"The post/void transfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account_id")," must either be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or identical to the pending\ntransfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"debit_account_id"),"."),(0,a.kt)("h3",{id:"pending_transfer_has_different_credit_account_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_has_different_credit_account_id")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," exists, but with a\ndifferent ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"credit_account_id")),"."),(0,a.kt)("p",null,"The post/void transfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account_id")," must either be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or identical to the pending\ntransfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_account_id"),"."),(0,a.kt)("h3",{id:"pending_transfer_has_different_ledger"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_has_different_ledger")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," exists, but with a\ndifferent ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#ledger"},(0,a.kt)("inlineCode",{parentName:"a"},"ledger")),"."),(0,a.kt)("p",null,"The post/void transfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"ledger")," must either be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or identical to the pending\ntransfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"ledger"),"."),(0,a.kt)("h3",{id:"pending_transfer_has_different_code"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_has_different_code")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer referenced by ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.pending_id"))," exists, but with a\ndifferent ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#code"},(0,a.kt)("inlineCode",{parentName:"a"},"code")),"."),(0,a.kt)("p",null,"The post/void transfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," must either be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or identical to the pending\ntransfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"."),(0,a.kt)("h3",{id:"exceeds_pending_transfer_amount"},(0,a.kt)("inlineCode",{parentName:"h3"},"exceeds_pending_transfer_amount")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer's ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#amount"},(0,a.kt)("inlineCode",{parentName:"a"},"amount"))," exceeds the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of its\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},"pending")," transfer."),(0,a.kt)("h3",{id:"pending_transfer_has_different_amount"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_has_different_amount")),(0,a.kt)("p",null,"The transfer was not created.\nThe transfer is attempting to ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsvoid_pending_transfer"},"void")," a pending transfer.\nThe voiding transfer's ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#amount"},(0,a.kt)("inlineCode",{parentName:"a"},"amount"))," must be either ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or exactly the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount"),"\nof the pending transfer."),(0,a.kt)("p",null,"To partially void a transfer, create a ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspost_pending_transfer"},"posting transfer"),"\nwith an amount between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and the pending transfer's ",(0,a.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,a.kt)("h3",{id:"pending_transfer_already_posted"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_already_posted")),(0,a.kt)("p",null,"The transfer was not created.\nThe referenced ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},"pending")," transfer was already posted by a\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagspost_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"post_pending_transfer")),"."),(0,a.kt)("h3",{id:"pending_transfer_already_voided"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_already_voided")),(0,a.kt)("p",null,"The transfer was not created.\nThe referenced ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},"pending")," transfer was already voided by a\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#flagsvoid_pending_transfer"},(0,a.kt)("inlineCode",{parentName:"a"},"void_pending_transfer")),"."),(0,a.kt)("h3",{id:"pending_transfer_expired"},(0,a.kt)("inlineCode",{parentName:"h3"},"pending_transfer_expired")),(0,a.kt)("p",null,"The transfer was not created.\nThe referenced ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#pending_id"},"pending")," transfer was already voided because its\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#timeout"},"timeout")," has passed."))}l.isMDXComponent=!0}}]);