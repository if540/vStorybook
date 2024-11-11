import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { useA11yUrl } from "@use/useA11yUrl";
import HM1130112EComponent from "./HM1130112EComponent.vue";

const a11yUrl = useA11yUrl(import.meta.url);
const meta: Meta<typeof HM1130112EComponent> = {
  component: HM1130112EComponent,
  parameters: {
    docs: {
      subtitle:
        "使用標籤組件將文字標籤(label)與表單控制元件(input, select...)建立關連",
      description: {
        component: `${a11yUrl.storyTitleMasterLayout}${a11yUrl.storyCheckReadme("表單控制項請使用 Label for 標籤或相類機制<strong>提示資訊</strong>。以遵循 1.3 可調適指引 <strong>'建立能以不同方式呈現(例如簡化的版面)，而不會喪失資訊或結構的內容'</strong>。")}<h3>注意事項:</h3><ul><li>\`label\` 不要包在控制元件外層。</li><li>無法使用標籤組件的情況下，可依循 <a href="#">稽核評量碼: HM1130113E</a> 用標題屬性來指明表單控制元件。</li></ul>`,
        // ?path=/docs/a11y-1-可感知-指引1-4：可辨識-成功準則1-4-1：色彩使用-檢測等級a-cs1140101e--docs
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof HM1130112EComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  name: "一般",
  args: {
    name: "一般",
    type: "normal",
    title: "標題",
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
    },
  },
};

export const NoneLabel: Story = {
  name: "無法使用label時",
  args: {
    name: "無法使用label時",
    type: "noneLabel",
    title: "標題",
  },
  parameters: {
    docs: {
      description: {
        story: `無法使用標籤組件的情況下，可依循 <a href="#">稽核評量碼: HM1130113E</a> 用標題(\`title\`)屬性來指明表單控制元件。`,
      },
    },
  },
};
