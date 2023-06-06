import { Meta, StoryFn } from "@storybook/react";
import { Dashboard, DashboardProps } from "./Dashboard";
import { hotelsInformation } from "../../mock-data";

export default {
  title: "components/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    hotelsInformation: {
      description: "Array of hotels information",
    },
  },
} as Meta;

const Template: StoryFn<DashboardProps> = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});

Default.args = {
  hotelsInformation: hotelsInformation,
};
