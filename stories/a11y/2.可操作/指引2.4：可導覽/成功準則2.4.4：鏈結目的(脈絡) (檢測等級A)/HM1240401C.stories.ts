import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { useA11yUrl } from "@use/useA11yUrl";
import HM1240401CComponent from "./HM1240401CComponent.vue";

const a11yUrl = useA11yUrl(import.meta.url);
const meta: Meta<typeof HM1240401CComponent> = {
  component: HM1240401CComponent,
  parameters: {
    docs: {
      subtitle:
        "具有連結目的之鏈結組件均需有鏈結文字，且其內容不得為空字串或空白；若此鏈結組件前後尚有其他內容，則亦需有標題屬性，且其值不得為空字串或空白。",
      description: {
        component: `${a11yUrl.storyTitleMasterLayout}${a11yUrl.storyCheckReadme("規則說明如果鏈結文字內容不為空值且鏈結前後有其他內容時，<a>標籤中的 title 屬性不為空字串或空白，通過檢測，否則檢測失敗")}<h3>注意事項:</h3><ul><li>正常內容不得為空字串或空白，除了圖片連結。</li><li>具有連結用途的圖片超連結，圖片的替代文字( alt ) 屬性不可以是空值。雖然可以沒有文字，但需要嚴格遵守 <a href="#具有連結目用途的圖片超連結" title="跳至具有連結目用途的圖片超連結規範說明">#具有連結目用途的圖片超連結</a> 規則。</li><li>開啟新視窗前，應先告知使用者「另開新視窗」，各項連結開啟新視窗並未提示使用者，建議直接於超連結上加註「另開新視窗」，全網站如有相同問題請一併修正。(以符合 \`可預期性：輸入\`  <a href="#">稽核評量碼: GN1320200E</a>)。</li></ul>`,
        // ?path=/docs/a11y-1-可感知-指引1-4：可辨識-成功準則1-4-1：色彩使用-檢測等級a-cs1140101e--docs
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  tags: ["autodocs", "new"],
};

export default meta;
type Story = StoryObj<typeof HM1240401CComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HasLinkText: Story = {
  name: "具有連結目用途的文字超連結",
  args: {
    name: "具有連結目用途的文字超連結",
    type: "hasLinkText",
    linkTitleShort: "Storybook Addon - Tag Badges 全文 (另開新視窗)",
    linkTextShort: "Tag Badges",
    linkTitleFull: "(另開新視窗)",
    linkTextFull: "Storybook Addon - Tag Badges 全文",
    linkHref:
      "https://github.com/Sidnioulz/storybook-addon-tag-badges?ref=storybookblog.ghost.io",
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
    },
  },
};

export const HasLinkImg: Story = {
  name: "具有連結目用途的圖片超連結",
  args: {
    name: "具有連結目用途的圖片超連結",
    type: "hasLinkImg",
    src: "assets/storylogo.svg",
    linkTitleFull: "連結至 Storybook 官網(另開新視窗)",
    alt: "StoryBookJS Logo",
  },
  parameters: {
    docs: {
      description: {
        story: `具有連結用途的圖片超連結，圖片的替代文字(\`alt\`)不可以是空值,並且要描述完整(以符合 <a href="?path=/docs/a11y-2-可操作-指引2-4：可導覽-成功準則2-4-4：鏈結目的-脈絡-檢測等級a-hm1240401c--docs">檢測碼: HM1240401C</a>)。<div><ul><li class="!text-sm font-bold">❌ 不應該寫: \`Logo\`(報讀軟體會讀出\`未標示的圖示\`)</li><li class="!text-sm font-bold">✅ 應該寫: \`StoryBook Logo\`</li></ul></div>`,
      },
    },
  },
};
