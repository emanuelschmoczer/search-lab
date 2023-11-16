"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[4591],{1338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(5893),r=t(1151);const a={},i="\ud83e\uddb8 Using OpenAI",c={id:"vector-search/create-vectors/openai",title:"\ud83e\uddb8 Using OpenAI",description:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab.",source:"@site/docs/7-vector-search/5-create-vectors/3-openai.mdx",sourceDirName:"7-vector-search/5-create-vectors",slug:"/vector-search/create-vectors/openai",permalink:"/search-lab/docs/vector-search/create-vectors/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/5-create-vectors/3-openai.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 Create Vectors",permalink:"/search-lab/docs/category/-create-vectors"},next:{title:"\ud83e\uddb8 Using Google Vertex",permalink:"/search-lab/docs/vector-search/create-vectors/google-vertex"}},s={},d=[{value:"Create an OpenAI account and get an API key",id:"create-an-openai-account-and-get-an-api-key",level:2},{value:"Create embeddings for documents",id:"create-embeddings-for-documents",level:2},{value:"Create embeddings for the books",id:"create-embeddings-for-the-books",level:2},{value:"Querying with vectors",id:"querying-with-vectors",level:2},{value:"Configuring the application",id:"configuring-the-application",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Screenshot:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-using-openai",children:"\ud83e\uddb8 Using OpenAI"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab."})}),"\n",(0,o.jsxs)(n.p,{children:["OpenAI is a company that develops AI models for natural language processing. They offer a free API that you can use to create embeddings for your documents. The API is called ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/embeddings",children:"OpenAI's Embedding API"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To get some embeddings using their API, you need to create an account and get an API key."}),"\n",(0,o.jsx)(n.h2,{id:"create-an-openai-account-and-get-an-api-key",children:"Create an OpenAI account and get an API key"}),"\n",(0,o.jsxs)(n.p,{children:["To create an account, go to ",(0,o.jsx)(n.a,{href:"http://openai.com/",children:"https://openai.com/"}),' and click on the "Log In" button in the upper right corner. This will redirect you to the login page, where you\'ll have the option to sign up for their services.']}),"\n",(0,o.jsx)(t,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/1-signup.png",url:"https://openai.com/",alt:"The OpenAI signup page"}),"\n",(0,o.jsx)(n.p,{children:"Follow the instructions on the screen, and verify your email address."}),"\n",(0,o.jsxs)(n.p,{children:["Once you have an account, you can go to the ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"API keys page"})," to get an API key."]}),"\n",(0,o.jsxs)(n.p,{children:["From there, click on the ",(0,o.jsx)(n.strong,{children:"Create new secret key"})," button."]}),"\n",(0,o.jsx)(t,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/2-create-key.png",url:"https://platform.openai.com/account/api-keys",alt:"The OpenAI API keys page"}),"\n",(0,o.jsxs)(n.p,{children:['You\'ll be prompted to give you key a name. You can call it "MongoDB Vector Search Demo". Then click on the ',(0,o.jsx)(n.strong,{children:"Create secret key"})," button."]}),"\n",(0,o.jsx)(n.p,{children:"You will then be presented with your API key. Copy it and save it somewhere safe."}),"\n",(0,o.jsx)(t,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/3-api-key.png",url:"https://platform.openai.com/account/api-keys",alt:"The OpenAI API key"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Make sure you copy this key somewhere as you'll need it later on, and you won't be able to see it again."})}),"\n",(0,o.jsx)(n.p,{children:"Now that you have an API key, you can use it to create embeddings for your documents."}),"\n",(0,o.jsx)(n.h2,{id:"create-embeddings-for-documents",children:"Create embeddings for documents"}),"\n",(0,o.jsx)(n.p,{children:"To create embeddings for your documents by sending curl commands to the OpenAI API, you can use the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'OPENAI_API_KEY=<YOUR_API_KEY>\ncurl https://api.openai.com/v1/embeddings \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "input": "The food was delicious and the waiter...",\n    "model": "text-embedding-ada-002"\n  }\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can find more information about the API in the ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/embeddings",children:"OpenAI documentation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-embeddings-for-the-books",children:"Create embeddings for the books"}),"\n",(0,o.jsx)(n.p,{children:"To create the embeddings for the books in your collection, you should run this curl command, or use the Node.js library, for each book. This process is somewhat time consuming, so we've already created them for you."}),"\n",(0,o.jsxs)(n.p,{children:["You can find the 1586 dimensions vector in ",(0,o.jsx)(n.code,{children:"embeddings"})," field of the books."]}),"\n",(0,o.jsx)(n.p,{children:"Because we already have the vectors for the books, we can use them with Vector Search."}),"\n",(0,o.jsx)(n.h2,{id:"querying-with-vectors",children:"Querying with vectors"}),"\n",(0,o.jsx)(n.p,{children:"To query the data, Vector Search will need to calculate the distance between the query vector and the vectors of the documents in the collection."}),"\n",(0,o.jsx)(n.p,{children:"To do so, you will need to vectorize your query. You can use the same function to vectorize your query as well."}),"\n",(0,o.jsxs)(n.p,{children:["In the library application, we've created a function that will vectorize your query for you. You can find it in the ",(0,o.jsx)(n.code,{children:"server/embeddings/openai.mjs"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import OpenAI from 'openai';\n\nconst { OPENAI_API_KEY } = process.env;\n\nconst openai = new OpenAI({apiKey: OPENAI_API_KEY});\n\nconst getEmbeddings = async (text) => {\n  const embeddings = await openai.embeddings.create({\n    model: \"text-embedding-ada-002\",\n    input: text,\n  });\n\n  return embeddings?.data[0]?.embeddings;\n}\n\nexport default getTermEmbeddings;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-application",children:"Configuring the application"}),"\n",(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.code,{children:"server/.env"})," file, you'll find a few variables that you can use to configure the application."]}),"\n",(0,o.jsxs)(n.p,{children:["The first one is ",(0,o.jsx)(n.code,{children:"EMBEDDINGS_SOURCE"}),". It tells the application where to get the embeddings from. You can set it to ",(0,o.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Now that you have an OpenAI API key, you can then set the ",(0,o.jsx)(n.code,{children:"EMBEDDING_KEY"})," variable to your API key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"EMBEDDINGS_SOURCE=openai\nEMBEDDING_KEY=sk-...\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);