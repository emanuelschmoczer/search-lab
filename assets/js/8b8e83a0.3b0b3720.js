"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[5030],{5267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(5893),a=t(1151);const c={},i="\ud83e\uddb8 Create an index",o={id:"facet/create-index",title:"\ud83e\uddb8 Create an index",description:"In order to use faceting, you will need to create the appropriate index.",source:"@site/docs/6-facet/2-create-index.mdx",sourceDirName:"6-facet",slug:"/facet/create-index",permalink:"/search-lab/docs/facet/create-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/6-facet/2-create-index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 Intro to facets",permalink:"/search-lab/docs/facet/intro"},next:{title:"\ud83e\uddb8 Query with facets",permalink:"/search-lab/docs/facet/query"}},s={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-create-an-index",children:"\ud83e\uddb8 Create an index"}),"\n",(0,r.jsx)(n.p,{children:"In order to use faceting, you will need to create the appropriate index."}),"\n",(0,r.jsx)(n.p,{children:"Create a new search index using the JSON editor. Use the following JSON for your index definition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mappings": {\n    "dynamic": false,\n    "fields": {\n      "genres": {\n        "type": "stringFacet"\n      },\n      "year": {\n        "type": "number"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Proceed like you did in the previous exercises to create a new index."}),"\n",(0,r.jsx)(n.p,{children:"Once the index is ready, you can proceed to the next step."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const a={},c=r.createContext(a);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);