"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},p="\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09",l={unversionedId:"\u9886\u57df\u6a21\u578b/09subscription",id:"version-5.0/\u9886\u57df\u6a21\u578b/09subscription",title:"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09",description:"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/03-\u9886\u57df\u6a21\u578b/09subscription.md",sourceDirName:"03-\u9886\u57df\u6a21\u578b",slug:"/\u9886\u57df\u6a21\u578b/09subscription",permalink:"/docs/5.0/\u9886\u57df\u6a21\u578b/09subscription",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-\u9886\u57df\u6a21\u578b/09subscription.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u8d39\u8005\uff08Consumer\uff09",permalink:"/docs/5.0/\u9886\u57df\u6a21\u578b/08consumer"},next:{title:"\u666e\u901a\u6d88\u606f",permalink:"/docs/5.0/\u529f\u80fd\u884c\u4e3a/01normalmessage"}},o={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u8ba2\u9605\u5173\u7cfb\u5224\u65ad\u539f\u5219",id:"\u8ba2\u9605\u5173\u7cfb\u5224\u65ad\u539f\u5219",level:2},{value:"\u6a21\u578b\u5173\u7cfb",id:"\u6a21\u578b\u5173\u7cfb",level:2},{value:"\u5185\u90e8\u5c5e\u6027",id:"\u5185\u90e8\u5c5e\u6027",level:2},{value:"\u884c\u4e3a\u7ea6\u675f",id:"\u884c\u4e3a\u7ea6\u675f",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],u={toc:c};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8ba2\u9605\u5173\u7cfbsubscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\u662f Apache RocketMQ \u7cfb\u7edf\u4e2d\u6d88\u8d39\u8005\u83b7\u53d6\u6d88\u606f\u3001\u5904\u7406\u6d88\u606f\u7684\u89c4\u5219\u548c\u72b6\u6001\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\u7531\u6d88\u8d39\u8005\u5206\u7ec4\u52a8\u6001\u6ce8\u518c\u5230\u670d\u52a1\u7aef\u7cfb\u7edf\uff0c\u5e76\u5728\u540e\u7eed\u7684\u6d88\u606f\u4f20\u8f93\u4e2d\u6309\u7167\u8ba2\u9605\u5173\u7cfb\u5b9a\u4e49\u7684\u8fc7\u6ee4\u89c4\u5219\u8fdb\u884c\u6d88\u606f\u5339\u914d\u548c\u6d88\u8d39\u8fdb\u5ea6\u7ef4\u62a4\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e\u8ba2\u9605\u5173\u7cfb\uff0c\u53ef\u63a7\u5236\u5982\u4e0b\u4f20\u8f93\u884c\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u606f\u8fc7\u6ee4\u89c4\u5219\uff1a\u7528\u4e8e\u63a7\u5236\u6d88\u8d39\u8005\u5728\u6d88\u8d39\u6d88\u606f\u65f6\uff0c\u9009\u62e9\u4e3b\u9898\u5185\u7684\u54ea\u4e9b\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\uff0c\u8bbe\u7f6e\u6d88\u8d39\u8fc7\u6ee4\u89c4\u5219\u53ef\u4ee5\u9ad8\u6548\u5730\u8fc7\u6ee4\u6d88\u8d39\u8005\u9700\u8981\u7684\u6d88\u606f\u96c6\u5408\uff0c\u7075\u6d3b\u6839\u636e\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u8bbe\u7f6e\u4e0d\u540c\u7684\u6d88\u606f\u63a5\u6536\u8303\u56f4\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/07messagefilter"},"\u6d88\u606f\u8fc7\u6ee4"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u72b6\u6001\uff1aApache RocketMQ \u670d\u52a1\u7aef\u9ed8\u8ba4\u63d0\u4f9b\u8ba2\u9605\u5173\u7cfb\u6301\u4e45\u5316\u7684\u80fd\u529b\uff0c\u5373\u6d88\u8d39\u8005\u5206\u7ec4\u5728\u670d\u52a1\u7aef\u6ce8\u518c\u8ba2\u9605\u5173\u7cfb\u540e\uff0c\u5f53\u6d88\u8d39\u8005\u79bb\u7ebf\u5e76\u518d\u6b21\u4e0a\u7ebf\u540e\uff0c\u53ef\u4ee5\u83b7\u53d6\u79bb\u7ebf\u524d\u7684\u6d88\u8d39\u8fdb\u5ea6\u5e76\u7ee7\u7eed\u6d88\u8d39\u3002"))),(0,a.kt)("h2",{id:"\u8ba2\u9605\u5173\u7cfb\u5224\u65ad\u539f\u5219"},"\u8ba2\u9605\u5173\u7cfb\u5224\u65ad\u539f\u5219"),(0,a.kt)("p",null,"Apache RocketMQ \u7684\u8ba2\u9605\u5173\u7cfb\u6309\u7167\u6d88\u8d39\u8005\u5206\u7ec4\u548c\u4e3b\u9898\u7c92\u5ea6\u8bbe\u8ba1\uff0c\u56e0\u6b64\uff0c\u4e00\u4e2a\u8ba2\u9605\u5173\u7cfb\u6307\u7684\u662f\u6307\u5b9a\u67d0\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u5bf9\u4e8e\u67d0\u4e2a\u4e3b\u9898\u7684\u8ba2\u9605\uff0c\u5224\u65ad\u539f\u5219\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u540c\u6d88\u8d39\u8005\u5206\u7ec4\u5bf9\u4e8e\u540c\u4e00\u4e2a\u4e3b\u9898\u7684\u8ba2\u9605\u76f8\u4e92\u72ec\u7acb\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6d88\u8d39\u8005\u5206\u7ec4Group A\u548c\u6d88\u8d39\u8005\u5206\u7ec4Group B\u5206\u522b\u4ee5\u4e0d\u540c\u7684\u8ba2\u9605\u5173\u7cfb\u8ba2\u9605\u4e86\u540c\u4e00\u4e2a\u4e3b\u9898Topic A\uff0c\u8fd9\u4e24\u4e2a\u8ba2\u9605\u5173\u7cfb\u4e92\u76f8\u72ec\u7acb\uff0c\u53ef\u4ee5\u5404\u81ea\u5b9a\u4e49\uff0c\u4e0d\u53d7\u5f71\u54cd\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u8ba2\u9605\u5173\u7cfb\u4e0d\u540c\u5206\u7ec4",src:r(77137).Z,width:"1193",height:"737"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u5bf9\u4e8e\u4e0d\u540c\u4e3b\u9898\u7684\u8ba2\u9605\u4e5f\u76f8\u4e92\u72ec\u7acb\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6d88\u8d39\u8005\u5206\u7ec4Group A\u8ba2\u9605\u4e86\u4e24\u4e2a\u4e3b\u9898Topic A\u548cTopic B\uff0c\u5bf9\u4e8eGroup A\u4e2d\u7684\u6d88\u8d39\u8005\u6765\u8bf4\uff0c\u8ba2\u9605\u7684Topic A\u4e3a\u4e00\u4e2a\u8ba2\u9605\u5173\u7cfb\uff0c\u8ba2\u9605\u7684Topic B\u4e3a\u53e6\u5916\u4e00\u4e2a\u8ba2\u9605\u5173\u7cfb\uff0c\u4e14\u8fd9\u4e24\u4e2a\u8ba2\u9605\u5173\u7cfb\u4e92\u76f8\u72ec\u7acb\uff0c\u53ef\u4ee5\u5404\u81ea\u5b9a\u4e49\uff0c\u4e0d\u53d7\u5f71\u54cd\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u8ba2\u9605\u5173\u7cfb\u76f8\u540c\u5206\u7ec4",src:r(83910).Z,width:"1345",height:"466"})))),(0,a.kt)("h2",{id:"\u6a21\u578b\u5173\u7cfb"},"\u6a21\u578b\u5173\u7cfb"),(0,a.kt)("p",null,"\u5728 Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u4e2d\uff0c\u8ba2\u9605\u5173\u7cfb\u7684\u4f4d\u7f6e\u548c\u6d41\u7a0b\u5982\u4e0b\uff1a",(0,a.kt)("img",{alt:"\u8ba2\u9605\u5173\u7cfb",src:r(25879).Z,width:"1977",height:"877"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u606f\u7531\u751f\u4ea7\u8005\u521d\u59cb\u5316\u5e76\u53d1\u9001\u5230Apache RocketMQ \u670d\u52a1\u7aef\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u606f\u6309\u7167\u5230\u8fbeApache RocketMQ \u670d\u52a1\u7aef\u7684\u987a\u5e8f\u5b58\u50a8\u5230\u4e3b\u9898\u7684\u6307\u5b9a\u961f\u5217\u4e2d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u6309\u7167\u6307\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u4eceApache RocketMQ \u670d\u52a1\u7aef\u4e2d\u83b7\u53d6\u6d88\u606f\u5e76\u6d88\u8d39\u3002"))),(0,a.kt)("h2",{id:"\u5185\u90e8\u5c5e\u6027"},"\u5185\u90e8\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fc7\u6ee4\u7c7b\u578b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u6d88\u606f\u8fc7\u6ee4\u89c4\u5219\u7684\u7c7b\u578b\u3002\u8ba2\u9605\u5173\u7cfb\u4e2d\u8bbe\u7f6e\u6d88\u606f\u8fc7\u6ee4\u89c4\u5219\u540e\uff0c\u7cfb\u7edf\u5c06\u6309\u7167\u8fc7\u6ee4\u89c4\u5219\u5339\u914d\u4e3b\u9898\u4e2d\u7684\u6d88\u606f\uff0c\u53ea\u5c06\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u6d88\u8d39\uff0c\u5b9e\u73b0\u6d88\u606f\u7684\u518d\u6b21\u5206\u7c7b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TAG\u8fc7\u6ee4\uff1a\u6309\u7167Tag\u5b57\u7b26\u4e32\u8fdb\u884c\u5168\u6587\u8fc7\u6ee4\u5339\u914d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SQL92\u8fc7\u6ee4\uff1a\u6309\u7167SQL\u8bed\u6cd5\u5bf9\u6d88\u606f\u5c5e\u6027\u8fdb\u884c\u8fc7\u6ee4\u5339\u914d\u3002"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fc7\u6ee4\u8868\u8fbe\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u81ea\u5b9a\u4e49\u7684\u8fc7\u6ee4\u89c4\u5219\u8868\u8fbe\u5f0f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u5177\u4f53\u53d6\u503c\u89c4\u8303\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/07messagefilter"},"\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u8bed\u6cd5\u89c4\u8303"),"\u3002"))),(0,a.kt)("h2",{id:"\u884c\u4e3a\u7ea6\u675f"},"\u884c\u4e3a\u7ea6\u675f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4")),(0,a.kt)("p",null,"Apache RocketMQ \u662f\u6309\u7167\u6d88\u8d39\u8005\u5206\u7ec4\u7c92\u5ea6\u7ba1\u7406\u8ba2\u9605\u5173\u7cfb\uff0c\u56e0\u6b64\uff0c\u540c\u4e00\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u7684\u6d88\u8d39\u8005\u5728\u6d88\u8d39\u903b\u8f91\u4e0a\u5fc5\u987b\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u6d88\u8d39\u51b2\u7a81\uff0c\u5bfc\u81f4\u90e8\u5206\u6d88\u606f\u6d88\u8d39\u5f02\u5e38\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b63\u786e\u793a\u4f8b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//Consumer c1\nConsumer c1 = ConsumerBuilder.build(groupA);\nc1.subscribe(topicA,"TagA");\n//Consumer c2\nConsumer c2 = ConsumerBuilder.build(groupA);\nc1.subscribe(topicA,"TagA");\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9519\u8bef\u793a\u4f8b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//Consumer c1\nConsumer c1 = ConsumerBuilder.build(groupA);\nc1.subscribe(topicA,"TagA");\n//Consumer c2Consumer \nc2 = ConsumerBuilder.build(groupA);\nc1.subscribe(topicA,"TagB");\n')))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u4e0d\u8981\u9891\u7e41\u4fee\u6539\u8ba2\u9605\u5173\u7cfb")),(0,a.kt)("p",null,"\u5728 Apache RocketMQ \u9886\u57df\u6a21\u578b\u4e2d\uff0c\u8ba2\u9605\u5173\u7cfb\u5173\u8054\u4e86\u8fc7\u6ee4\u89c4\u5219\u3001\u6d88\u8d39\u8fdb\u5ea6\u7b49\u5143\u6570\u636e\u548c\u76f8\u5173\u914d\u7f6e\uff0c\u540c\u65f6\u7cfb\u7edf\u9700\u8981\u4fdd\u8bc1\u6d88\u8d39\u8005\u5206\u7ec4\u4e0b\u7684\u6240\u6709\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u884c\u4e3a\u3001\u6d88\u8d39\u903b\u8f91\u3001\u8d1f\u8f7d\u7b56\u7565\u7b49\u4e00\u81f4\uff0c\u6574\u4f53\u8fd0\u7b97\u903b\u8f91\u6bd4\u8f83\u590d\u6742\u3002\u56e0\u6b64\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u901a\u8fc7\u9891\u7e41\u4fee\u6539\u8ba2\u9605\u5173\u7cfb\u6765\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u7684\u53d8\u66f4\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5ba2\u6237\u7aef\u4e00\u76f4\u5904\u4e8e\u8d1f\u8f7d\u5747\u8861\u8c03\u6574\u548c\u53d8\u66f4\u7684\u8fc7\u7a0b\uff0c\u4ece\u800c\u5f71\u54cd\u6d88\u606f\u63a5\u6536\u3002"))}s.isMDXComponent=!0},25879:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/archiforsubsciption-a495c04e71ed64b9403b689f9413ed08.png"},77137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subscription_diff_group-0b215b9bb822b4bf43c388e9155ecca1.png"},83910:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subscription_one_group-bd08f914c1aa307d07d2a3e786c20b3f.png"}}]);