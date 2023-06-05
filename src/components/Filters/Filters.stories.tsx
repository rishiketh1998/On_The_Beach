import { Meta, StoryFn } from "@storybook/react";
import { Filters, FiltersProps } from "./Filters";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CurrencyPoundRoundedIcon from "@mui/icons-material/CurrencyPoundRounded";

export default {
  title: "components/Filters",
  component: Filters,
  tags: ["autodocs"],
  argTypes: {
    radioButtons: {
      description: "Array of radio buttons",
    },
    handleChange: {
      description: "Function to handle change event",
    },
  },
} as Meta;

const Template: StoryFn<FiltersProps> = (args) => <Filters {...args} />;

export const Default = Template.bind({});

Default.args = {
  radioButtons: [
    {
      label: (
        <span>
          sort <b>alphabetically</b>
        </span>
      ),
      id: "alphabetically",
      name: "filters",
      icon: <SortByAlphaIcon />,
      defaultChecked: true,
    },
    {
      label: (
        <span>
          sort by <b>price</b>
        </span>
      ),
      id: "price",
      name: "filters",
      icon: <CurrencyPoundRoundedIcon />,
    },
  ],
};
