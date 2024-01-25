import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@glsvitoria-ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/glsvitoria.png",
    alt: "Guilherme Vitória",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
