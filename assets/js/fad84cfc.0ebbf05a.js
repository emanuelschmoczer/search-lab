"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[2087],{8368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=r(5893),n=r(1151);const o={},c="Construct vector search queries",a={id:"vector-search/search-queries",title:"Construct vector search queries",description:"Just as you did in the previous step, you can explore the search results using an aggregation pipeline.",source:"@site/docs/7-vector-search/7-search-queries.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/search-queries",permalink:"/search-lab/docs/vector-search/search-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/7-search-queries.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Vector Search indexes",permalink:"/search-lab/docs/vector-search/create-index"},next:{title:"Add semantic search to your application",permalink:"/search-lab/docs/vector-search/add-to-app"}},i={},h=[{value:"Querying with the aggregation builder",id:"querying-with-the-aggregation-builder",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:r,Link:o}=t;return r||u("Details",!0),o||u("Link",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"construct-vector-search-queries",children:"Construct vector search queries"}),"\n",(0,s.jsx)(t.p,{children:"Just as you did in the previous step, you can explore the search results using an aggregation pipeline."}),"\n",(0,s.jsx)(t.h2,{id:"querying-with-the-aggregation-builder",children:"Querying with the aggregation builder"}),"\n",(0,s.jsxs)(t.p,{children:["Using the aggregation builder, or the MongoDB Shell, you can construct a pipeline that uses the ",(0,s.jsx)(t.code,{children:"$search"})," stage to query the ",(0,s.jsx)(t.code,{children:"vectorsearch"})," index."]}),"\n",(0,s.jsxs)(t.p,{children:["Add the following code for the ",(0,s.jsx)(t.code,{children:"$search"})," stage."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'{\n    index: "vectorsearch",\n    knnBeta: {\n        vector: `vector goes here`,\n        path: "plot_embedding",\n        k: 20\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The stage uses the ",(0,s.jsx)(t.code,{children:"vectorsearch"})," index. Rather than using the 'text' operator as we did for full-text searches, we are using the ",(0,s.jsx)(o,{to:"https://www.mongodb.com/docs/atlas/atlas-search/knn-beta/",children:"knnBeta"})," operator this time."]}),"\n",(0,s.jsxs)(t.p,{children:["For now, this stage will break. You will need to pass it a vector in the ",(0,s.jsx)(t.code,{children:"vector"})," property."]}),"\n",(0,s.jsxs)(t.p,{children:["Paste the following vector to replace the ",(0,s.jsx)(t.code,{children:"vector goes here"})," text."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)("summary",{children:["Click to see the vector for ",(0,s.jsx)(t.code,{children:"picture of cats"})]}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"[-0.00802491605,0.0240616407,0.0156506654,0.0227557737,0.00586958556,-0.000877696963,-0.00837553944,0.00441328157,0.0246054661,0.0112228561,-0.00798941683,0.0101284757,-0.00692195026,0.0136159742,-0.00633258419,-0.0422791205,0.0134535609,-0.0167263933,0.00325671909,0.00577030517,-0.0242607631,0.00762746856,-0.0122055011,-0.00828897487,0.013215648,0.0102280397,-0.0148972841,-0.00319051463,-0.0117281582,-0.00166862761,0.0184198692,0.00449387264,0.0133674731,0.0105862822,-0.00940381456,-0.00834416,0.00820271205,0.0124874767,-0.0184884276,0.00299116527,-0.0326079428,-0.000683631049,-0.00837831106,0.00924219564,0.0100665959,0.00205677818,-0.0103288786,-0.0113185849,0.0127064623,-0.00666232081,-0.00677086273,0.00108296622,0.0147874793,0.0157906692,-0.0015113072,-0.0118079465,-0.0302016772,0.004233093,-0.00107527862,0.0204627458,0.00187952467,0.00516990945,-0.00979938265,-0.00449781027,-0.0172845516,0.00380261615,0.00666859467,-0.0243013762,0.00182264694,-0.00875844527,0.00155076419,-0.0172643885,-0.000730601,0.0204664115,-0.0328668654,-0.0209298842,0.00812446419,0.0139788231,0.000795510598,0.0148924543,-0.0028627303,-0.00488436595,0.00538602425,0.00498558674,-0.0316463,0.00951200072,0.0262578707,0.015315867,0.0114652012,-0.0190427322,-0.0042081126,0.00621700799,0.03902689,-0.00214302354,-0.0322257653,-0.00840948801,0.0216570348,0.000449464598,-0.0294785574,0.0150223486,0.0133912694,-0.00031397873,0.0143265445,-0.00549782254,0.0098845223,-0.01818466,-0.00361134042,0.0146500766,0.022538377,0.0259709675,-0.0079225013,-0.011942029,0.00848097913,0.00808298122,0.0090851672,0.0151292589,0.0187376849,0.0130407391,-0.0241381358,0.0199142899,0.000135015594,-0.00508249225,0.00547654694,0.00881914049,-0.0368582495,-0.0109609915,0.0180225763,0.0199620035,-0.0394118279,0.0102506205,0.0103331124,0.00611087168,-0.00168146822,-0.0104583539,0.0231727697,-0.028505804,0.00975426566,-0.0200082771,0.00532549154,0.0325462744,0.0190669764,0.00409841444,0.00697997725,0.0106449947,0.00609665131,-0.00379617559,0.00751113752,-0.0382042341,0.0161323939,0.000344559434,-0.00571473921,-0.00660773879,-0.00996067561,-0.00362857711,0.0386084653,0.0160479695,0.00494500482,-0.029311588,-0.0129988706,0.00692986045,0.0018833006,-0.00503021851,-0.0161953829,-0.0150932362,0.0173366033,-0.00192057912,0.0026912475,-0.0146938507,-0.00286515802,-0.0182418916,-0.0212429818,-0.0167730413,0.0159405787,0.00757021643,-0.0189233,-0.0136755463,-0.0249917917,0.0066402643,0.00154506927,0.0111983158,-0.0115391677,0.0171794686,0.00321749342,0.00594531791,-0.00952802598,0.0047901608,-0.00938131753,-0.0330481902,0.0391707234,-0.00233458169,0.0105178906,-0.0013398655,0.0225834642,0.00201141345,0.00692005642,0.0248683449,0.0515395291,0.0158347525,-0.0114777284,0.00732493354,0.00759227341,0.00883474294,0.00635950873,0.00598407164,-0.0112195006,0.0104233529,-0.0123643754,0.0193688739,-0.0165957212,0.00180147903,-0.00835859124,0.00277339201,-0.00839395169,-0.0299825259,0.0287847742,0.015510058,0.00715700723,0.0075154705,-0.0563426651,0.000711914559,-0.0110218544,0.0230955128,-0.0184240118,0.007016527,0.00799922179,-0.00229826709,0.0264856257,0.00164960953,0.0302867945,-0.0125343325,0.0190312434,-0.00345193618,0.00811238121,0.00613901904,-0.0110856751,0.00999168213,0.0314776711,0.0167495646,0.0131260203,-0.00366122858,-0.000827631447,-0.00524777314,0.0090510333,-0.0115304869,-0.0165283922,-0.0308010112,-0.015887104,0.00551707577,0.016484065,0.00871058926,0.0104584349,0.00772333704,0.0135983732,0.0201758482,0.00608657952,-0.0153559418,-0.0368431695,-0.0356910378,0.0415220447,0.0322805233,-0.0121134957,0.0184223186,-0.0213956814,0.0238362662,-0.0128721967,0.0244660154,-0.016045358,0.0226861499,-0.00415865798,0.0369086117,-0.00324448571,-0.0103668105,0.0140802581,-0.0150297154,0.0157618169,0.00719395559,0.0236805715,0.00518673938,0.0201643799,0.0108979605,0.00414909888,0.0212911535,0.0189768467,0.0129341977,0.00954844709,0.00500276824,0.00172594539,0.00414736383,-0.00309478235,0.00655931188,-0.00516669126,0.010733217,0.0299220737,0.00711261714,0.014398206,0.0257015582,0.0354256593,0.00335934,0.00732164178,-0.0120923184,0.00264306762,0.012462114,0.0173053928,0.0130969817,0.00160309416,0.0404248163,-0.00971508864,0.00361057511,0.00000899762472,-0.00774216279,-0.007159987,0.0125888493,0.0196501017,0.036590416,0.0162015557,-0.00740147615,-0.000934090524,-0.00545313628,0.00980590377,0.0180745926,0.0185892824,-0.00908293761,-0.00889189634,0.00179950614,0.0291789621,-0.00714765163,-0.0042308527,0.00835010596,-0.00138377375,-0.00268810056,-0.0200588387,-0.017761413,0.0215202961,0.0101636369,0.033274278,0.00988222193,-0.00892606098,0.0166951157,0.00183993636,0.0118745044,-0.0344815925,0.0388876684,-0.00944332872,0.0391427092,0.0138635254,0.00623347051,0.0197562911,0.00227385154,0.0125887645,-0.00470185606,-0.00977736246,0.00795571,0.00975896139,0.00383472885,0.00617399858,-0.011744597,0.00115439494,-0.0133046191,0.0123966532,0.0120509164,0.00995304529,0.0424228907,0.00155997521,0.0226087328,-0.000412236725,-0.00349342846,-0.0151380859,0.000175935755,-0.000277655374,-0.0031756172,0.005872407,-0.00873432681,-0.00258508045,0.00151711027,-0.0412181169,0.0174524784,-0.00374247553,-0.000809520192,-0.0112947803,0.00797150098,0.0134340078,0.00381671032,0.0164208934,-0.00672049494,-0.00752267241,0.00807641633,-0.00995228905,0.00224555354,0.0173638407,0.0227635857,-0.025534,-0.0199717507,-0.0191798601,0.0181043297,-0.0258354526,-0.0186036341,-0.00856765918,0.00597898709,-0.00931318291,-0.000537668762,-0.00664865924,0.0148012266,0.00698380545,0.0288432557,-0.00151406578,0.00607599597,0.0223347377,0.0263315979,-0.0108485948,-0.0142584667,0.03043475,-0.0163255669,0.00551662873,0.0171334147,-0.000751855667,0.00448632613,-0.229840815,-0.0234855637,0.00967892632,0.00896601938,-0.0263894554,0.0121928807,0.0280670729,-0.00640114769,-0.0158014912,0.0107647441,0.024624832,0.00314167771,0.0113345617,0.0113050956,0.00539918058,0.0189342164,0.0124191092,0.00646109786,0.00127670553,0.00879643206,-0.0222005174,0.00333250477,0.0072705755,-0.221598104,-0.0075291479,0.0384999067,0.0116875991,0.0115654888,-0.0016727047,0.00790404901,0.00518775545,-0.0110330349,0.00890403148,0.0286384113,-0.0152124008,-0.0275898352,-0.0110776583,0.00928325,-0.000446709601,0.0102810888,-0.00283843721,0.0240762215,0.00218379078,0.00956486911,-0.0297233649,0.00829839,0.0542721748,-0.00458907941,-0.00946989283,-0.00319032744,0.0373025574,-0.032439,-0.0036090794,0.00246843719,0.0287247766,-0.228984073,0.00245602452,0.0133677879,0.0212148838,0.0153655615,-0.00577300787,0.0151149752,0.00757590821,-0.00995513145,0.0157032255,0.044069767,-0.0199497212,0.0297705531,-0.0168821532,0.00547856279,-0.00726383179,-0.00505008874,0.00543712359,0.00813332293,-0.00629506167,0.0330888703,0.00691835443,0.00508523965,0.0160709359,-0.0166681074,-0.00522186,-0.00772311725,-0.00782758649,-0.0209431667,0.0137817031,0.00482699415,0.0129239131,0.016318839,0.000505635,0.00332339108,0.00410890533,-0.0155054582,-0.00264356239,-0.0341228172,0.00673902966,-0.00385322864,-0.018016668,-0.0140990764,-0.00510306889,-0.00497383904,0.0189026427,-0.0155481296,0.0102520399,0.0204480663,0.00860850886,0.00873707235,0.0101989917,0.00997739844,0.0157992579,0.00711391307,0.000317548023,0.039456103,-0.0141843986,0.0189181976,0.0102276308,0.0316578448,0.0112432744,0.0203254931,0.0059236465,0.00146364572,0.0104370015,0.000401833124,-0.00351363653,-0.00282230088,0.016378263,0.0103797484,0.0178243425,0.00796642154,-0.00991567411,0.0111792274,-0.0272428598,0.00439593,0.0318235978,0.00669904,0.0147646079,0.0212139264,0.0139522236,0.0326622762,0.0183211714,0.0000384565938,0.0143237,-0.0089651579,0.0194831155,-0.00181478949,-0.00860754121,0.0194074679,-0.00233098678,0.0354391,-0.00139500573,-0.0100665111,0.0164284389,0.00645894557,0.00663231313,0.0259437636,0.00476939557,0.0139693255,0.0354706421,0.000679769728,0.00199441076,0.00886078179,0.0105803646,0.0144495787,0.0629430711,0.0145165222,-0.00664697448,-0.0381155796,0.0250938982,0.00339673646,0.0145847565,0.00423371559,0.0337590054,-0.00942434557,-0.00148862787,-0.00245210086,-0.00298909,-0.0052025211,0.0212815106,0.000787755765,-0.0158076752,0.0183687545,0.00159678282,0.0253864396,-0.00544803031,0.0135678817,0.0242214818,-0.015035552,0.0118937679,-0.0125857806,0.00491148606,-0.025825642,0.0162522439,0.0006432347,0.00286104949,-0.0141923018,0.00283849146,0.00136645488,0.0152652608,-0.00857639406,0.0116023198,0.0138091492,0.0105760647,-0.000975322851,0.00379518815,0.0250064675,-0.006042792,-0.228362024,-0.00697044842,-0.0338153541,-0.193097532,0.0119376285,0.0121673057,0.0256088488,0.0179927647,-0.0198210478,0.00181541685,-0.0033755519,0.0143455304,0.0154119954,0.000155120957,0.00968956109,-0.00737253344,0.0417208,0.00524631795,0.0182968155,0.00426794868,-0.0254509728,0.0378315151,0.0305425264,-0.00833326578,0.00621851115,-0.0053446223,-0.00279786438,0.0228737444,-0.0226143096,-0.00538672972,-0.00312427804,0.00947130192,-0.0240549799,0.0100173932,0.00585468626,0.0196993612,0.0244456846,0.00678088609,0.0205639862,0.0008442463,-0.0130977118,0.0235116538,0.00663697859,0.00368035375,0.00292582926,-0.0158553515,0.00881513488,0.0233538058,-0.0165214557,0.0161653236,0.00441227,-0.00783294439,0.00598282414,-0.00620272942,-0.00736105,0.00398889789,0.0133271534,-0.0106148822,-0.000896711776,0.0263074841,0.00032930242,-0.0268834103,0.0210875589,0.00613600481,-0.00652302802,-0.0115209268,0.0140754012,0.00854917523,-0.0129218111,0.0197077971,-0.0228667688,0.0145290401,-0.00985673163,-0.0097767869,-0.00448048161,-0.00236364431,0.0210158527,0.0207423363,0.0323248096,0.00960183889,0.0027213213,0.0117226979,0.00628550956,-0.0234709326,0.0127962232,-0.0285143312,0.0307200812,0.00722836284,-0.00809266884,0.00754953315,0.0158451945,0.00172643876,0.0144405486,0.0133775305,0.00395857822,-0.00936290622,-0.00625919877,-0.0117797619,0.0103409188,0.00365740876,-0.0148406532,0.0108498102,-0.00705852639,0.0127128763,0.00756807486,-0.0184703041,0.00132190785,-0.0215325169,-0.00164490053,0.0252446905,0.0206712298,-0.0211247951,0.0182651356,0.0382142477,0.00819651,-0.00695483759,-0.00576777849,0.00787170418,-0.0217001066,-0.0275743101,-0.0161867123,0.0363661721,0.0600511692,-0.00707833702,0.0153872492,0.00239441521,-0.0186960362,-0.00128735171,0.0178189334,-0.0251913108,-0.00644435966,0.00397603586,0.00840659533,-0.00043422819,-0.015017313,0.0315842181,-0.0118113849,0.000682637619,-0.00119800586,-0.0192746,-0.0167456716,0.0196436215,-0.0104407398,-0.00145943777,0.0146267181,-0.0108074667,0.00845483132,-0.0022812963,0.0202706698,0.00965798181,-0.00889841467,-0.0156081812,-0.015987739,0.0044001583,0.0172318406,0.0136728333,0.00139494636,0.084968783,0.00631469209,0.0134700621,0.00586518738,0.00516289659,0.0204099398,0.00192452362,-0.00744210184,0.0188576896,0.000266200223,0.00342287938,-0.00830486324,0.0103131728,-0.0103032263,0.0144574596,0.0109060714,-0.0107836425,-0.00830108859,0.0338041745,0.0291963555,-0.00284821913,0.0282300469,0.00333986827,-0.00181173335,0.0135900592,0.017917484,0.0174211711,-0.000844111142,-0.00126551278,-0.00478461524,-0.00582240568,-0.00554111414,-0.0279321335,0.0424772277,0.000576458406,0.0200916976,0.0113849081,-0.0242333356,-0.0177761875,0.0156754553,0.0165956337,0.0236953348,-0.0203450266,-0.0161315519,0.0120129315,0.0178083573,0.0112367375,-0.0126967011,-0.0210213307,-0.00636235811,0.0203388613,0.0025166641,0.0134730302,-0.0159469824,0.00204189285,0.027177453,0.0225132927,0.0114224246,-0.00111478928,0.047399465,0.00967116,0.0439324081,-0.0129732853,0.02923337,-0.0147371376,0.0170810279,-0.0121412557,-0.0176086184,0.0130953602,0.0460908487,0.0198945571,0.00499679428,0.007372919,0.0170349982,0.0103050396,-0.00111758383,0.00520278374,0.00123473944,0.219565779,-0.0179843977,-0.000355036027,0.0130937165,0.000537727843,0.00196418609,0.0131035438,0.0188785885,0.0290263817,-0.00777809648,-0.00784394611,-0.00608688546,0.0125311175,-0.0377710946,0.0237391479,-0.00949994382,0.0170966294,0.00178020145,-0.00358088594,0.0234263334,0.00377087924,0.00943070278,-0.00942289457,-0.00759493234,-0.0106309038,-0.00363691268,-0.0159567408,-0.00698130298,-0.00126457319,-0.00336245308,0.0256013069,0.00744897872,0.0162254572,0.00714319,-0.0136464378,0.0248314347,-0.00361738284,0.00537463976,0.0121442666,-0.0249189436,0.00968076661,0.00234838808,-0.00886372291,0.012202695,0.003971003,0.00872114953,0.01732927,-0.00881973188,-0.0175183751,-0.03019871,0.0110739013,0.00929465052,-0.00091516762,-0.0168903116,0.0427370854,0.0397208631,-0.00110220292,0.0161889791,-0.0027251963,0.00705367932,0.0295920726,0.0104164984,0.0141974054,0.0167169273,0.000571083277,0.00727381557,0.000099390847,-0.0058903927,-0.0235235114,-0.0106814988,0.0104218964,0.0354873314,-0.0133900521,0.0112241432,0.00302290265,-0.00225721,0.0288944207,-0.0122797526,0.00576435495,-0.0121270232,-0.0157272536,0.00243448396,-0.0085853925,0.00714963209,0.020393176,-0.00965307932,0.0195136089,0.00153425778,-0.0100422958,0.00498952344,0.00551401591,0.0155348564,-0.00421622721,-0.00490904,-0.00549762277,0.0163199194,-0.00170706795,0.00808385666,0.0114792129,-0.00275939237,0.00648807036,0.00128980516,0.0270078331,-0.0160327647,-0.0117059154,-0.0190101359,-0.00601123599,0.0223745015,-0.00353342667,-0.013811958,-0.0247469768,-0.00299617951,0.00415709708,0.0104646673,-0.00531847076,-0.00301482505,-0.011774254,0.0128560215,0.0113762245,-0.00318888971,-0.00496293511,0.0216955133,0.00509484485,0.00182164984,-0.000988959,0.0064088651,0.0287717972,0.00521143759,0.000335434306,0.00848935451,-0.0226671509,-0.00043528885,-0.0141042676,-0.0254967082,0.0250338744,0.0126895681,0.027820399,0.0247979052,0.00590240862,0.00815761089,-0.00717867445,0.0016153761,0.0290358867,-0.0339485779,0.00961053837,0.0122714955,-0.00807555486,-0.0193947,0.0227041394,0.0232468098,0.0243568514,0.000138925709,-0.0107289152,-0.0252247602,0.00453286,0.00556156412,0.00129912689,0.0212301742,0.0261683036,-0.000859727559,0.00375262671,0.00737112062,-0.006803317,0.0136250295,0.0180725,-0.0136546511,0.00872892793,-0.0246782359,0.0390293151,-0.00103759312,-0.0147971641,-0.00790204201,0.0242973957,0.0139800031,-0.00195456552,0.00802821945,-0.00638306607,0.00997355767,-0.0151230339,-0.00994905457,0.019440297,0.0282954015,0.0126052098,0.0241559334,-0.00459537469,0.0129739037,-0.00474468898,-0.018074831,-0.0210719872,0.0166045912,0.0201117434,-0.0144225042,-0.0141370827,0.0154166231,-0.0186231378,0.0239870138,-0.0232790224,-0.223487899,-0.00212555984,0.0205945168,0.000926016946,-0.0135170715,0.00459536677,0.0272190683,-0.000408953929,0.0210972782,0.025541801,-0.0121275187,-0.0166169815,-0.0235149153,-0.0318261,0.0263093784,-0.0244164243,0.0200398862,-0.010077063,0.0111209648,0.0295478832,0.000790972554,0.0268630795,-0.00500549097,-0.0086622918,-0.0248096194,0.208552644,-0.0234094784,0.0169422179,0.0106000686,0.00627353741,0.000118083444,-0.0101600597,-0.0114840958,0.0160143692,0.0247207303,0.00285751466,0.0138045736,0.0167154893,0.00772670889,-0.00920324586,-0.00453023426,0.0167354178,0.00698665855,0.0176196788,-0.0032402724,0.0326231,0.00888123363,-0.0216446817,-0.00454629445,0.0008608239,0.0504180603,-0.00460268743,-0.010421223,-0.00409835298,-0.00336289522,0.00917823426,0.00341391889,0.00635075942,0.0085533224,0.00256407075,0.0128791733,-0.00571867172,0.00333326333,-0.00920625497,0.0183455665,-0.00234748772,0.0144854756,-0.00844732579,0.0222745612,0.220979527,-0.0133016147,-0.0182890054,-0.01076975,0.0232210848,0.0122078955,-0.00209109485,-0.000157570335,0.000251560152,-0.00950984377,-0.0150755048,-0.0222989693,-0.00580891408,0.00267705554,0.000373038522,-0.00497694919,0.0249394104,0.0210105609,-0.0134467855,-0.00578719,0.0281152744,-0.0210963581,-0.00977940578,-0.0221245885,0.00390774105,0.0200295616,0.00568181789,-0.0331429131,0.0249348339,-0.0100831473,-0.0133163622,0.0183860678,-0.00219186046,0.00492053572,-0.0254357066,0.0191146471,-0.00509880576,-0.0189069826,0.0113143688,-0.23042357,0.0128713017,-0.0322210491,0.00386002264,0.00462230295,-0.000907576177,0.00215195585,-0.0313878916,0.170989305,-0.00880902,-0.0107655209,-0.0136208534,-0.0185232684,-0.00704749906,0.0443685204,0.00651294738,-0.0172712691,0.0243552588,-0.00693733152,0.0192668289,-0.00180717232,-0.00498506194,0.00076457113,-0.00393468468,0.0100849858,-0.0273887,0.0310210939,0.00783415698,-0.00039136238,0.0173305068,0.024281105,-0.0239944234,-0.227128386,0.0124814585,0.00885916222,0.020875,-0.0126827471,-0.00166740164,-0.00322133652,0.0287498608,0.0310264677,0.0115610156,-0.00998082198,0.00489164516,0.0250572544,0.0028394484,-0.00283252797,-0.229804322,-0.00288088,0.0113297701,0.00204535853,0.0216417629,0.0124889901,0.010687435,-0.0127221271,0.0109902984,0.0172826294,-0.0285672769,0.00666733412,0.0449094698,-0.00572891,-0.00746579375,0.00865611248,0.0190349035,-0.0132853948,0.0393135,0.0147600714,-0.00011938742,-0.0120705217,0.011227984,0.00580222532,0.0198715068,0.0186727457,0.0079809092,-0.000721148273,-0.0123789953,0.0129815741,0.0281142388,-0.0117182201,-0.00037197434,0.0422322825,-0.000493146246,0.00191043969,0.0130059,-0.00221638544,-0.0096059,-0.00768771442,-0.0038220617,-0.0126645686,0.0296432581,0.0065142517,0.00113534182,0.0143230613,-0.0242314227,-0.0138825737,-0.00422595954,-0.00440263562,0.0137634752,-0.0295174718,-0.0181119796,0.0100923963,-0.0205779523,-0.0221974514,0.00987331569,0.0000871940501,-0.0195205398,-0.006805351,0.0242732447,0.0131077133,0.0124753891,0.0147192897,-0.00364671787,0.00111482246,0.0129941311,0.0159815531,-0.00447233533,-0.00604719389,0.0020313,-0.0108457189,-0.00557581848,0.017729111,0.00271862117,-0.00823405664,0.0201150011,0.00724193081,-0.0502968021,0.00360576413,0.0192091092,-0.00437411573,-0.00883363467,0.000902920438,0.00445053121,-0.00269036461,-0.00109009538,0.00200464576,0.00191767665,0.000950078247,-0.00145122525,-0.0204572473,0.007165886,-0.0106116459,0.00688810926,-0.00577922491,-0.00419087149,0.0132615315,0.0161938984,0.00832053088,0.0232534297,-0.00915452838,0.0208700784,0.00763607444,-0.00144710112,0.00267661712,0.0181783587,-0.0109095871,0.0288386,0.00067075633,-0.00359102641,-0.0135177178,-0.00114308635,-0.00359936431,0.0288293343,0.0046853954,-0.015776718,-0.0149433063,0.0209040157,-0.0158829819,0.0263037458,0.00285985461,0.0361319967,0.00450716401,-0.0335508659,0.00736144325,-0.00361063913,-0.0201403592,-0.00736735668,0.0169842616,-0.00614119554,0.0213440768,0.0070744534,0.0223967154,0.0243366249,0.0162241776,-0.0188373569,0.0010064072,0.0135602448,-0.000130158398,-0.00728381472,-0.00819999073,-0.00706619117,0.00536198262,-0.0107276682,0.0000635787947,0.0169436578,0.0418701842,0.0145351458,0.0184344724,0.000285986258,-0.0159483738,0.00812584069,-0.0125784818,0.00259019341,0.00930608623,-0.00255064829,0.0184694342,0.0272276364,0.00619378686,-0.00771303242,0.0241645928,0.00899061561,0.00359628466,0.0295196399,-0.00188888877,-0.0427295417,0.00928015728,-0.00141893013,-0.0248669516,0.0336148962,0.0170010291,0.00591239147,0.0219708364,0.00797422882,0.00213361322,0.00859058648,0.00946909189,-0.00845733937,-0.0246119052,0.0058443821,0.0134367859,-0.00326061412,0.0163744371,0.00324931345,0.0323941112,-0.0103796273,0.0173730869,0.00742445327,-0.00119882845,0.00303767016,-0.00336329918,-0.000223753828,0.00849045347,-0.00875553116,0.0115983784,-0.0107410317,0.00622474914,0.0104889432,-0.015291593]\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["You should see a list of books where the cover has a picture of cats. The word ",(0,s.jsx)(t.code,{children:"cat"})," may, or may not, be on the cover of the book. Our search returns results that are similar in context, but not in content."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var s=r(7294);const n={},o=s.createContext(n);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);