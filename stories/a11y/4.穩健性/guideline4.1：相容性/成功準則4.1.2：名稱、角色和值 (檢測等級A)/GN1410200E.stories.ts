import type { Meta, StoryObj } from "@storybook/html";

type A11yArgs = {
  label: string;
};

// GN1410200E 元件
const GN1410200EComponent = () =>
  `<noscript>Your browser does not support JavaScript! 您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態。</noscript>`;

const meta: Meta<A11yArgs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  tags: ["autodocs"],
  component: GN1410200EComponent,
  parameters: {
    docs: {
      subtitle: "使用者介面元件應暴露名稱與角色",
      description: {
        component: "component description",
      },
    },
  },
};

export default meta;
type Story = StoryObj<A11yArgs>;

export const Default: Story = {
  render: () => GN1410200EComponent(),
  parameters: {
    docs: {
      title: "Defautl Ttile",
      subtitle: "Defautl subtitle",
      description: {
        story: "Another description on the story, overriding the comments",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
};

// export const Primary: Story = {
//   render: () => `GN1410200EComponent()`,
//   parameters: {
//     docs: {
//       title: "Defautl Ttile",
//       subtitle: "Defautl subtitle",
//       description: {
//         story: "Another description on the story, overriding the comments",
//       },
//     },
//   },
// };
