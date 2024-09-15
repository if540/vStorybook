// src/composables/useA11yUrl.ts
import { ref, computed, registerRuntimeCompiler } from "vue";

export function useA11yUrl(url: string) {
  // 解析 URL 的逻辑
  const parseUrl = (url: string): string[] => {
    const splitUrl = url.toString().split("a11y/");
    return splitUrl[1]?.split("/").map((item) => decodeURI(item)) || [];
  };

  // 可使用 ref 和 computed 来响应 URL 的变化
  const a11yLevel = parseUrl(url);
  //
  const storyTitleMasterLayout = `<div class="pb-3">
    <ul class="flex gap-x-1 !p-0 !m-0">
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${a11yLevel[0]}</span>
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${a11yLevel[1]}</span>
      <span class="bg-pink-700 text-white font-bold rounded-full px-2 py-1 !text-xs">${a11yLevel[2]}</span>
    </ul>
    </div>`;
  const storyCheckReadme = function (readme: string) {
    return `<h3>檢測說明:</h3><blockquote>${readme}</blockquote>`;
  };

  return {
    a11yLevel,
    storyTitleMasterLayout,
    storyCheckReadme,
  };
}
