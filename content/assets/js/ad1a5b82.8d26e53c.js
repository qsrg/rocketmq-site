"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(a),s=l,h=m["".concat(i,".").concat(s)]||m[s]||k[s]||n;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={},o="\u5982\u4f55\u8d21\u732e",c={unversionedId:"\u8d21\u732e\u6307\u5357/29how-to-contribute",id:"\u8d21\u732e\u6307\u5357/29how-to-contribute",title:"\u5982\u4f55\u8d21\u732e",description:"Apache RocketMQ \u2014\u2014 \u5f00\u653e\u5171\u4eab\u7684\u5f00\u6e90\u793e\u533a\uff0c\u8bda\u631a\u9080\u8bf7\u60a8\u7684\u52a0\u5165\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/08-\u8d21\u732e\u6307\u5357/29how-to-contribute.md",sourceDirName:"08-\u8d21\u732e\u6307\u5357",slug:"/\u8d21\u732e\u6307\u5357/29how-to-contribute",permalink:"/docs/4.x/\u8d21\u732e\u6307\u5357/29how-to-contribute",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/08-\u8d21\u732e\u6307\u5357/29how-to-contribute.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Streams \u5b9e\u6218",permalink:"/docs/4.x/\u6d41\u8ba1\u7b97/33RocketMQ Streams In Action"},next:{title:"\u4ee3\u7801\u6307\u5357",permalink:"/docs/4.x/\u8d21\u732e\u6307\u5357/30code-guidelines"}},i={},p=[{value:"\u8bf7\u6c42\u7b54\u7591",id:"\u8bf7\u6c42\u7b54\u7591",level:2},{value:"\u63d0\u4ea4\u9519\u8bef\u62a5\u544a",id:"\u63d0\u4ea4\u9519\u8bef\u62a5\u544a",level:2},{value:"\u63d0\u51fa\u6539\u8fdb\u6216\u65b0\u529f\u80fd",id:"\u63d0\u51fa\u6539\u8fdb\u6216\u65b0\u529f\u80fd",level:2},{value:"\u53c2\u4e0e\u8ba8\u8bba\u5e76\u5e2e\u52a9\u4ed6\u4eba",id:"\u53c2\u4e0e\u8ba8\u8bba\u5e76\u5e2e\u52a9\u4ed6\u4eba",level:2},{value:"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c",id:"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c",level:2},{value:"\u8d21\u732e\u4ee3\u7801",id:"\u8d21\u732e\u4ee3\u7801",level:2},{value:"\u8d21\u732e\u6587\u6863",id:"\u8d21\u732e\u6587\u6863",level:2},{value:"\u4f18\u5316\u5b98\u7f51",id:"\u4f18\u5316\u5b98\u7f51",level:2},{value:"\u66f4\u591a\u8d21\u732e\u9014\u5f84...",id:"\u66f4\u591a\u8d21\u732e\u9014\u5f84",level:2},{value:"\u5982\u4f55\u6210\u4e3a committer",id:"\u5982\u4f55\u6210\u4e3a-committer",level:2}],u={toc:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"),(0,l.kt)("p",null,"Apache RocketMQ \u2014\u2014 \u5f00\u653e\u5171\u4eab\u7684\u5f00\u6e90\u793e\u533a\uff0c\u8bda\u631a\u9080\u8bf7\u60a8\u7684\u52a0\u5165\u3002"),(0,l.kt)("p",null,"\u793e\u533a\u4ea4\u6d41\u548c\u8d21\u732e\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u51fa\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u9519\u8bef\u62a5\u544a"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u51fa\u65b0\u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u4e0e\u90ae\u4ef6\u5217\u8868\u4e0a\u7684\u8ba8\u8bba"),(0,l.kt)("li",{parentName:"ul"},"\u8d21\u732e\u4ee3\u7801\u6216\u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u7f51\u7ad9"),(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u7b54\u7591"},"\u8bf7\u6c42\u7b54\u7591"),(0,l.kt)("p",null,"Apache RocketMQ \u793e\u533a\u63d0\u4f9b\u5b8c\u5907\u7684\u5904\u7406\u6d41\u7a0b\u5e2e\u60a8\u89e3\u7b54\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"mailto:users@rocketmq.apache.org"},"User mailing list")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/rocketmq"},"Stack Overflow #rocketmq")," \u8fdb\u884c\u63d0\u95ee\u3002"),(0,l.kt)("h2",{id:"\u63d0\u4ea4\u9519\u8bef\u62a5\u544a"},"\u63d0\u4ea4\u9519\u8bef\u62a5\u544a"),(0,l.kt)("p",null,"\u5982\u60a8\u5728\u4f7f\u7528 RocketMQ \u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues"},"GitHub Issue")," \u4e0a\u63d0\u4ea4\u9519\u8bef\u62a5\u544a\u3002"),(0,l.kt)("h2",{id:"\u63d0\u51fa\u6539\u8fdb\u6216\u65b0\u529f\u80fd"},"\u63d0\u51fa\u6539\u8fdb\u6216\u65b0\u529f\u80fd"),(0,l.kt)("p",null,"\u793e\u533a\u5728\u6301\u7eed\u5bfb\u627e\u53cd\u9988\u610f\u89c1\u4ee5\u6539\u5584 Apache RocketMQ \uff0c\u60a8\u7684\u6539\u8fdb\u65b9\u6848\u6216\u65b0\u7279\u6027\u7684\u9700\u6c42\u5c06\u60e0\u53ca\u6240\u6709 RocketMQ \u7528\u6237, \u8bf7\u5728 GitHub \u4e0a\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues"},"GitHub Issue"),"\u3002"),(0,l.kt)("p",null,"\u63d0\u6848\u9700\u8981\u5305\u542b\u9002\u5f53\u7684\u7ec6\u8282\u63cf\u8ff0\u548c\u5f71\u54cd\u8303\u56f4\uff0c\u8bf7\u5c3d\u53ef\u80fd\u5730\u8be6\u8ff0\u5176\u9700\u6c42\u3002\u6211\u4eec\u5e0c\u671b\u5f97\u5230\u8f83\u5b8c\u5907\u7684\u4fe1\u606f\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7684\u6539\u8fdb\u548c\u65b0\u7279\u6027\u6700\u7ec8\u7b26\u5408\u60a8\u7684\u9700\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u60a8\u7684\u9700\u6c42\u8bc4\u4f30\u6295\u5165\u6210\u672c\u548c\u8bbe\u8ba1\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u793e\u533a\u56f4\u7ed5\u8be5\u63d0\u6848\u5c55\u5f00\u5efa\u8bbe\u6027\u7684\u8ba8\u8bba")),(0,l.kt)("p",null,"\u82e5\u60a8\u8ba1\u5212\u5b9e\u73b0\u81ea\u5df1\u7684\u63d0\u6848\u4ee5\u8d21\u732e\u793e\u533a\uff0c\u540c\u6837\u9700\u8981\u63d0\u4f9b\u8be6\u7ec6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5e76\u9075\u5faa ",(0,l.kt)("a",{parentName:"p",href:"/docs/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97/30code-guidelines"},"code-guidelines")," \u4e2d\u7684\u7f16\u7801\u89c4\u8303"),(0,l.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5148\u5728\u793e\u533a\u8fbe\u6210\u5171\u8bc6\u518d\u7740\u624b\u5b9e\u73b0\u529f\u80fd\u3002\u901a\u8fc7\u8ba8\u8bba\u65b0\u7279\u6027\u7684\u5fc5\u8981\u6027\u53ca\u5b9e\u73b0\u65b9\u6848\u7b49\u95ee\u9898\uff0c\u53ef\u4ee5\u65e9\u53d1\u73b0\u8d85\u51fa\u9879\u76ee\u8303\u56f4\u7684\u63d0\u6848\u3002"),(0,l.kt)("h2",{id:"\u53c2\u4e0e\u8ba8\u8bba\u5e76\u5e2e\u52a9\u4ed6\u4eba"},"\u53c2\u4e0e\u8ba8\u8bba\u5e76\u5e2e\u52a9\u4ed6\u4eba"),(0,l.kt)("p",null,"Apache RocketMQ \u793e\u533a\u6210\u5458\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u90ae\u4ef6\u6c9f\u901a\u548c\u4ea4\u6d41\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"mailto:users@rocketmq.apache.org"},"User mailing list")," \uff1aApache RocketMQ \u7528\u6237\u901a\u8fc7\u8be5\u90ae\u4ef6\u5217\u8868\u63d0\u95ee\u4ee5\u5bfb\u6c42\u5e2e\u52a9\u6216\u5efa\u8bae\u3002"),(0,l.kt)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605\u8be5\u90ae\u4ef6\u7cfb\u7edf\u4ee5\u5e2e\u52a9\u4ed6\u4eba\u89e3\u51b3\u95ee\u9898\u6765\u8d21\u732e\u793e\u533a\uff1b"),(0,l.kt)("p",{parentName:"li"},"\u60a8\u8fd8\u53ef\u4ee5\u5728 Stack Overflow \u4e0a\u68c0\u7d22 ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/rocketmq"},"rocketmq")," \u6807\u7b7e \u56de\u7b54\u7528\u6237\u7684\u95ee\u9898\u5e76\u83b7\u53d6\u66f4\u591a\u89c1\u89e3\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"mailto:dev@rocketmq.apache.org"},"Development mailing list")," : Apache RocketMQ \u5f00\u53d1\u8005\u901a\u8fc7\u8be5\u90ae\u4ef6\u5217\u8868\u4ea4\u6d41\u65b0\u7279\u6027\uff0c\u9884\u53d1\u5e03\u7248\u672c\uff0c\u4e00\u822c\u7684\u5f00\u53d1\u6d41\u7a0b\u7b49\u3002"),(0,l.kt)("p",{parentName:"li"},"\u82e5\u60a8\u70ed\u8877\u4e8e\u4e3a RocketMQ \u793e\u533a\u8d21\u732e\u4ee3\u7801\uff0c\u53ef\u4ee5\u52a0\u5165\u8be5\u90ae\u4ef6\u5217\u8868\u3002"))),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/contact"},"mailing lists"),"\uff0c\u83b7\u53d6\u66f4\u591a\u7684\u793e\u533a\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c"},"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c"),(0,l.kt)("p",null,"Apache RocketMQ \u5728\u5176\u6d3b\u8dc3\u793e\u533a\u7684\u63a8\u52a8\u4e0b\u6301\u7eed\u53d1\u5c55\u7740\u3002\u6bcf\u9694\u51e0\u5468\u6211\u4eec\u4f1a\u53d1\u5e03 RocketMQ \u7684\u65b0\u7248\u672c\uff0c\u4ee5\u4fee\u590d\u6f0f\u6d1e\uff0c\u63d0\u5347\u6027\u80fd\uff0c\u65b0\u589e\u7279\u6027\u7b49\u3002\u53d1\u5e03\u65b0\u7248\u672c\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u63a8\u51fa\u65b0\u7684\u9884\u53d1\u5e03\u7248\u672c\u5e76\u542f\u52a8\u6295\u7968\u6d41\u7a0b\uff08\u65f6\u6548 72 \u5c0f\u65f6\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c\u5e76\u8bc4\u5206 (+1 \u672a\u53d1\u73b0\u95ee\u9898, -1 \u6d4b\u8bd5\u51fa\u95ee\u9898)"),(0,l.kt)("li",{parentName:"ol"},"\u82e5\u9884\u53d1\u5e03\u7248\u672c\u672a\u6d4b\u8bd5\u51fa\u95ee\u9898\u5219\u53d1\u5e03\uff0c\u5426\u5219\u56de\u5230\u6b65\u9aa4 1")),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u7f51\u7ad9\u4e0a\u6574\u7406\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"/docs/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97/32release-manual"},"release-manual")," \u7248\u672c\u53d1\u5e03\u6307\u5357\u3002\u6d4b\u8bd5\u9884\u53d1\u884c\u7248\u662f\u9879\u5927\u5de5\u7a0b\uff0c\u6211\u4eec\u9700\u8981\u5438\u7eb3\u66f4\u591a\u4eba\u7684\u53c2\u4e0e\u3002 RocketMQ \u793e\u533a\u9f13\u52b1\u6bcf\u4e2a\u4eba\u90fd\u53c2\u4e0e\u65b0\u7248\u672c\u7684\u6d4b\u8bd5\u3002\u901a\u8fc7\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c, \u60a8\u5c06\u786e\u4fe1\u65b0\u7684 RocketMQ \u7248\u672c\u4ecd\u5c06\u4e3a\u60a8\u7684\u7a0b\u5e8f\u63d0\u4f9b\u6b63\u5e38\u670d\u52a1\uff0c\u5e76\u786e\u5b9e\u5728\u652f\u6301\u7248\u672c\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"RocketMQ \u793e\u533a\u9f13\u52b1\u6bcf\u4e2a\u4eba\u90fd\u53c2\u4e0e\u65b0\u7248\u672c\u7684\u6d4b\u8bd5\u3002\u901a\u8fc7\u6d4b\u8bd5\u9884\u53d1\u5e03\u7248\u672c, \u60a8\u5c06\u786e\u4fe1\u65b0\u7684 RocketMQ \u7248\u672c\u4ecd\u5c06\u4e3a\u60a8\u7684\u7a0b\u5e8f\u63d0\u4f9b\u6b63\u5e38\u670d\u52a1\uff0c\u5e76\u786e\u5b9e\u5728\u652f\u6301\u7248\u672c\u5347\u7ea7\u3002"),(0,l.kt)("h2",{id:"\u8d21\u732e\u4ee3\u7801"},"\u8d21\u732e\u4ee3\u7801"),(0,l.kt)("p",null,"Apache RocketMQ \u5df2\u7136\u5e76\u5c06\u6301\u7eed\u8fdb\u884c\u7ef4\u62a4\uff0c\u4f18\u5316\uff0c\u548c\u6269\u5c55\u3002\u56e0\u6b64 Apache RocketMQ \u9f13\u52b1\u6240\u6709\u4eba\u8d21\u732e\u6e90\u4ee3\u7801\u3002\u4e3a\u7ed9\u4e88\u4ee3\u7801\u8d21\u732e\u8005\u548c\u5ba1\u67e5\u8005\u6781\u4f73\u7684\u4ee3\u7801\u8d21\u732e\u4f53\u9a8c\uff0c\u5e76\u63d0\u4f9b\u9ad8\u8d28\u91cf\u7684\u4ee3\u7801\u4ed3\u5e93\uff0c\u793e\u533a\u9075\u5faa ",(0,l.kt)("a",{parentName:"p",href:"/docs/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97/30code-guidelines"},"code-guidelines")," \u4e2d\u7684\u8d21\u732e\u6d41\u7a0b\u3002\u7f16\u7801\u624b\u518c\u5305\u542b\u6784\u5efa\u5f00\u53d1\u73af\u5883\u6307\u5357\uff0c\u793e\u533a\u7f16\u7801\u6307\u5357\u548c\u7f16\u7801\u98ce\u683c\uff0c\u5e76\u4ecb\u7ecd\u4e86\u5982\u4f55\u63d0\u4ea4\u8d21\u732e\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"**\u8bf7\u52a1\u5fc5\u5728\u7f16\u7801\u4e4b\u524d\u4ed4\u7ec6\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"/docs/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97/30code-guidelines"},"code-guidelines")),(0,l.kt)("p",null,"\u5e76\u8bf7\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/contributor-agreements.html"},"AFS Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a \u8d21\u732e\u8005\u534f\u8bae")," \u63d0\u4ea4\u7535\u5b50\u7b7e\u540d\u3002"),(0,l.kt)("p",null,"\u5982\u4f55\u5bfb\u627e\u5408\u9002\u7684 issue \uff1f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues"},"GitHub Issue")," \u5217\u51fa\u4e86\u76ee\u524d\u5df2\u63d0\u51fa\u7684\u6539\u8fdb\u548c\u63a8\u8350\u7279\u6027\u3002"),(0,l.kt)("h2",{id:"\u8d21\u732e\u6587\u6863"},"\u8d21\u732e\u6587\u6863"),(0,l.kt)("p",null,"\u4f18\u79c0\u7684\u8bf4\u660e\u6587\u6863\u5bf9\u4efb\u4f55\u4e00\u79cd\u8f6f\u4ef6\u90fd\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002 Apache RocketMQ \u793e\u533a\u81f4\u529b\u4e8e\u63d0\u4f9b\u7b80\u660e\uff0c\u7cbe\u51c6\uff0c\u5b8c\u5907\u7684\u6280\u672f\u6587\u6863\u3002\u793e\u533a\u8bda\u631a\u9080\u8bf7\u6240\u6709\u8d21\u732e\u53c2\u4e0e\u5b8c\u5584\u548c\u6539\u8fdb RocketMQ \u6587\u6863\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/issues"},"GitHub Issue"),"\u4e0a\u62a5\u544a\u6587\u6863\u7f3a\u5931\uff0c\u9519\u8bef\uff0c\u8fc7\u671f\u7b49\u76f8\u5173\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},"RocketMQ \u6280\u672f\u6587\u6863\u4ee5 Markdown \u5f62\u5f0f\u4e66\u5199\uff0c\u5e76\u5b58\u653e\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site/tree/new-official-website/"},"RocketMQ \u5b98\u7f51\u4ed3\u5e93")," ",(0,l.kt)("inlineCode",{parentName:"li"},"/docs")," \u76ee\u5f55\u4e0b\u3002")),(0,l.kt)("p",null,"\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-site/tree/new-official-website"},"Q&A"),"\u4e86\u89e3\u5982\u4f55\u901a\u8fc7\u66f4\u65b0\u548c\u5b8c\u5584\u7b49\u65b9\u5f0f\u8d21\u732e\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u4f18\u5316\u5b98\u7f51"},"\u4f18\u5316\u5b98\u7f51"),(0,l.kt)("p",null,"Apache RocketMQ \u5b98\u7f51\u4ee3\u8868\u7740 Apache RocketMQ \u548c Apache RocketMQ \u793e\u533a\u3002\u5176\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u6653\u8bbf\u95ee\u8005 Apache RocketMQ \u548c Apache RocketMQ \u7684\u529f\u80fd\u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bbf\u95ee\u8005 \u4e0b\u8f7d\u5e76\u4f7f\u7528 RocketMQ"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5bfc\u8bbf\u95ee\u8005 \u53c2\u4e0e\u5e76\u8d21\u732e RocketMQ \u793e\u533a")),(0,l.kt)("p",null,"\u793e\u533a\u63a5\u7eb3\u4efb\u4f55\u6709\u52a9\u4e8e\u4f18\u5316\u7f51\u7ad9\u7684\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u8bf7\u901a\u8fc7\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-site/issues"},"Github Issue")," \u63d0\u4f9b\u60a8\u5173\u4e8e\u7f51\u7ad9\u7684\u5efa\u8bae\u548c\u521b\u610f\u3002"),(0,l.kt)("p",null,"\u5982\u60a8\u60f3\u8981\u66f4\u65b0\u6216\u4f18\u5316\u7f51\u7ad9\uff0c\u8bf7\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-site/tree/new-official-website#qa%E3%80%82"},"apache/rocketmq-site new-official-website")," "),(0,l.kt)("h2",{id:"\u66f4\u591a\u8d21\u732e\u9014\u5f84"},"\u66f4\u591a\u8d21\u732e\u9014\u5f84..."),(0,l.kt)("p",null,"\u8fd8\u6709\u66f4\u591a\u8d21\u732e RocketMQ \u793e\u533a\u7684\u65b9\u5f0f\u7b49\u60a8\u9009\u62e9\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd RocketMQ \u7ed9\u5c3d\u53ef\u80fd\u591a\u7684\u4f19\u4f34\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u7ebf\u4e0b\u4ea4\u6d41\u4f1a\u6216\u7ec4\u5efa\u7ebf\u4e0a\u7528\u6237\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"\u5316\u8eab RocketMQ \u7684\u5e03\u9053\u5e08"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("h2",{id:"\u5982\u4f55\u6210\u4e3a-committer"},"\u5982\u4f55\u6210\u4e3a committer"),(0,l.kt)("p",null,"Committers \u662f\u793e\u533a\u4e2d\u4fee\u6539\u9879\u76ee\u4ed3\u5e93\u7684\u6210\u5458\uff0c\u53ef\u4fee\u6539\u4ee3\u7801\uff0c\u6587\u6863\u548c\u7f51\u7ad9\u6216\u63a5\u7eb3\u5176\u4ed6\u6210\u5458\u7684\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u6210\u4e3a commiter \u5e76\u6ca1\u6709\u4e25\u683c\u7684\u534f\u8bae\uff0c\u5019\u9009\u4eba\u901a\u5e38\u662f\u793e\u533a\u4e2d\u6d3b\u8dc3\u7684\u8d21\u732e\u8005\u3002"),(0,l.kt)("p",null,"\u6d3b\u8dc3\u7684\u8d21\u732e\u8005\u610f\u5473\u7740\uff1a\u53c2\u52a0\u90ae\u7bb1\u5217\u8868\u4e2d\u7684\u8ba8\u8bba\uff0c\u5e2e\u52a9\u4ed6\u4eba\u89e3\u51b3\u95ee\u9898\uff0c\u9a8c\u8bc1\u9884\u53d1\u5e03\u7248\u672c\uff0c\u793c\u8d24\u4e0b\u58eb\u5e76\u6301\u7eed\u4f18\u5316\u793e\u533a\u7ba1\u7406\uff0c\u8fd9\u90e8\u5206\u5173\u4e4e\u793e\u533a\u5728 Apache \u4e2d\u7684\u53d1\u5c55\u3002"),(0,l.kt)("p",null,"\u65e0\u7591\uff0c\u4e3a\u9879\u76ee\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863\u540c\u6837\u81f3\u5173\u91cd\u8981\u3002\u597d\u7684\u5f00\u7aef\u53ef\u4ee5\u662f\u4f18\u5316\u6027\u80fd\uff0c\u5f00\u53d1\u65b0\u7279\u6027\uff0c\u4fee\u590d\u6f0f\u6d1e\u3002\u65e0\u8bba\u54ea\u79cd\u65b9\u5f0f\uff0c\u60a8\u9700\u8981\u4e3a\u6240\u8d21\u732e\u7684\u4ee3\u7801\u8d1f\u8d23\uff0c\u63d0\u4f9b\u6d4b\u8bd5\u7528\u4f8b\u548c\u8bf4\u660e\u6587\u6863\u5e76\u6301\u7eed\u7ef4\u62a4\u3002"),(0,l.kt)("p",null,"\u5019\u9009\u4eba\u53ef\u4ee5\u88ab\u793e\u533a\u5185\u7684 committer \u6216 PMC \u6210\u5458\u4e3e\u8350\uff0c\u5e76\u6700\u7ec8\u7531 PMC \u6295\u7968\u8868\u51b3\u3002"),(0,l.kt)("p",null,"\u5982\u60a8\u6709\u610f\u6210\u4e3a RocketMQ \u793e\u533a\u7684 committer \uff0c\u8bf7\u79ef\u6781\u878d\u5165\u793e\u533a\u5e76\u4ee5\u4e0a\u8ff0\u4efb\u610f\u65b9\u5f0f\u8d21\u732e Apache RocketMQ  "),(0,l.kt)("p",null,"\u793e\u533a\u5185 committer \u6210\u5458\u4f1a\u975e\u5e38\u70ed\u8877\u4e0e\u60a8\u5206\u4eab\u4ea4\u6d41\uff0c\u5e76\u7ed9\u4e88\u60a8\u9002\u65f6\u7684\u5efa\u8bae\u548c\u6307\u5bfc\u3002"))}k.isMDXComponent=!0}}]);