import { Meta, StoryFn } from "@storybook/react";
import { BackgroundImage, BackgroundImageProps } from "./BackgroundImage";
import backgrounImage from "../../assets/images/background.png";

export default {
  title: "components/BackgroundImage",
  component: BackgroundImage,
  argTypes: {
    image: {
      control: { type: "text" },
      description: "Image URL",
    },
  },
} as Meta;

const Template: StoryFn<BackgroundImageProps> = (args) => (
  <BackgroundImage {...args} />
);

export const LoginBackgroundImage = Template.bind({});

LoginBackgroundImage.args = {
  image: backgrounImage,
};
