import{l as T,m as l,b as v,t as k,n as _,q as x,o as S}from"./vue.esm-bundler-Bi8UYanr.js";import{u as D}from"./useA11yUrl-Dy8YWFNH.js";const A=["href","title"],g=T({__name:"GN1240100EComponent",props:{label:{default:"Skip to main content"},type:{},href:{default:"#main-content"}},setup(h){const n=h,b=l(()=>({"visually-hidden-focusable":n.type==="static","absolute top-0 left-0 z-50 px-4 py-2 text-white transition transform -translate-x-full bg-blue-500 focus:translate-x-0":n.type==="animationTranslateX","absolute top-0 left-0 z-50 px-4 py-2 text-white transition transform -translate-y-full bg-blue-500 focus:translate-y-0":n.type==="animationTranslateY"})),w=l(()=>({}));return(s,C)=>(S(),v("a",{href:s.href,title:s.label,class:_(b.value),style:x(w.value),target:"_self"},k(s.label),15,A))}});g.__docgenInfo={exportName:"default",displayName:"GN1240100EComponent",description:"",tags:{},props:[{name:"label",description:"The name of the label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Skip to main content'"}},{name:"type",description:"類型",required:!0,type:{name:"union",elements:[{name:'"static"'},{name:'"animationTranslateX"'},{name:'"animationTranslateY"'}]}},{name:"href",description:"Link to main content",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'#main-content'"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/2.可操作/指引2.4：可導覽/成功準則2.4.1：跳過區塊 (檢測等級A)/GN1240100EComponent.vue"]};const o=D(import.meta.url),E={component:g,parameters:{docs:{subtitle:"在每一個頁面頂端加入一個鏈結，直接連往主要的內容區域",description:{component:`${o.storyTitleMasterLayout}${o.storyCheckReadme("按下鍵盤 Tab 鍵遊走，並檢視頁面頂端是否出現「跳到主要內容區」連結")}<a id="main-content" href='https://accessibility.moda.gov.tw/Download/Detail/1658?Category=64' target="_target">主要內容導盲磚 - 網站無障礙規範（110年）：稽核評量碼</a>`}}}},t={args:{label:"跳到主要內容區塊",type:"static"},parameters:{docs:{description:{story:"焦點時出現。"}}}},e={args:{type:"animationTranslateX"},parameters:{docs:{title:"Defautl Ttile",subtitle:"Defautl subtitle",description:{story:'焦點時從上滑下顯示(剪裁在父層添加) <code>-translate-x-full</code> 向上位移 -100%。<ul class="flex"><li><a href="https://www.digitalpolicy.gov.hk/tc/#main" title="前往香港數字政策辦公室(另開新視窗)" target="_blank">參考網站(一)</a></li></ul>'},canvas:{sourceState:"shown"}}}},a={args:{type:"animationTranslateY"},parameters:{docs:{title:"Defautl Ttile",subtitle:"Defautl subtitle",description:{story:'焦點時從上滑下顯示(剪裁在父層添加) <code>-translate-y-full</code> 向上位移 -100%。<ul class="flex"><li><a href="https://www.digitalpolicy.gov.hk/tc/#main" title="前往香港數字政策辦公室(另開新視窗)" target="_blank">參考網站(一)</a></li></ul>'},canvas:{sourceState:"shown"}}}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "跳到主要內容區塊",
    type: "static"
  },
  parameters: {
    docs: {
      description: {
        story: "焦點時出現。"
      }
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "animationTranslateX"
  },
  parameters: {
    docs: {
      title: "Defautl Ttile",
      subtitle: "Defautl subtitle",
      description: {
        story: \`焦點時從上滑下顯示(剪裁在父層添加) <code>-translate-x-full</code> 向上位移 -100%。<ul class="flex"><li><a href="https://www.digitalpolicy.gov.hk/tc/#main" title="前往香港數字政策辦公室(另開新視窗)" target="_blank">參考網站(一)</a></li></ul>\`
      },
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "animationTranslateY"
  },
  parameters: {
    docs: {
      title: "Defautl Ttile",
      subtitle: "Defautl subtitle",
      description: {
        story: \`焦點時從上滑下顯示(剪裁在父層添加) <code>-translate-y-full</code> 向上位移 -100%。<ul class="flex"><li><a href="https://www.digitalpolicy.gov.hk/tc/#main" title="前往香港數字政策辦公室(另開新視窗)" target="_blank">參考網站(一)</a></li></ul>\`
      },
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const N=["Static","AnimationTranslateX","AnimationTranslateY"];export{e as AnimationTranslateX,a as AnimationTranslateY,t as Static,N as __namedExportsOrder,E as default};
