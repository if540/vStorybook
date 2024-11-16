import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { useA11yUrl } from "@use/useA11yUrl";
import HM1110100CComponent from "./HM1110100CComponent.vue";
import { HasLinkImg as HM1240401CHasLinkImg } from "../../../2.可操作/指引2.4：可導覽/成功準則2.4.4：鏈結目的(脈絡) (檢測等級A)/HM1240401C.stories";

const a11yUrl = useA11yUrl(import.meta.url);
const meta: Meta<typeof HM1110100CComponent> = {
  component: HM1110100CComponent,
  parameters: {
    docs: {
      subtitle: "圖片組件需有替代文字屬性(alt 屬性是圖片的替代說明文字)",
      description: {
        component: `${a11yUrl.storyTitleMasterLayout}${a11yUrl.storyCheckReadme("如果 alt 屬性存在，通過檢測，否則檢測失敗。")}<h3>注意事項:</h3><ul><li>\`img\` 元素中，\`alt\` 屬性為必要屬性。</li><li>\`alt\` 可能為空就不要使用 \`title\`, 因為會違反 <a href="#">檢測碼: HM1110106C</a>。</li><li>圖片需要加上有意義、可代替圖片在文件上下文中的功能及內容的替代文字(以符合<a href="#">稽核評量碼: HM1110100E</a>)。</li><li>\`alt\` 屬性非裝飾性請勿留空或\`重複相同文字\`或\`使用與圖片內容無關\`之說明文字，亦不可使用\`編號、日期\`等方式命名。<ul><li>重覆相同文字: 多個圖片替代文字皆為相同。</li><li>您不必說“圖片”或“圖像”，因為這是顯而易見的，許多螢幕閱讀器會自動讀出“圖像”或“圖形”，因此如果您在替代文字中寫入它，它可能會說“圖像圖像。(<a href="https://www.tiny.cloud/blog/alt-text-best-practices/" target="_blank" title="不必說“圖片”或“圖像”參考資料來源(另開新視窗)">資料來源</a>)</li></ul></li><li>具有連結用途的圖片超連結，圖片的替代文字( alt ) 屬性不可以是空值, 並且要描述完整(以符合 <a href="?path=/docs/a11y-2-可操作-指引2-4：可導覽-成功準則2-4-4：鏈結目的-脈絡-檢測等級a-hm1240401c--docs">檢測碼: HM1240401C</a>)。</li></ul>`,
        // ?path=/docs/a11y-1-可感知-指引1-4：可辨識-成功準則1-4-1：色彩使用-檢測等級a-cs1140101e--docs
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HM1110100CComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  name: "一般圖片",
  args: {
    name: "一般圖片",
    type: "normal",
    src: "assets/storylogo.svg",
    alt: "StoryBookJS Logo",
  },
  parameters: {
    docs: {
      description: {
        story: `一般圖片, 非\`裝飾性圖片\`代替文字 \`alt\` 不得為空，需要加上有意義、可代替圖片在文件上下文中的功能及內容的替代文字。`,
      },
    },
  },
};

export const Decoration: Story = {
  name: "裝飾性圖片",
  args: {
    name: "裝飾性圖片",
    type: "decoration",
    src: "assets/check_complete_done_green_success_icon.svg",
    alt: "",
  },
  parameters: {
    docs: {
      description: {
        story: `裝飾性圖片, alt 屬性為空, 輔助報讀軟體將會略過它。請不要僥倖使用在\`非裝飾性圖片\`上，<span class="bg-red-500 text-gray-50">雖然軟體檢測可以通過，但人工檢測不通過</span>。`,
      },
    },
  },
};

export const HasLinkImg: Story = {
  name: HM1240401CHasLinkImg.name,
  args: {
    name: HM1240401CHasLinkImg.args?.name,
    type: HM1240401CHasLinkImg.args?.type as
      | "normal"
      | "decoration"
      | "hasLinkImg"
      | undefined,
  },
};
