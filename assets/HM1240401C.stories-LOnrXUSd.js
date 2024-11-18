import{f as h}from"./index-DQLiMaGX.js";import{u as S}from"./useA11yUrl-Dy8YWFNH.js";import{l as b,m as r,b as l,d as e,f as s,F as i,t as d,o as m}from"./vue.esm-bundler-Bi8UYanr.js";const L=["title"],F=["src","alt"],x=["title"],B=["src"],H=["href","title"],v=["href","title"],T=b({__name:"HM1240401CComponent",props:{name:{default:"具有連結目用途的文字超連結"},src:{default:"assets/storylogo.svg"},alt:{default:"StoryBookJS Logo"},linkHref:{},linkTitleShort:{},linkTextShort:{},linkTitleFull:{},linkTextFull:{},type:{default:"hasLinkText"}},setup(C){return r(()=>({})),r(()=>({})),(t,o)=>t.type=="hasLinkImg"?(m(),l(i,{key:0},[o[0]||(o[0]=e("span",{class:"componentStoryTip"},"描述完整範例, 報讀軟體會讀出: 連結,影像,Storybook Logo, 連結至 Storybook 官網(另開新視窗)",-1)),e("a",{href:"https://storybook.js.org/",target:"_blank",title:t.linkTitleFull},[e("img",{src:t.src,alt:t.alt},null,8,F)],8,L),o[1]||(o[1]=e("span",{class:"componentStoryTip"},[s("描述不完整範例, 報讀軟體會讀出: 未標示的圖示,"),e("code",{class:"code"},"未標示的圖示"),s(",Logo, 連結至 Storybook 官網(另開新視窗)")],-1)),e("a",{href:"https://storybook.js.org/",target:"_blank",title:t.linkTitleFull},[e("img",{src:t.src,alt:"Logo"},null,8,B)],8,x)],64)):(m(),l(i,{key:1},[o[2]||(o[2]=e("span",{class:"componentStoryTip"},[s("因文法或排版及其它特殊需要為短文字, 可利用 "),e("code",{class:"code"},"title"),s(" 依上下文加以補充描述")],-1)),o[3]||(o[3]=s(" Storyboook 生態有眾多套件, 其中 ")),e("a",{href:t.linkHref,class:"underline underline-offset-2",title:t.linkTitleShort,target:"_blank"},d(t.linkTextShort),9,H),o[4]||(o[4]=s(" 被普遍使用。 ")),o[5]||(o[5]=e("span",{class:"componentStoryTip"},[s("已具有完整文字描述, 可利用 "),e("code",{class:"code"},"title"),s(" 依上下文加以補充描述")],-1)),e("a",{href:t.linkHref,class:"underline underline-offset-2",title:t.linkTitleFull,target:"_blank"},d(t.linkTextFull),9,v)],64))}});T.__docgenInfo={exportName:"default",displayName:"HM1240401CComponent",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"具有連結目用途的文字超連結"'}},{name:"src",description:"圖片",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'"assets/storylogo.svg"'}},{name:"alt",description:"圖片替代文字",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"StoryBookJS Logo"'}},{name:"linkHref",description:"連結 url",required:!0,type:{name:"string"}},{name:"linkTitleShort",description:"連結標題(for 短文字)",required:!1,type:{name:"string"}},{name:"linkTextShort",description:"連結文字(短)",required:!1,type:{name:"string"}},{name:"linkTitleFull",description:"連結標題(for 完整文字)",required:!1,type:{name:"string"}},{name:"linkTextFull",description:"連結文字(完整)",required:!1,type:{name:"string"}},{name:"type",description:"連結類型，具有連結目用途的文字超連結|具有連結目用途的圖片超連結",required:!0,type:{name:"union",elements:[{name:'"hasLinkText"'},{name:'"hasLinkImg"'}]},defaultValue:{func:!1,value:"'hasLinkText'"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/2.可操作/指引2.4：可導覽/成功準則2.4.4：鏈結目的(脈絡) (檢測等級A)/HM1240401CComponent.vue"]};const p=S(import.meta.url),M={component:T,parameters:{docs:{subtitle:"具有連結目的之鏈結組件均需有鏈結文字，且其內容不得為空字串或空白；若此鏈結組件前後尚有其他內容，則亦需有標題屬性，且其值不得為空字串或空白。",description:{component:`${p.storyTitleMasterLayout}${p.storyCheckReadme("規則說明如果鏈結文字內容不為空值且鏈結前後有其他內容時，<a>標籤中的 title 屬性不為空字串或空白，通過檢測，否則檢測失敗")}<h3>注意事項:</h3><ul><li>正常內容不得為空字串或空白，除了圖片連結。</li><li>具有連結用途的圖片超連結，圖片的替代文字( alt ) 屬性不可以是空值。雖然可以沒有文字，但需要嚴格遵守 <a href="#具有連結目用途的圖片超連結" title="跳至具有連結目用途的圖片超連結規範說明">#具有連結目用途的圖片超連結</a> 規則。</li><li>開啟新視窗前，應先告知使用者「另開新視窗」，各項連結開啟新視窗並未提示使用者，建議直接於超連結上加註「另開新視窗」，全網站如有相同問題請一併修正。(以符合 \`可預期性：輸入\`  <a href="#">稽核評量碼: GN1320200E</a>)。</li></ul>`}}},args:{onClick:h()},tags:["autodocs","new"]},n={name:"具有連結目用途的文字超連結",args:{name:"具有連結目用途的文字超連結",type:"hasLinkText",linkTitleShort:"Storybook Addon - Tag Badges 全文 (另開新視窗)",linkTextShort:"Tag Badges",linkTitleFull:"(另開新視窗)",linkTextFull:"Storybook Addon - Tag Badges 全文",linkHref:"https://github.com/Sidnioulz/storybook-addon-tag-badges?ref=storybookblog.ghost.io"},parameters:{docs:{description:{story:""}}}},a={name:"具有連結目用途的圖片超連結",args:{name:"具有連結目用途的圖片超連結",type:"hasLinkImg",src:"assets/storylogo.svg",linkTitleFull:"連結至 Storybook 官網(另開新視窗)",alt:"StoryBookJS Logo"},parameters:{docs:{description:{story:'具有連結用途的圖片超連結，圖片的替代文字(`alt`)不可以是空值,並且要描述完整(以符合 <a href="?path=/docs/a11y-2-可操作-指引2-4：可導覽-成功準則2-4-4：鏈結目的-脈絡-檢測等級a-hm1240401c--docs">檢測碼: HM1240401C</a>)。<div><ul><li class="!text-sm font-bold">❌ 不應該寫: `Logo`(報讀軟體會讀出`未標示的圖示`)</li><li class="!text-sm font-bold">✅ 應該寫: `StoryBook Logo`</li></ul></div>'}}}};var u,k,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "具有連結目用途的文字超連結",
  args: {
    name: "具有連結目用途的文字超連結",
    type: "hasLinkText",
    linkTitleShort: "Storybook Addon - Tag Badges 全文 (另開新視窗)",
    linkTextShort: "Tag Badges",
    linkTitleFull: "(另開新視窗)",
    linkTextFull: "Storybook Addon - Tag Badges 全文",
    linkHref: "https://github.com/Sidnioulz/storybook-addon-tag-badges?ref=storybookblog.ghost.io"
  },
  parameters: {
    docs: {
      description: {
        story: \`\`
      }
    }
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var c,y,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "具有連結目用途的圖片超連結",
  args: {
    name: "具有連結目用途的圖片超連結",
    type: "hasLinkImg",
    src: "assets/storylogo.svg",
    linkTitleFull: "連結至 Storybook 官網(另開新視窗)",
    alt: "StoryBookJS Logo"
  },
  parameters: {
    docs: {
      description: {
        story: \`具有連結用途的圖片超連結，圖片的替代文字(\\\`alt\\\`)不可以是空值,並且要描述完整(以符合 <a href="?path=/docs/a11y-2-可操作-指引2-4：可導覽-成功準則2-4-4：鏈結目的-脈絡-檢測等級a-hm1240401c--docs">檢測碼: HM1240401C</a>)。<div><ul><li class="!text-sm font-bold">❌ 不應該寫: \\\`Logo\\\`(報讀軟體會讀出\\\`未標示的圖示\\\`)</li><li class="!text-sm font-bold">✅ 應該寫: \\\`StoryBook Logo\\\`</li></ul></div>\`
      }
    }
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const V=["HasLinkText","HasLinkImg"];export{a as HasLinkImg,n as HasLinkText,V as __namedExportsOrder,M as default};
