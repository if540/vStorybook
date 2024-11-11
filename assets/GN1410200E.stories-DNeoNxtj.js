import{u}from"./useA11yUrl-Dy8YWFNH.js";import{l as b,m as n,b as o,d as s,F as h,o as p}from"./vue.esm-bundler-Bi8UYanr.js";const y=["innerHTML"],x={key:1},J=["innerHTML"],g=b({__name:"GN1410200EComponent",props:{preview:{type:Boolean,default:!0},content:{}},setup(w){return n(()=>({})),n(()=>({})),(a,r)=>a.preview?(p(),o(h,{key:0},[s("div",{innerHTML:a.content},null,8,y),r[0]||(r[0]=s("small",{class:"text-gray-400"},"Tip: JavaScript 禁用時, 使用者才能看見、讀到此段提示。此為模擬禁用時狀態, Html 非真實渲染結果。真實 Html 請將 `preview: false` 關閉預覽。",-1))],64)):(p(),o("noscript",x,[s("div",{innerHTML:a.content},null,8,J)]))}});g.__docgenInfo={exportName:"default",displayName:"GN1410200EComponent",description:"",tags:{},props:[{name:"preview",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"content",required:!0,type:{name:"string"}}],sourceFiles:["/Applications/XAMPP/xamppfiles/htdocs/vStorybook/stories/a11y/4.穩健性/指引4.1：相容性/成功準則4.1.2：名稱、角色和值 (檢測等級A)/GN1410200EComponent.vue"]};const i=u(import.meta.url),H={component:g,parameters:{docs:{subtitle:"使用者介面元件應暴露名稱與角色，允許直接設定可由使用者設定的屬性，並在變更時提供通知",description:{component:`${i.storyTitleMasterLayout}${i.storyCheckReadme("進入 Chrome 設定 > 隱私權和安全性 > 網站設定 > JavaScript，將JavaScript禁用。")}在 JavaScript 不支援時，網頁上方提供不支援 JavaScript 時的提示文字（如『您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態』之文字說明）。`}}}},t={args:{content:"Your browser does not support JavaScript! 您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態。"},parameters:{docs:{description:{story:"純文字、內文描述。"}}}},e={args:{content:`<div class="flex flex-col gap-y-2">
        <div class="bg-[#ffca28] p-2">
          <a href="https://prsweb.tcpd.gov.tw" title="連結至交通違規檢舉專區:回首頁" class="flex items-center gap-x-2"><img id="logo"
              src="https://fakeimg.pl/24/282828/eae0d0/?retina=1&text=LOGO" alt="交通違規檢舉專區:回首頁" class="rounded-full">
            <div id="title"><span><strong>臺北市政府警察局交通警察大隊</strong></span><br><span>交通違規檢舉專區</span></div>
          </a>
        </div>
        <div>
          <p>親愛的網友您好！</p>
          <p>您必須啟用 Javascript，才能使用「臺北市交通違規檢舉專區」的完整功能。不過，Javascript 似乎已停用或不受您的瀏覽器支援。請變更瀏覽器的選項，啟用 Javascript，然後再試一次。</p>
          <p>臺北市政府警察局關心您！</p>
        </div>
        <div>
          <table class="text-center bg-[#ffca28] h-[70px] text-[#333] w-full" cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="h-10">
                <td><a href="https://www.gov.taipei/">臺北市政府</a></td>
                <td><a href="https://police.gov.taipei/">警察局</a></td>
                <td><a href="https://td.police.gov.taipei/">交通警察大隊</a></td>
              </tr>
              <tr class="bg-[#ffd54f] text-left">
                <td colspan="3" class="p-2">地址：10066 臺北市中正區愛國西路26號<br>電話：(02)2375-2100<br>版權所有 ©
                  <strong>臺北市政府警察局交通警察大隊</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`},parameters:{docs:{description:{story:"自訂 Html 豐富編排資訊內容。"}}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: \`Your browser does not support JavaScript! 您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態。\`
  },
  parameters: {
    docs: {
      description: {
        story: \`純文字、內文描述。\`
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var v,m,f;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: \`<div class="flex flex-col gap-y-2">
        <div class="bg-[#ffca28] p-2">
          <a href="https://prsweb.tcpd.gov.tw" title="連結至交通違規檢舉專區:回首頁" class="flex items-center gap-x-2"><img id="logo"
              src="https://fakeimg.pl/24/282828/eae0d0/?retina=1&text=LOGO" alt="交通違規檢舉專區:回首頁" class="rounded-full">
            <div id="title"><span><strong>臺北市政府警察局交通警察大隊</strong></span><br><span>交通違規檢舉專區</span></div>
          </a>
        </div>
        <div>
          <p>親愛的網友您好！</p>
          <p>您必須啟用 Javascript，才能使用「臺北市交通違規檢舉專區」的完整功能。不過，Javascript 似乎已停用或不受您的瀏覽器支援。請變更瀏覽器的選項，啟用 Javascript，然後再試一次。</p>
          <p>臺北市政府警察局關心您！</p>
        </div>
        <div>
          <table class="text-center bg-[#ffca28] h-[70px] text-[#333] w-full" cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="h-10">
                <td><a href="https://www.gov.taipei/">臺北市政府</a></td>
                <td><a href="https://police.gov.taipei/">警察局</a></td>
                <td><a href="https://td.police.gov.taipei/">交通警察大隊</a></td>
              </tr>
              <tr class="bg-[#ffd54f] text-left">
                <td colspan="3" class="p-2">地址：10066 臺北市中正區愛國西路26號<br>電話：(02)2375-2100<br>版權所有 ©
                  <strong>臺北市政府警察局交通警察大隊</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>\`
  },
  parameters: {
    docs: {
      description: {
        story: \`自訂 Html 豐富編排資訊內容。\`
      }
    }
  }
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const k=["Text","Html"];export{e as Html,t as Text,k as __namedExportsOrder,H as default};
