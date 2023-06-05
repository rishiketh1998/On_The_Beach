import { Meta, StoryFn } from "@storybook/react";
import { RadioButton, RadioButtonProps } from "./RadioButton";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

export default {
  title: "components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label for radio button",
    },
    icon: {
      description: "Icon for radio button",
    },
    id: {
      description: "Id for radio button",
    },
    name: {
      description: "Name for radio button",
    },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "sort alphabetically",
  id: "alphabetically",
  name: "sort",
  icon: <SortByAlphaIcon />,
};
