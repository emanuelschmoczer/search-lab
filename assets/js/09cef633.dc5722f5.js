"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[496],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(4137));const a={},s="Exercises",i={unversionedId:"search-operators/exercises",id:"search-operators/exercises",title:"Exercises",description:"Time to get some practice with the concepts you've learned! Try to answer the following questions to the best of your ability. Feel free to reference the slides and notes you've taken during the lesson.",source:"@site/docs/5-search-operators/09-exercises.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/exercises",permalink:"/search-party-lab/docs/search-operators/exercises",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/5-search-operators/09-exercises.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mixing and matching",permalink:"/search-party-lab/docs/search-operators/mix-and-match"},next:{title:"\ud83e\uddb8 Advanced Exercises",permalink:"/search-party-lab/docs/search-operators/advanced-exercises"}},l={},c=[{value:"Add fuzzy search",id:"add-fuzzy-search",level:2},{value:"Promote the books of the month",id:"promote-the-books-of-the-month",level:2},{value:"Promote shorter books",id:"promote-shorter-books",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,"Time to get some practice with the concepts you've learned! Try to answer the following questions to the best of your ability. Feel free to reference the slides and notes you've taken during the lesson."),(0,r.kt)("p",null,"No cheating! Try to only look at the answer after you gave it a try."),(0,r.kt)("h2",{id:"add-fuzzy-search"},"Add fuzzy search"),(0,r.kt)("p",null,"Try adding fuzzy search to your application so it can find the correct books, even if the user makes a typo."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember the fuzzy parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," operator? This is where you'd use it.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"public async searchBooks(query: string): Promise<Book[]> {\n  const aggregationPipeline = [\n      {\n          $search: {\n              index: 'fulltextsearch',\n              text: {\n                  query,\n                  path: ['title', 'authors.name', 'genres'],\n                  fuzzy: {\n                    maxEdits: 2\n                  }\n              }\n          }\n      }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n}\n")))),(0,r.kt)("h2",{id:"promote-the-books-of-the-month"},"Promote the books of the month"),(0,r.kt)("p",null,"The marketing team has decided that they want to promote the books of the month. They want to show these books first in the search results. How would you do this?"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You'll need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"compound")," operator with multiple operators here. There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"bookOfTheMonth")," boolean field on some of the books that you could use.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'public async searchBooks(query: string): Promise<Book[]> {\n    const aggregationPipeline = [\n        {\n          $search: {\n            "index": "fulltextsearch",\n            "compound": {\n              "must": [\n                {\n                  "text": {\n                    query,\n                    "path": ["title", "author.name", "genres"],\n                    fuzzy: {\n                      maxEdits: 2\n                    }\n                  }\n                }\n              ],\n              "should": [\n                {\n                  "equals": {\n                    "value": true,\n                    "path": "bookOfTheMonth",\n                    "score": {\n                      "boost": { value: 10 }\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ];\n    const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n    return books;\n}\n')))),(0,r.kt)("h2",{id:"promote-shorter-books"},"Promote shorter books"),(0,r.kt)("p",null,"You've noticed that readers tend to prefer shorter books. Without using a large score boost, try to promote shorter books in the search results."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'Even without a score adjuster, the "should" operator will still boost the score of the documents that match it.')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'public async searchBooks(query: string): Promise<Book[]> {\n    const aggregationPipeline = [\n        {\n          $search: {\n            "index": "fulltextsearch",\n            "compound": {\n              "must": [\n                {\n                  "text": {\n                    query,\n                    "path": ["title", "author.name", "genres"],\n                    fuzzy: {\n                      maxEdits: 2\n                    }\n                  }\n                }\n              ],\n              "should": [\n                {\n                  "equals": {\n                    "value": true,\n                    "path": "bookOfTheMonth",\n                    "score": {\n                      "boost": { value: 10 }\n                    }\n                  }\n                },\n                {\n                  "range": {\n                    path: "pages",\n                    lt: 80\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ];\n    const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n    return books;\n}\n')))))}h.isMDXComponent=!0}}]);