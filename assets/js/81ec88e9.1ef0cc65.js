"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[3928],{5828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(5893),r=n(1151);const a={},i="Create an Atlas Search index",o={id:"search/search-index",title:"Create an Atlas Search index",description:"To start using Atlas Search, you must configure a search index on your database. Atlas Search indexes categorize data in an easily searchable format and enable faster document retrieval using certain identifiers. You can create a search index right from the Atlas UI.",source:"@site/docs/2-search/2-search-index.mdx",sourceDirName:"2-search",slug:"/search/search-index",permalink:"/search-lab/docs/search/search-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/2-search/2-search-index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/search-lab/docs/search/intro"},next:{title:"Testing the Search index",permalink:"/search-lab/docs/search/test-search"}},c={},d=[{value:"Step-by-step guide to creating your first Atlas Search index",id:"step-by-step-guide-to-creating-your-first-atlas-search-index",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Screenshot:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-an-atlas-search-index",children:"Create an Atlas Search index"}),"\n",(0,s.jsx)(t.p,{children:"To start using Atlas Search, you must configure a search index on your database. Atlas Search indexes categorize data in an easily searchable format and enable faster document retrieval using certain identifiers. You can create a search index right from the Atlas UI."}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step-guide-to-creating-your-first-atlas-search-index",children:"Step-by-step guide to creating your first Atlas Search index"}),"\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.strong,{children:"Database Deployments"})," page in MongoDB Atlas and select ",(0,s.jsx)(t.strong,{children:"Create Index"})," in the lower right corner."]}),"\n",(0,s.jsx)(n,{alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",src:"img/screenshots/2-search/2-search-index/1-create-index.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Create Search Index"})," button."]}),"\n",(0,s.jsx)(n,{alt:"The 'Create Search Index' button highlighted",src:"img/screenshots/2-search/2-search-index/2-create-search-index.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsxs)(t.p,{children:["The first step of building the search index is selecting the configuration method. You can choose from two options \u2014 using the ",(0,s.jsx)(t.strong,{children:"Visual Editor"})," or writing the configuration yourself with the ",(0,s.jsx)(t.strong,{children:"JSON Editor"}),". Let's stick to the default ",(0,s.jsx)(t.strong,{children:"Visual Editor"}),". To proceed, click ",(0,s.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,s.jsx)(n,{alt:"The 'Configuration Method' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/3-search-index-config-method.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsxs)(t.p,{children:["Next, you need to select a name and data source for your index. Change the name to ",(0,s.jsx)(t.strong,{children:"fulltextsearch"})," and select the database ",(0,s.jsx)(t.strong,{children:"library"})," and the collection ",(0,s.jsx)(t.strong,{children:"books"}),"."]}),"\n",(0,s.jsx)(n,{alt:"The 'Name & Data Source' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/4-search-index-config-name-datasource.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsxs)(t.p,{children:["The final step allows you to review the index configuration and refine it if needed. You may also see the JSON that was generated from your configuration by clicking ",(0,s.jsx)(t.strong,{children:"View JSON"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",children:'{\n    "mappings": {\n        "dynamic": true\n    }\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The index is using dynamic field mappings. We didn't configure any explicit (static) mappings between the fields in the documents and the search index. That's why Atlas created dynamic mappings that match the data in the documents to some common field types such as ",(0,s.jsx)(t.code,{children:"double"}),", ",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"array"}),", ",(0,s.jsx)(t.code,{children:"int"}),", and ",(0,s.jsx)(t.code,{children:"double"}),".\nDynamic mappings are useful when you're just getting started with Atlas Search or if your schema changes regularly. However, they take up more space compared to static mappings."]})}),"\n",(0,s.jsxs)(t.p,{children:["You don't need to refine this index. Go ahead and click ",(0,s.jsx)(t.strong,{children:"Create Search Index"}),"."]}),"\n",(0,s.jsx)(n,{alt:"The 'Review & Refine' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/5-search-index-config-refine.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsx)(t.p,{children:"You'll be redirected to a page showing all of the search indexes used in your Atlas project. Creating the index should take up to a minute."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["When your search index reaches status ",(0,s.jsx)(t.strong,{children:"Active"}),", you'll be able to see more information about the index. For example, the number of indexed documents, the field mappings and the index size. Notice also that you're using 1 out of the 3 free search indexes that come with your free M0 database."]})}),"\n",(0,s.jsx)(n,{alt:"The 'Search Indexes' page with the newly created index highlighted",src:"img/screenshots/2-search/2-search-index/6-search-indexes-list.png",url:"https://cloud.mongodb.com"}),"\n",(0,s.jsxs)(t.p,{children:["Once you see your new index showing as ",(0,s.jsx)(t.code,{children:"Active"})," in the list, you can move to the next step."]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);