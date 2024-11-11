import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import TabComponent from "./TabComponent.vue";

const meta: Meta<typeof TabComponent> = {
  component: TabComponent,
  parameters: {
    docs: {
      subtitle: "索引標籤",
      description: {
        component: `。`,
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof TabComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Noraml: Story = {
  args: {
    tablistTitle: "索引標籤",
  },
  parameters: {
    docs: {
      description: {
        story: `正常索引標籤`,
      },
    },
  },
};
