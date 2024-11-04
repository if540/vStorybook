import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import BadgeComponent from "./BadgeComponent.vue";

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  parameters: {
    docs: {
      subtitle: "",
      description: {
        component: ``,
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  // args: { onClick: fn() },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BadgeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Noraml: Story = {
  args: {
    label: "一般",
  },
  parameters: {
    docs: {
      description: {
        story: `一般。`,
      },
    },
  },
};
