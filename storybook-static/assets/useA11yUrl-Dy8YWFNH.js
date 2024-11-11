function u(l){const t=(s=>{var e;return((e=s.toString().split("a11y/")[1])==null?void 0:e.split("/").map(o=>decodeURI(o)))||[]})(l),n=`<div class="pb-3">
    <ul class="flex gap-x-1 !p-0 !m-0">
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${t[0]}</span>
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${t[1]}</span>
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${t[2]}</span>
    </ul>
    </div>`;return{a11yLevel:t,storyTitleMasterLayout:n,storyCheckReadme:function(s){return`<h3>檢測說明:</h3><blockquote>${s}</blockquote>`}}}export{u};
