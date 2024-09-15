import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import GN1240100EComponent from "./GN1240100EComponent.vue";
import { useA11yUrl } from "@use/useA11yUrl";

const a11yUrl = useA11yUrl(import.meta.url);
const meta: Meta<typeof GN1240100EComponent> = {
  component: GN1240100EComponent,
  parameters: {
    docs: {
      subtitle: "在每一個頁面頂端加入一個鏈結，直接連往主要的內容區域",
      description: {
        component: `${a11yUrl.storyTitleMasterLayout}${a11yUrl.storyCheckReadme("按下鍵盤Tab鍵遊走，並檢視頁面頂端是否出現「跳到主要內容區」連結")}<a id="main-content" href='https://accessibility.moda.gov.tw/Download/Detail/1658?Category=64' target="_target">主要內容導盲磚 - 網站無障礙規範（110年）：稽核評量碼</a>`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GN1240100EComponent>;

export const Static: Story = {
  args: {
    label: "跳到主要內容區塊",
    type: "static",
  },
  parameters: {
    docs: {
      description: {
        story: "焦點時出現。",
      },
    },
  },
};

export const Animation: Story = {
  args: {
    type: "animation",
  },
  parameters: {
    docs: {
      title: "Defautl Ttile",
      subtitle: "Defautl subtitle",
      description: {
        story:
          "焦點時從上滑下顯示(剪裁在父層添加) `-translate-y-full` 向上位移 -100%。",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
};
