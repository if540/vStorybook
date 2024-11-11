import{f as v}from"./index-DcZGqPg1.js";import{u as L}from"./useA11yUrl-Dy8YWFNH.js";import{l as C,m as i,b as n,d as o,t as E,n as m,g as p,F as M,o as r}from"./vue.esm-bundler-Bi8UYanr.js";const N={key:0},k={for:"title"},x={key:1},H=["title"],_=C({__name:"HM1130112EComponent",props:{name:{default:"一般"},title:{},type:{default:"normal"}},setup(h){const e=h,s=i(()=>({"ml-2 rounded outline-1 outline outline-gray-300 focus-within:outline-gray-600":e.type=="normal","rounded outline-1 outline outline-gray-300 focus-within:outline-gray-600":e.type=="noneLabel"}));return i(()=>({})),(l,S)=>(r(),n(M,null,[e.type=="normal"?(r(),n("div",N,[o("label",k,E(l.title),1),o("input",{type:"text",id:"title",name:"title",value:"",class:m(s.value)},null,2)])):p("",!0),e.type=="noneLabel"?(r(),n("div",x,[o("input",{type:"text",id:"title",name:"title",class:m(s.value),title:l.title},null,10,H)])):p("",!0)],64))}});_.__docgenInfo={exportName:"default",displayName:"HM1130112EComponent",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"一般"'}},{name:"title",description:"提示資訊 label 為 text, input 為 title or aria-label...",required:!1,type:{name:"string"}},{name:"type",description:"控制器類型，一般|無法使用label時",required:!0,type:{name:"union",elements:[{name:'"normal"'},{name:'"noneLabel"'}]},defaultValue:{func:!1,value:"'normal'"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/1.可感知/指引1.3：可調適/成功準則1.3.1：資訊與關連性/HM1130112EComponent.vue"]};const c=L(import.meta.url),B={component:_,parameters:{docs:{subtitle:"使用標籤組件將文字標籤(label)與表單控制元件(input, select...)建立關連",description:{component:`${c.storyTitleMasterLayout}${c.storyCheckReadme("表單控制項請使用 Label for 標籤或相類機制<strong>提示資訊</strong>。以遵循 1.3 可調適指引 <strong>'建立能以不同方式呈現(例如簡化的版面)，而不會喪失資訊或結構的內容'</strong>。")}<h3>注意事項:</h3><ul><li>\`label\` 不要包在控制元件外層。</li><li>無法使用標籤組件的情況下，可依循 <a href="#">稽核評量碼: HM1130113E</a> 用標題屬性來指明表單控制元件。</li></ul>`}}},args:{onClick:v()}},t={name:"一般",args:{name:"一般",type:"normal",title:"標題"},parameters:{docs:{description:{story:""}}}},a={name:"無法使用label時",args:{name:"無法使用label時",type:"noneLabel",title:"標題"},parameters:{docs:{description:{story:'無法使用標籤組件的情況下，可依循 <a href="#">稽核評量碼: HM1130113E</a> 用標題(`title`)屬性來指明表單控制元件。'}}}};var u,d,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "一般",
  args: {
    name: "一般",
    type: "normal",
    title: "標題"
  },
  parameters: {
    docs: {
      description: {
        story: \`\`
      }
    }
  }
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var f,g,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "無法使用label時",
  args: {
    name: "無法使用label時",
    type: "noneLabel",
    title: "標題"
  },
  parameters: {
    docs: {
      description: {
        story: \`無法使用標籤組件的情況下，可依循 <a href="#">稽核評量碼: HM1130113E</a> 用標題(\\\`title\\\`)屬性來指明表單控制元件。\`
      }
    }
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const F=["Normal","NoneLabel"];export{a as NoneLabel,t as Normal,F as __namedExportsOrder,B as default};
