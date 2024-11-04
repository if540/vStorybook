import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import RWDComponent from "./RWDComponent.vue";

const meta: Meta<typeof RWDComponent> = {
  component: RWDComponent,
  parameters: {
    docs: {
      subtitle: "響應式表格",
      description: {
        component: `使用表格做為排版，缺點為特殊視覺樣式受限於 table 的 display 無法實現，ex: 導圓角 border-radius...<br />所以，還是得依資訊類型，來區分使用時機。`,
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  // args: { onClick: fn() },
  argTypes: {
    layout: { control: { type: "select" }, options: ["auto", "fixed"] },
    cardType: { control: { type: "select" }, options: ["1", "2"] },
    boorderType: { control: { type: "select" }, options: ["all", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof RWDComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Noraml: Story = {
  args: {
    layout: "auto",
    cardType: "1",
    border: true,
    boorderType: "all",
  },
  parameters: {
    docs: {
      description: {
        story: `一般正常表格。`,
      },
    },
  },
};

export const 分隔線: Story = {
  args: {
    layout: "auto",
    cardType: "1",
    border: true,
    boorderType: "bottom",
  },
  parameters: {
    docs: {
      description: {
        story: `列表子項間的分隔線，以子項底部最為線條。最後項不顯示。`,
      },
    },
  },
};

export const 卡片式1: Story = {
  args: {
    layout: "auto",
    toCard: true,
    cardType: "1",
    border: true,
    boorderType: "bottom",
  },
  parameters: {
    docs: {
      description: {
        story: `一般會在小畫面下選擇使用卡片式呈現。`,
      },
    },
  },
};

export const 卡片式2: Story = {
  args: {
    layout: "auto",
    toCard: true,
    cardType: "2",
    border: true,
    boorderType: "bottom",
  },
  parameters: {
    docs: {
      description: {
        story: `一般會在小畫面下選擇使用卡片式呈現。`,
      },
    },
  },
};
