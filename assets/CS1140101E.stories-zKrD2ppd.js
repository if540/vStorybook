import{f as S}from"./index-DQLiMaGX.js";import{u as b}from"./useA11yUrl-Dy8YWFNH.js";import{l as h,m as s,b as g,t as C,n as _,q as v,o as w}from"./vue.esm-bundler-Bi8UYanr.js";const B=["title"],d=h({__name:"CS1140101EComponent",props:{name:{default:"可焦點"},label:{default:"測試焦點時CSS呈現"},primary:{type:Boolean,default:!0},type:{}},setup(m){const o=m,f=s(()=>({"focus-within:outline-4 focus-within:outline-dashed focus-within:outline-red-600":o.type=="outline","focus-within:border-4 focus-within:border-dashed focus-within:outline-0 focus-within:border-red-600":o.type=="border"})),y=s(()=>({}));return(r,E)=>(w(),g("a",{href:"#",title:r.label,class:_(f.value),style:v(y.value),target:"_self"},C(r.label),15,B))}});d.__docgenInfo={exportName:"default",displayName:"CS1140101EComponent",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"可焦點"'}},{name:"label",description:"The name of the label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'測試焦點時CSS呈現'"}},{name:"primary",description:"元件主要樣式",tags:{since:[{description:"8.0.0",title:"since"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"type",description:"框類型，常見的有邊框(border)跟輪廓(outline)",required:!0,type:{name:"union",elements:[{name:'"border"'},{name:'"outline"'}]}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/1.可感知/指引1.4：可辨識/成功準則1.4.1：色彩使用 (檢測等級A)/CS1140101EComponent.vue"]};const n=b(import.meta.url),O={component:d,parameters:{docs:{subtitle:"當使用者介面元件取得焦點時，使用 CSS 變更其呈現方式",description:{component:`${n.storyTitleMasterLayout}${n.storyCheckReadme("檢查原始碼 CSS 設定焦點樣式的部分。")}使用鍵盤操作時，對於每個游標選取之超連結或表單元件，請提供應有的焦點樣式變化（使用 CSS 樣式表），或瀏覽器（如Edge或FIREFOX瀏覽器）預設之虛線框，以利鍵盤使用者識別游標位置。`}}},args:{onClick:S()}},e={args:{type:"outline"},parameters:{docs:{description:{story:"可以搭配著 `outline-offset-*` 使用。可以避免 outline 在盒模型外被裁剪掉。"}}}},t={args:{type:"border"},parameters:{docs:{description:{story:"Border 樣式因為盒模型的原因，會有畫面抖動的小狀況，根據邊框粗細感受而不同;該作法也是滿常見的，大部份人應該也都習慣了，只要不造成破版可以不用太在意。"}}}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: "outline"
  },
  parameters: {
    docs: {
      description: {
        story: \`可以搭配著 \\\`outline-offset-*\\\` 使用。可以避免 outline 在盒模型外被裁剪掉。\`
      }
    }
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "border"
  },
  parameters: {
    docs: {
      description: {
        story: \`Border 樣式因為盒模型的原因，會有畫面抖動的小狀況，根據邊框粗細感受而不同;該作法也是滿常見的，大部份人應該也都習慣了，只要不造成破版可以不用太在意。\`
      }
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const x=["Outline","Border"];export{t as Border,e as Outline,x as __namedExportsOrder,O as default};
