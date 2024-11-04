import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import BasicComponent from "./BasicComponent.vue";

const meta: Meta<typeof BasicComponent> = {
  component: BasicComponent,
  parameters: {
    docs: {
      subtitle: "表格基礎知識",
      description: {
        component: `<a href="https://css-tricks.com/almanac/properties/t/table-layout/">css-tricks 表格佈局</a>`,
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  // args: { onClick: fn() },
  argTypes: {
    layout: { control: { type: "select" }, options: ["auto", "fixed"] },
  },
};

export default meta;
type Story = StoryObj<typeof BasicComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Auto: Story = {
  args: {
    layout: "auto",
  },
  parameters: {
    docs: {
      description: {
        story: `Auto 表格的總寬度決定於每一個儲存格(Cell)的最大值( 此為預設值 )。產生的表格佈局通常取決於表格的內容。`,
      },
    },
  },
};

export const Fixed: Story = {
  args: {
    layout: "fixed",
  },
  parameters: {
    docs: {
      description: {
        story: `Fixed 固定佈局演算法使用第一行來確定列寬，最終結果是均勻分配寬度; 舉例: 表格第一行中的第一個儲存格的寬度為 350px。切換table-layout: fixed 會調整其他列，但第一列保持不變。`,
      },
    },
  },
};
