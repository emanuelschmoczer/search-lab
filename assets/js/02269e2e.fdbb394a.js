"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[2810],{267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(5893),a=n(1151);const r={},s="\ud83e\uddb8 Intro to facets",c={id:"facet/intro",title:"\ud83e\uddb8 Intro to facets",description:"A facet is a way to group documents together based on a common value.  For example, if you have a list of movies, you might want to group them by genre. You could then use the facet to filter the results to only show movies of a certain genre.",source:"@site/docs/6-facet/1-intro.mdx",sourceDirName:"6-facet",slug:"/facet/intro",permalink:"/search-lab/docs/facet/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/6-facet/1-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Faceting",permalink:"/search-lab/docs/category/faceting"},next:{title:"\ud83e\uddb8 Create an index",permalink:"/search-lab/docs/facet/create-index"}},i={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"-intro-to-facets",children:"\ud83e\uddb8 Intro to facets"}),"\n",(0,o.jsx)(t.p,{children:"A facet is a way to group documents together based on a common value.  For example, if you have a list of movies, you might want to group them by genre. You could then use the facet to filter the results to only show movies of a certain genre."}),"\n",(0,o.jsx)(t.p,{children:"A common use case is to use facets to create a filter. You can see this in most e-commerce sites. For example, you will see a list of categories on the left side of the page, and each category will have a number next to it. This number represents the number of products in that category."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n      "facet": {\n        "operator": {\n          "range": {\n            "path": "year",\n            "gte": 2000,\n            "lte": 2015\n          }\n        },\n        "facets": {\n          "genresFacet": {\n            "type": "string",\n            "path": "genres"\n          }\n        }\n      }\n    }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(7294);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);