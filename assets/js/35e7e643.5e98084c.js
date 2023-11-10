"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[3312],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(4137));const a={},l="Using Google Vertex",i={unversionedId:"vector-search/create-vectors/google-vertex",id:"vector-search/create-vectors/google-vertex",title:"Using Google Vertex",description:"Google Cloud now offers a series of AI Platform services that are built on top of Vertex AI. These services are designed to help you build, deploy, and manage machine learning models.",source:"@site/docs/7-vector-search/5-create-vectors/4-google-vertex.mdx",sourceDirName:"7-vector-search/5-create-vectors",slug:"/vector-search/create-vectors/google-vertex",permalink:"/search-lab/docs/vector-search/create-vectors/google-vertex",draft:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/5-create-vectors/4-google-vertex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using OpenAI",permalink:"/search-lab/docs/vector-search/create-vectors/openai"},next:{title:"Using Amazon SageMaker",permalink:"/search-lab/docs/vector-search/create-vectors/amazon-sagemaker"}},c={},s=[{value:"Create a Google Cloud account",id:"create-a-google-cloud-account",level:2},{value:"Create new project",id:"create-new-project",level:2},{value:"Open Cloud Shell",id:"open-cloud-shell",level:2},{value:"Enable the AI Platform API",id:"enable-the-ai-platform-api",level:2},{value:"Create an authentication file",id:"create-an-authentication-file",level:2},{value:"Create embeddings for some text",id:"create-embeddings-for-some-text",level:2},{value:"Create embeddings for the books",id:"create-embeddings-for-the-books",level:2},{value:"Querying with vectors",id:"querying-with-vectors",level:2},{value:"Configuring the application",id:"configuring-the-application",level:2}],u=(p="Screenshot",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-google-vertex"},"Using Google Vertex"),(0,r.kt)("p",null,"Google Cloud now offers a series of AI Platform services that are built on top of Vertex AI. These services are designed to help you build, deploy, and manage machine learning models."),(0,r.kt)("p",null,"To create embeddings, they offer a number of services to convert text, images, or both into embeddings. In our application, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"multimodal")," embedding model to search for books by a description of the cover image."),(0,r.kt)("h2",{id:"create-a-google-cloud-account"},"Create a Google Cloud account"),(0,r.kt)("p",null,"The first step is to create a Google Cloud account. Use the following link to get started with some free credits."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"Sign Up for a Google Cloud Account")),(0,r.kt)("h2",{id:"create-new-project"},"Create new project"),(0,r.kt)("p",null,"For the welcome screen, create a new project. You can name it whatever you like."),(0,r.kt)("p",null,"Make sure that you pick an active billing account."),(0,r.kt)(u,{src:"/img/screenshots/7-vector-search/5-create-vectors/4-google-vertex/1-create-project.png",url:"https://cloud.google.com",mdxType:"Screenshot"}),(0,r.kt)("p",null,"Once the fields are filled out, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," button."),(0,r.kt)("h2",{id:"open-cloud-shell"},"Open Cloud Shell"),(0,r.kt)("p",null,"Once your project is created, look for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Activate Cloud Shell")," button in the top right corner of the screen."),(0,r.kt)(u,{src:"/img/screenshots/7-vector-search/5-create-vectors/4-google-vertex/2-activate-cloud-shell.png",url:"https://cloud.google.com",mdxType:"Screenshot"}),(0,r.kt)("p",null,"This will open up a terminal-like window in your browser. This is a fully functional terminal that is connected to a virtual machine in the cloud. You can use this terminal to run commands on your virtual machine."),(0,r.kt)("h2",{id:"enable-the-ai-platform-api"},"Enable the AI Platform API"),(0,r.kt)("p",null,"You will need to enable the AI Platform API for your project. You can do this by running the following command in your Cloud Shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud services enable aiplatform.googleapis.com\n")),(0,r.kt)("h2",{id:"create-an-authentication-file"},"Create an authentication file"),(0,r.kt)("p",null,"To authenticate with the AI Platform API, you will need to create a file that contains your application credentials. You can do this by running the following command in your Cloud Shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth application-default login\n")),(0,r.kt)("p",null,"Follow the instructions in the terminal to authenticate with your Google Cloud account. Once you have authenticated, you will see a message similar to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Credentials saved to file: [/tmp/tmp.n0HdRFDDv8/application_default_credentials.json]\n")),(0,r.kt)("p",null,"Save the credentials file to your home directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv /tmp/tmp.n0HdRFDDv8/application_default_credentials.json ~/credentials.json\n")),(0,r.kt)("h2",{id:"create-embeddings-for-some-text"},"Create embeddings for some text"),(0,r.kt)("p",null,"To create embeddings for some text, you will start by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"request.json")," file. This file will contain the text that you want to convert into embeddings. Run the following command in the Cloud Shell to create this file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{\n  "instances": [\n    {\n      "text": "picture of a cat"\n    }\n  ]\n}\' >> request.json\n')),(0,r.kt)("p",null,"Now run the following curl command to get the embeddings for the text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n    -H "Authorization: Bearer $(gcloud auth print-access-token)" \\\n    -H "Content-Type: application/json; charset=utf-8" \\\n    -d @request.json \\\n    "https://us-central1-aiplatform.googleapis.com/v1/projects/$PROJECT_ID/locations/us-central1/publishers/google/models/multimodalembedding@001:predict"\n')),(0,r.kt)("p",null,"Make sure to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PROJECT_ID")," variable to your project id."),(0,r.kt)("p",null,"You will receive a response similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "predictions": [\n    {\n      "textEmbedding": [\n        -0.00566103263,\n        0.0202014241,\n        -0.00677233562,\n        0.0180264488,\n        0.0265100803,\n         ...\n        0.00116232142,\n        0.0134601779,\n        -0.00257002981\n      ]\n    }\n  ],\n  "deployedModelId": "5595742328217141248"\n}\n')),(0,r.kt)("p",null,"You will notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"textEmbeddings")," fields contains an array of 1408 numbers. These are the embeddings for the text that you provided."),(0,r.kt)("h2",{id:"create-embeddings-for-the-books"},"Create embeddings for the books"),(0,r.kt)("p",null,"To create the embeddings for the books in your collection, you should run this curl command for each book. This process is somewhat time consuming, so we've already created them for you."),(0,r.kt)("p",null,"You can find the 1408 dimensions vector in ",(0,r.kt)("inlineCode",{parentName:"p"},"embeddings")," field of the new books collection you imported."),(0,r.kt)("p",null,"Because we already have the vectors for the books, we can use them with Vector Search."),(0,r.kt)("h2",{id:"querying-with-vectors"},"Querying with vectors"),(0,r.kt)("p",null,"To query the data, Vector Search will need to calculate the distance between the query vector and the vectors of the documents in the collection."),(0,r.kt)("p",null,"To do so, you will need to vectorize your query. You can use the same function to vectorize your query as well."),(0,r.kt)("p",null,"In the library application, we've created a function that will vectorize your query for you. You can find it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/embeddings/googleVertex.mjs")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import aiplatform from '@google-cloud/aiplatform';\n\nconst project = process.env.PROJECT_ID;\nconst location = process.env.PROJECT_LOCATION;\n\nconst {PredictionServiceClient} = aiplatform.v1;\nconst {helpers} = aiplatform;\nconst predictionServiceClient = new PredictionServiceClient({\n    apiEndpoint: 'us-central1-aiplatform.googleapis.com'\n});\n\nconst getTermEmbeddings = async (text) => {\n  const publisher = \"google\";\n  const model = 'multimodalembedding@001';\n\n  // Configure the parent resource\n  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;\n\n  const instance = { text };\n  const instanceValue = helpers.toValue(instance);\n  const instances = [instanceValue];\n\n  const request = {\n    endpoint,\n    instances\n  };\n\n  // Predict request\n  const [response] = await predictionServiceClient.predict(request);\n  const embeddings = response.predictions[0].structValue.fields.textEmbedding.listValue.values.map(e => e.numberValue);\n\n  return embeddings;\n};\n\nexport default getTermEmbeddings;\n")),(0,r.kt)("h2",{id:"configuring-the-application"},"Configuring the application"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"server/.env")," file, you'll find a few variables that you can use to configure the application."),(0,r.kt)("p",null,"The first one is ",(0,r.kt)("inlineCode",{parentName:"p"},"EMBEDDINGS_SOURCE"),". It tells the application where to get the embeddings from. You can set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"googleVertex"),"."),(0,r.kt)("p",null,"Then set the ",(0,r.kt)("inlineCode",{parentName:"p"},"EMBEDDING_KEY")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials.json")," file."),(0,r.kt)("p",null,"Finally, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_LOCATION")," to the values for your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'EMBEDDINGS_SOURCE=googleVertex\nEMBEDDING_KEY="./credentials.json"\nPROJECT_ID=projectphoenix-verteximage\nPROJECT_LOCATION=us-central1\n')),(0,r.kt)("p",null,"Your application now has a ",(0,r.kt)("inlineCode",{parentName:"p"},"getTermEmbeddings")," function that will return the embeddings for a given text. You can see the details of this file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/src/embeddings/googleVertex.js")," file."))}h.isMDXComponent=!0}}]);