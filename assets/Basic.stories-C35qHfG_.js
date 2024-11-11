import{l as g,m as n,b as h,d as e,n as s,o as v}from"./vue.esm-bundler-Bi8UYanr.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=["summary"],c=g({__name:"BasicComponent",props:{name:{default:"Table"},summary:{default:"表格摘要"},caption:{default:"原生表格"},full:{type:Boolean,default:!0},layout:{default:"auto"},firstFix:{type:Boolean,default:!1}},setup(f){const a=f,y=n(()=>({"table-auto":a.layout=="auto","table-fixed":a.layout=="fixed","w-full":a.full})),x=n(()=>({"w-250":a.firstFix}));return n(()=>({})),(b,t)=>(v(),h("table",{class:s(y.value),summary:b.summary},[t[2]||(t[2]=e("caption",null,"Caption",-1)),e("thead",null,[e("tr",null,[e("th",{class:s(x.value)},"Song",2),t[0]||(t[0]=e("th",null,"Artist",-1)),t[1]||(t[1]=e("th",null,"Year",-1))])]),t[3]||(t[3]=e("tbody",null,[e("tr",null,[e("td",null,"The Sliding Mr. Bones (Next Stop, Pottersville)"),e("td",null,"Malcolm Lockyer"),e("td",null,"1961 ")]),e("tr",null,[e("td",null,"Witchy Woman"),e("td",null,"The Eagles"),e("td",null,"1972 ")]),e("tr",null,[e("td",null,"Shining Star"),e("td",null,"Earth, Wind, and Fire"),e("td",null,"1975 ")])],-1))],10,B))}}),C=F(c,[["__scopeId","data-v-c2aade31"]]);c.__docgenInfo={exportName:"default",displayName:"BasicComponent",description:"",tags:{},props:[{name:"name",description:"The name of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Table"'}},{name:"summary",description:"The summary of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'表格摘要'"}},{name:"caption",description:"The caption of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'原生表格'"}},{name:"full",description:"寬 100%",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"layout",description:"表格佈局方式",required:!1,type:{name:"union",elements:[{name:'"auto"'},{name:'"fixed"'}]},defaultValue:{func:!1,value:"'auto'"}},{name:"firstFix",description:"固定首列寬度DEMO",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/Components/Table/BasicComponent.vue"]};const _={component:C,parameters:{docs:{subtitle:"表格基礎知識",description:{component:'<a href="https://css-tricks.com/almanac/properties/t/table-layout/">css-tricks 表格佈局</a>'}}},argTypes:{layout:{control:{type:"select"},options:["auto","fixed"]}}},o={args:{layout:"auto"},parameters:{docs:{description:{story:"Auto 表格的總寬度決定於每一個儲存格(Cell)的最大值( 此為預設值 )。產生的表格佈局通常取決於表格的內容。"}}}},l={args:{layout:"fixed"},parameters:{docs:{description:{story:"Fixed 固定佈局演算法使用第一行來確定列寬，最終結果是均勻分配寬度; 舉例: 表格第一行中的第一個儲存格的寬度為 350px。切換table-layout: fixed 會調整其他列，但第一列保持不變。"}}}};var r,u,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    layout: "auto"
  },
  parameters: {
    docs: {
      description: {
        story: \`Auto 表格的總寬度決定於每一個儲存格(Cell)的最大值( 此為預設值 )。產生的表格佈局通常取決於表格的內容。\`
      }
    }
  }
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,p,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    layout: "fixed"
  },
  parameters: {
    docs: {
      description: {
        story: \`Fixed 固定佈局演算法使用第一行來確定列寬，最終結果是均勻分配寬度; 舉例: 表格第一行中的第一個儲存格的寬度為 350px。切換table-layout: fixed 會調整其他列，但第一列保持不變。\`
      }
    }
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const A=["Auto","Fixed"];export{o as Auto,l as Fixed,A as __namedExportsOrder,_ as default};
