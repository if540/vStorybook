import type { Meta, StoryObj } from "@storybook/html";

type A11yArgs = {
  label: string;
};

// GN1240100E 元件
const GN1240100EComponent = () =>
  `<a href="#" class="visually-hidden-focusable">Skip to main content</a>`;

const meta: Meta<A11yArgs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  tags: ["autodocs"],
  component: GN1240100EComponent,
  parameters: {
    docs: {
      subtitle: "在每一個頁面頂端加入一個鏈結，直接連往主要的內容區域",
      description: {
        component: `<a href='https://accessibility.moda.gov.tw/Download/Detail/1658?Category=64'>網站無障礙規範（110年）：稽核評量碼</a>`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<A11yArgs>;

export const Default: Story = {
  render: () => GN1240100EComponent(),
  parameters: {
    docs: {
      title: "Defautl Ttile",
      subtitle: "Defautl subtitle",
      description: {
        story:
          "使用鍵盤操作時，對於每個游標選取之超連結或表單元件，請提供應有的焦點樣式變化（使用CSS樣式表），或瀏覽器（如Edge或FIREFOX瀏覽器）預設之虛線框，以利鍵盤使用者識別游標位置。全網站如有相同問題請一併修正。",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
};

export const Secondary: Story = {
  render: () =>
    `<a href="#main-content" class="absolute left-0 top-0 bg-blue-500 text-white py-2 px-4 z-50 transform -translate-y-full focus:translate-y-0 transition">Skip to main content</a>`,
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
