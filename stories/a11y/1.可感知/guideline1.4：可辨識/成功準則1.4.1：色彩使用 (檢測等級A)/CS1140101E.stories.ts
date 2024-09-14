import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { useA11yUrl } from "@use/useA11yUrl";
import CS1140101EComponent from "./CS1140101EComponent.vue";

const a11yUrl = useA11yUrl(import.meta.url);
const meta: Meta<typeof CS1140101EComponent> = {
  component: CS1140101EComponent,
  parameters: {
    docs: {
      subtitle: "當使用者介面元件取得焦點時，使用 CSS 變更其呈現方式",
      description: {
        component: `${a11yUrl.storyTitleMasterLayout}使用鍵盤操作時，對於每個游標選取之超連結或表單元件，請提供應有的焦點樣式變化（使用 CSS 樣式表），或瀏覽器（如Edge或FIREFOX瀏覽器）預設之虛線框，以利鍵盤使用者識別游標位置。全網站如有相同問題請一併修正。`,
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof CS1140101EComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Outline: Story = {
  args: {
    type: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: `可以搭配著 \`outline-offset-*\` 使用。可以避免 outline 在盒模型外被裁剪掉。`,
      },
    },
  },
};

export const Border: Story = {
  args: {
    type: "border",
  },
  parameters: {
    docs: {
      description: {
        story: `Border 樣式因為盒模型的原因，會有畫面抖動的小狀況，根據邊框粗細感受而不同;該作法也是滿常見的，大部份人應該也都習慣了，只要不造成破版可以不用太在意。`,
      },
    },
  },
};
