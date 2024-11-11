import{l as S,m as p,b as D,d as e,t as N,p as l,n as k,o as w}from"./vue.esm-bundler-Bi8UYanr.js";import{B as d}from"./BadgeComponent-4QWAwACw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const W=["summary"],P={"data-th":"分類",class:"text-center"},R={"data-th":"分類",class:"text-center"},A={"data-th":"分類",class:"text-center"},B=S({__name:"RWDComponent",props:{name:{default:"Table"},summary:{default:"表格摘要"},caption:{default:"響應式表格"},layout:{default:"fixed"},full:{type:Boolean,default:!0},toCard:{type:Boolean,default:!1},cardType:{default:"1"},border:{type:Boolean,default:!1},boorderType:{default:"all"}},setup(V){const a=V,q=p(()=>({rwdTable:a.toCard&&a.cardType=="1",rwdTable2:a.toCard&&a.cardType=="2","table-auto":a.layout=="auto","table-fixed":a.layout=="fixed","w-full":a.full,"table-border":a.border&&a.boorderType=="all","table-border-b":a.border&&a.boorderType=="bottom"}));return p(()=>({})),(u,t)=>(w(),D("table",{class:k(q.value),summary:u.summary},[e("caption",null,N(u.caption),1),t[6]||(t[6]=e("thead",null,[e("tr",null,[e("th",{class:"w-1/5"},"分類"),e("th",null,"標題"),e("th",{class:"w-1/5"},"發佈日期")])],-1)),e("tbody",null,[e("tr",null,[e("td",P,[l(d,{label:"降價促銷"})]),t[0]||(t[0]=e("td",{"data-th":"標題"},"The Sliding Mr. Bones (Next Stop, Pottersville)",-1)),t[1]||(t[1]=e("td",{"data-th":"發佈日期",class:"text-center"},"2024-09-21",-1))]),e("tr",null,[e("td",R,[l(d,{label:"履約其他"})]),t[2]||(t[2]=e("td",{"data-th":"標題"},"Witchy Woman",-1)),t[3]||(t[3]=e("td",{"data-th":"發佈日期",class:"text-center"},"2024-09-21",-1))]),e("tr",null,[e("td",A,[l(d,{label:"下架公告"})]),t[4]||(t[4]=e("td",{"data-th":"標題"}," 112年第六次電腦軟體共同供應契約採購-雲端服務(1120206)決標資料「eDC Cloud加值服務-Backup HDD。加值規格:備份(Backup 磁碟)100GB。每月-cathy0921」產品下架",-1)),t[5]||(t[5]=e("td",{"data-th":"發佈日期",class:"text-center"},"2024-09-21",-1))])])],10,W))}});B.__docgenInfo={exportName:"default",displayName:"RWDComponent",description:"",tags:{},props:[{name:"name",description:"The name of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Table"'}},{name:"summary",description:"The summary of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'表格摘要'"}},{name:"caption",description:"The caption of the table",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'響應式表格'"}},{name:"layout",description:"表格佈局方式",required:!1,type:{name:"union",elements:[{name:'"auto"'},{name:'"fixed"'}]},defaultValue:{func:!1,value:"'fixed'"}},{name:"full",description:"寬 100%",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"toCard",description:"轉卡片",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cardType",description:"轉卡片類型",required:!1,type:{name:"union",elements:[{name:'"1"'},{name:'"2"'}]},defaultValue:{func:!1,value:"'1'"}},{name:"border",description:"table-border",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"boorderType",description:"bordre type",required:!1,type:{name:"union",elements:[{name:'"all"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'all'"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/Components/Table/RWDComponent.vue"]};const z={component:B,parameters:{docs:{subtitle:"響應式表格",description:{component:"使用表格做為排版，缺點為特殊視覺樣式受限於 table 的 display 無法實現，ex: 導圓角 border-radius...<br />所以，還是得依資訊類型，來區分使用時機。"}}},argTypes:{layout:{control:{type:"select"},options:["auto","fixed"]},cardType:{control:{type:"select"},options:["1","2"]},boorderType:{control:{type:"select"},options:["all","bottom"]}}},r={args:{layout:"auto",cardType:"1",border:!0,boorderType:"all"},parameters:{docs:{description:{story:"一般正常表格。"}}}},o={args:{layout:"auto",cardType:"1",border:!0,boorderType:"bottom"},parameters:{docs:{description:{story:"列表子項間的分隔線，以子項底部最為線條。最後項不顯示。"}}}},n={args:{layout:"auto",toCard:!0,cardType:"1",border:!0,boorderType:"bottom"},parameters:{docs:{description:{story:"一般會在小畫面下選擇使用卡片式呈現。"}}}},s={args:{layout:"auto",toCard:!0,cardType:"2",border:!0,boorderType:"bottom"},parameters:{docs:{description:{story:"一般會在小畫面下選擇使用卡片式呈現。"}}}};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    layout: "auto",
    cardType: "1",
    border: true,
    boorderType: "all"
  },
  parameters: {
    docs: {
      description: {
        story: \`一般正常表格。\`
      }
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var y,f,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    layout: "auto",
    cardType: "1",
    border: true,
    boorderType: "bottom"
  },
  parameters: {
    docs: {
      description: {
        story: \`列表子項間的分隔線，以子項底部最為線條。最後項不顯示。\`
      }
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,g,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    layout: "auto",
    toCard: true,
    cardType: "1",
    border: true,
    boorderType: "bottom"
  },
  parameters: {
    docs: {
      description: {
        story: \`一般會在小畫面下選擇使用卡片式呈現。\`
      }
    }
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,h,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: "auto",
    toCard: true,
    cardType: "2",
    border: true,
    boorderType: "bottom"
  },
  parameters: {
    docs: {
      description: {
        story: \`一般會在小畫面下選擇使用卡片式呈現。\`
      }
    }
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const F=["Noraml","分隔線","卡片式1","卡片式2"];export{r as Noraml,F as __namedExportsOrder,z as default,o as 分隔線,n as 卡片式1,s as 卡片式2};
