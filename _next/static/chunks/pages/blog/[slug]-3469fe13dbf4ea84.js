(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9937:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return a(2880)}])},2880:function(t,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return p},default:function(){return g}});var i=a(5893),n=a(3305),r=a(8209),s=a(822),o=a(5861),l=[JSON.parse('{"title":"Understanding data loader","date":"2020-07-19","description":"Create a basic dataloader to understand this great library","thumbnail":{"url":"data-loader.jpg","attribution":{"name":"Lars Kienle","url":"https://unsplash.com/@larskienle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["javascript"],"filePath":"data-loader.mdx"}'),JSON.parse('{"title":"Graphql Schema Stitching","date":"2019-04-26","description":"What Graphql schema stitching is and how it can help us","thumbnail":{"url":"graphql-schema-stitching.jpg","attribution":{"name":"Aneta Pawlik","url":"https://unsplash.com/@anetakpawlik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["javascript","graphql","api"],"filePath":"graphql-schema-stitching.mdx"}'),JSON.parse('{"title":"Decomplecting shape and optionality","date":"2022-08-28","description":"Separation between the shape of an entity and the optionality of its fields as a way of improving reusability and simplicity.","thumbnail":{"url":"shape-vs-optionality.jpg","attribution":{"name":"Alfons Morales","url":"https://unsplash.com/@alfonsmc10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["schemas","simplicity","information"],"series":{"name":"Schemas","order":1},"filePath":"shape-vs-optionality.mdx"}'),JSON.parse('{"title":"Local docker registry mirror","date":"2022-09-05","description":"Why I configured a docker registry in my local machine to improve my development process","thumbnail":{"url":"docker-registry-mirror.jpg","attribution":{"name":"Guillaume Bolduc","url":"https://unsplash.com/@guibolduc"}},"tags":["docker","development","tools"],"filePath":"docker-registry-mirror.mdx"}'),JSON.parse('{"title":"Function call cascading considered harmful","date":"2023-05-24","description":"Function call cascading hits the composability, testability and reusability of software components and should be avoided in preference for sequential and explicit function calling.","thumbnail":{"url":"function-call-cascading.jpg","attribution":{"name":"Sarah Doffman","url":"https://unsplash.com/@sarahdoffman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["software","anti-patterns","composition"],"filePath":"function-call-cascading.mdx"}'),JSON.parse('{"title":"Talk, think, code","date":"2024-03-26","description":"Shifting focus in software development: from code-centric to the crucial interplay of conversation, contemplation, and coding","thumbnail":{"url":"talk-think-code.jpg","attribution":{"name":"Paul Bulai","url":"https://unsplash.com/@pcbulai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["software","tdd","pair programming"],"filePath":"talk-think-code.mdx"}'),JSON.parse('{"title":"Resume Driven Development","date":"2024-04-01","description":"A reflection on technology choices in Software Engineering","thumbnail":{"url":"resume-driven-development.jpg","attribution":{"name":"Todd Kent","url":"https://unsplash.com/@churchoftodd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},"tags":["software","design","project","boring"],"filePath":"resume-driven-development.mdx"}')].map(t=>({...t,slug:t.filePath.split(".")[0]})).sort((t,e)=>t.date>e.date?-1:1),c=t=>{let{slug:e}=t;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(o.Z,{variant:"h5",gutterBottom:!0,children:["Posts ",e]}),(0,i.jsx)("ul",{style:{listStyleType:"none"},children:l.map((t,e)=>(0,i.jsx)("li",{children:(0,i.jsx)(o.Z,{variant:"body1",children:(0,i.jsx)("a",{href:"/blog/".concat(t.slug,".html"),style:{textDecoration:"none",color:"gray"},children:t.title})})},e))})]})},d=a(1181),u=a(930),m=a(9008),h=a.n(m),p=!0,g=t=>{let{post:e}=t,{readingTime:a}=(0,u.S)(e.markdown);return(0,i.jsxs)(s.Z,{style:{width:"auto",padding:6},children:[(0,i.jsx)(h(),{children:(0,i.jsx)("title",{children:e.title})}),(0,i.jsxs)(d.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[(0,i.jsx)(d.ZP,{item:!0,sm:12,md:3,style:{padding:6},children:(0,i.jsx)(c,{})}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,md:9,children:[(0,i.jsx)("img",{src:"https://res.cloudinary.com/ddkok43g3/image/upload/t_Banner 16:9/v1711551544/".concat(e.thumbnail.url),alt:e.title,width:"100%"}),(0,i.jsx)(o.Z,{variant:"h6",children:e.date}),(0,i.jsxs)(o.Z,{variant:"body1",children:["⏱ ",a]}),(0,i.jsx)(s.Z,{children:(0,i.jsx)(n.R,{...e.mdxSource,components:{h1:t=>(0,i.jsx)(o.Z,{variant:"h3",...t,gutterBottom:!0,style:{marginTop:24}}),h2:t=>(0,i.jsx)(o.Z,{variant:"h4",...t,gutterBottom:!0,style:{marginTop:24}}),h3:t=>(0,i.jsx)(o.Z,{variant:"h5",...t,gutterBottom:!0,style:{marginTop:24}}),h4:t=>(0,i.jsx)(o.Z,{variant:"h6",...t,gutterBottom:!0,style:{marginTop:24}}),h5:t=>(0,i.jsx)(o.Z,{variant:"h7",...t,gutterBottom:!0,style:{marginTop:24}}),h6:t=>(0,i.jsx)(o.Z,{variant:"h8",...t,gutterBottom:!0,style:{marginTop:24}}),p:t=>(0,i.jsx)(o.Z,{variant:"body1",...t,paragraph:!0,wrap:!0,style:{textAlign:"justify"}}),ul:t=>(0,i.jsx)("ul",{...t}),li:t=>(0,i.jsx)("li",{...t,children:(0,i.jsx)(o.Z,{variant:"body1",...t,paragraph:!0,wrap:!0,style:{textAlign:"justify",marginBottom:3}})}),Quote:t=>(0,i.jsx)(o.Z,{style:{paddingLeft:24,fontSize:"1.2em",margin:24,color:"#33%",fontStyle:"italic"},children:t.children}),Mermaid:r.G}})})]})]})]})}}},function(t){t.O(0,[152,181,305,888,774,179],function(){return t(t.s=9937)}),_N_E=t.O()}]);