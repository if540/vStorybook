import{f as u}from"./index-DcZGqPg1.js";import{u as d}from"./useA11yUrl-Dy8YWFNH.js";import{l as g,m as s,b as y,o as f}from"./vue.esm-bundler-Bi8UYanr.js";const _=["src","alt"],p=g({__name:"HM1110100CComponent",props:{name:{default:"一般圖片"},src:{default:"assets/storylogo.svg"},alt:{default:"StoryBookJS Logo"},type:{default:"normal"}},setup(h){return s(()=>({})),s(()=>({})),(t,k)=>(f(),y("img",{src:t.src,alt:t.alt},null,8,_))}});p.__docgenInfo={exportName:"default",displayName:"HM1110100CComponent",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"一般圖片"'}},{name:"src",description:"圖片",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'"assets/storylogo.svg"'}},{name:"alt",description:"圖片替代文字",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"StoryBookJS Logo"'}},{name:"type",description:"圖片類型，一般圖片|裝飾性圖片",required:!0,type:{name:"union",elements:[{name:'"normal"'},{name:'"decoration"'}]},defaultValue:{func:!1,value:"'normal'"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/1.可感知/指引1.1：替代文字/成功準則1.1.1：非文字內容 (檢測等級A)/HM1110100CComponent.vue"]};const o=d(import.meta.url),b={component:p,parameters:{docs:{subtitle:"圖片組件需有替代文字屬性(alt 屬性是圖片的替代說明文字)",description:{component:`${o.storyTitleMasterLayout}${o.storyCheckReadme("如果 alt 屬性存在，通過檢測，否則檢測失敗。")}<h3>注意事項:</h3><ul><li>\`img\` 元素中，\`alt\` 屬性為必要屬性。</li><li>\`alt\` 可能為空就不要使用 \`title\`, 因為會違反 <a href="#">檢測碼: HM1110106C</a>。</li><li>圖片需要加上有意義、可代替圖片在文件上下文中的功能及內容的替代文字(以符合<a href="#">稽核評量碼: HM1110100E</a>)。</li><li>\`alt\` 屬性非裝飾性請勿留空或\`重複相同文字\`或\`使用與圖片內容無關\`之說明文字，亦不可使用\`編號、日期\`等方式命名。<ul><li>重覆相同文字: 多個圖片替代文字皆為相同。</li><li>您不必說“圖片”或“圖像”，因為這是顯而易見的，許多螢幕閱讀器會自動讀出“圖像”或“圖形”，因此如果您在替代文字中寫入它，它可能會說“圖像圖像。(<a href="https://www.tiny.cloud/blog/alt-text-best-practices/" target="_blank" title="不必說“圖片”或“圖像”參考資料來源(另開新視窗)">資料來源</a>)</li></ul></li></ul>`}}},args:{onClick:u()}},e={name:"一般圖片",args:{name:"一般圖片",type:"normal",src:"assets/storylogo.svg",alt:"StoryBookJS Logo"},parameters:{docs:{description:{story:"一般圖片, 非`裝飾性圖片`代替文字 `alt` 不得為空，需要加上有意義、可代替圖片在文件上下文中的功能及內容的替代文字。"}}}},a={name:"裝飾性圖片",args:{name:"裝飾性圖片",type:"decoration",src:"assets/check_complete_done_green_success_icon.svg",alt:""},parameters:{docs:{description:{story:'裝飾性圖片, alt 屬性為空, 輔助報讀軟體將會略過它。請不要僥倖使用在`非裝飾性圖片`上，<span class="bg-red-500 text-gray-50">雖然軟體檢測可以通過，但人工檢測不通過</span>。'}}}};var r,n,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "一般圖片",
  args: {
    name: "一般圖片",
    type: "normal",
    src: "assets/storylogo.svg",
    alt: "StoryBookJS Logo"
  },
  parameters: {
    docs: {
      description: {
        story: \`一般圖片, 非\\\`裝飾性圖片\\\`代替文字 \\\`alt\\\` 不得為空，需要加上有意義、可代替圖片在文件上下文中的功能及內容的替代文字。\`
      }
    }
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "裝飾性圖片",
  args: {
    name: "裝飾性圖片",
    type: "decoration",
    src: "assets/check_complete_done_green_success_icon.svg",
    alt: ""
  },
  parameters: {
    docs: {
      description: {
        story: \`裝飾性圖片, alt 屬性為空, 輔助報讀軟體將會略過它。請不要僥倖使用在\\\`非裝飾性圖片\\\`上，<span class="bg-red-500 text-gray-50">雖然軟體檢測可以通過，但人工檢測不通過</span>。\`
      }
    }
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const M=["Normal","Decoration"];export{a as Decoration,e as Normal,M as __namedExportsOrder,b as default};
