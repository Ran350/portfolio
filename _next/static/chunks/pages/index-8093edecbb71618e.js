(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)t.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&t.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&t.push(l);else t.push(r.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},5301:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2941)}])},1508:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(5893),i=r(4184),s=r.n(i),a=function(t){var e=t.children,r=t.isHoverShadow,i=void 0!==r&&r;return(0,n.jsx)("div",{className:s()("bg-white m-2 border-transparent p-4 shadow",{"transition hover:shadow-2xl duration-500 ease-out":i}),children:e})}},9709:function(t,e,r){"use strict";r.d(e,{t:function(){return s}});var n=r(5893),i=r(1508),s=function(t){var e=t.imgPath,r=t.title;return(0,n.jsx)(i.Z,{isHoverShadow:!0,children:(0,n.jsx)("img",{src:e,alt:r,className:"w-full"})})}},5141:function(t,e,r){"use strict";r.d(e,{h:function(){return l}});var n=r(5893),i=r(1417),s=r(2814),a=r(2593),l=function(t){var e=t.title,r=t.imageUrl,l=t.subTitles;return(0,n.jsxs)("header",{className:"w-full min-h-screen relative bg-center bg-cover flex flex-col justify-between text-white",style:{backgroundImage:"url(".concat(r,")")},children:[(0,n.jsx)(a.a,{}),(0,n.jsxs)("div",{className:"filter drop-shadow-xl",children:[(0,n.jsx)("div",{className:"text-center text-4xl sm:text-6xl md:text-8xl font-telex",children:e}),(0,n.jsx)("ul",{className:"flex justify-center text-2xl",children:l.map((function(t,e){return(0,n.jsx)("li",{className:"p-2 border-current ".concat(0!==e?"border-l-2":""),children:t},t)}))})]}),(0,n.jsx)("div",{className:"mb-4 flex justify-center",children:[{name:"Twitter",icon:i.mdU,url:"https://twitter.com/hoshina350"},{name:"Instagram",icon:i.Zzi,url:"https://www.instagram.com/ran350_3d/"},{name:"GitHub",icon:i.zhw,url:"https://github.com/Ran350"}].map((function(t){var e=t.name,r=t.icon,i=t.url;return(0,n.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(s.G,{title:e,icon:r,className:"m-8 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"})},e)}))})]})}},2593:function(t,e,r){"use strict";r.d(e,{a:function(){return a}});var n=r(5893),i=r(1664),s=r(1163),a=function(t){var e=t.textColor,r=void 0===e?"text-write":e,a=(0,s.useRouter)().asPath;return(0,n.jsxs)("nav",{className:"mb-8 p-8 flex justify-between",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("img",{className:"rounded-full w-10",src:"./myicon.jpg",alt:""})})}),(0,n.jsx)("div",{className:"flex my-auto",children:[{path:"/",title:"Home"},{path:"/gallery",title:"Gallery"},{path:"/contact",title:"Contact"}].map((function(t){var e=t.path,s=t.title;return(0,n.jsx)("h1",{className:e===a?"text-yellow-400":r,children:(0,n.jsx)(i.default,{href:e,children:(0,n.jsx)("div",{className:"m-4 text-2xl",children:s})})},s)}))})]})}},8476:function(t,e,r){"use strict";r.d(e,{A:function(){return l}});var n=r(5893),i=r(1417),s=r(2814),a=function(){return(0,n.jsxs)("div",{className:"bg-gray-200 shadow-inner py-4 px-16 text-gray-400 flex justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:"/",children:"Home"}),(0,n.jsx)("a",{href:"/gallery",className:"mx-4",children:"Gallery"}),(0,n.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,n.jsx)("h1",{children:"\xa92021 Ran"}),(0,n.jsx)("div",{children:[{name:"Twitter",icon:i.mdU,url:"https://twitter.com/hoshina350"},{name:"Instagram",icon:i.Zzi,url:"https://www.instagram.com/ran350_3d/"},{name:"GitHub",icon:i.zhw,url:"https://github.com/Ran350"}].map((function(t){var e=t.name,r=t.icon,i=t.url;return(0,n.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(s.G,{title:e,icon:r,className:"ml-4 text-xl"})},e)}))})]})},l=function(t){var e=t.children;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)("main",{className:"flex-grow",children:e}),(0,n.jsx)(a,{})]})}},7576:function(t,e,r){"use strict";r.d(e,{$:function(){return i}});var n=r(5893),i=function(t){var e=t.title,r=t.children,i=t.button;return(0,n.jsxs)("section",{className:"m-12 text-center",children:[(0,n.jsx)("h1",{className:"mx-auto my-2 border-b-2 border-gray-200 p-2 w-1/2 text-3xl",children:e}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",children:r}),(0,n.jsx)(n.Fragment,{children:i||null})]})}},2941:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(5893),i=r(1417),s=r(1436),a=r(1508),l=function(t){var e=t.title,r=t.contents;return(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"m-4 mb-6 text-xl",children:[(0,n.jsx)("h1",{className:"mb-2 w-min text-left text-gray-300",children:e}),(0,n.jsx)("div",{className:"mx-auto w-min",children:r.map((function(t){return(0,n.jsx)("a",{href:null===t||void 0===t?void 0:t.link,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("h1",{className:"text-left whitespace-nowrap ".concat(t.link?"text-blue-800 hover:text-blue-400":null),children:t.text})},t.text)}))})]})})},c=r(2814),o=r(1664),h=function(t){var e=t.text,r=t.name,i=t.fontAwesome;return(0,n.jsxs)("button",{className:"bg-white m-2 px-6 py-2 border-transparent rounded-xl shadow text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none",children:[(0,n.jsx)("span",{className:"pr-4",children:(0,n.jsx)(c.G,{title:r,icon:i})}),(0,n.jsx)("span",{children:e})]})},u=function(t){var e=t.text,r=t.link,i=t.name,s=t.fontAwesome,a=t.isSameDomain;return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(o.default,{href:r,passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(h,{text:e,name:i,fontAwesome:s})})}):(0,n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(h,{text:e,name:i,fontAwesome:s})})})},x=function(t){var e=t.imgPath,r=t.link,i=t.title,s=t.description;return(0,n.jsx)(a.Z,{isHoverShadow:!0,children:(0,n.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",children:[(0,n.jsx)("img",{src:e,alt:i,className:"object-cover h-64 w-full"}),(0,n.jsx)("h1",{className:"text-xl",children:i}),(0,n.jsx)("h1",{className:"text-md text-gray-400",children:s})]})})},d=r(9709),m=r(5141),f=r(8476),j=r(7576),p=function(){return(0,n.jsxs)(f.A,{children:[(0,n.jsx)(m.h,{title:"Portfolio",subTitles:["Develop","Graphic Art"],imageUrl:"./graphic/photorealistic/chess.jpg"}),(0,n.jsxs)(j.$,{title:"Develop",button:(0,n.jsx)(u,{text:"GitHub",name:"GitHub",fontAwesome:i.zhw,link:"https://github.com/Ran350",isSameDomain:!1}),children:[(0,n.jsx)(x,{imgPath:"./develop/this-site.jpg",link:"https://github.com/Ran350/ran350.github.io",title:"ran350.github.io",description:"Next.js / Tailwind CSS"}),(0,n.jsx)(x,{imgPath:"./develop/web-wordcloud.jpg",link:"https://ran350.github.io/web-wordcloud",title:"Web WordCloud",description:"Web Assembly / Next.js"}),(0,n.jsx)(x,{imgPath:"./develop/lv.png",link:"https://github.com/Ran350/Lyrics-visualize",title:"Lyrics-visualize",description:"Python / MeCab"}),(0,n.jsx)(x,{imgPath:"./develop/redos-checker.jpg",link:"https://marketplace.visualstudio.com/items?itemName=Ran350.redos-checker-for-vscode",title:"Redos Checker for VSCode ",description:"extension to detect redos vulnerable"})]}),(0,n.jsxs)(j.$,{title:"Graphic arts",button:(0,n.jsx)(u,{text:"Gallery",name:"Palette",fontAwesome:s.q2v,link:"/gallery",isSameDomain:!0}),children:[(0,n.jsx)(d.t,{imgPath:"./graphic/geometric/twist-circle-gray.jpg",title:""}),(0,n.jsx)(d.t,{imgPath:"./graphic/geometric/twist-circle-blue.jpg",title:""}),(0,n.jsx)(d.t,{imgPath:"/graphic/photorealistic/glass-chess.jpg",title:""}),(0,n.jsx)(d.t,{imgPath:"./graphic/toon/goldball.jpg",title:""})]}),(0,n.jsxs)(j.$,{title:"about",children:[(0,n.jsx)(l,{title:"Belong",contents:[{text:"RCC",link:"http://www.rcc.ritsumei.ac.jp/"},{text:"RDC",link:"https://rits-dajare.github.io/"},{text:"KC3",link:"https://kc3.me/"}]}),(0,n.jsx)(l,{title:"Like",contents:[{text:"blender"},{text:"\u5c06\u68cb"},{text:"Design theory"}]}),(0,n.jsx)(l,{title:"Learning",contents:[{text:"Web front-end"},{text:"NLP"},{text:"Visualization"}]}),(0,n.jsx)(l,{title:"SNS",contents:[{text:"Twitter",link:"https://twitter.com/hoshina350"},{text:"Instagram",link:"https://www.instagram.com/ran350_3d/"},{text:"GitHub",link:"https://github.com/Ran350"},{text:"Qiita",link:"https://qiita.com/Ran350"}]})]})]})}}},function(t){t.O(0,[112,523,956,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);