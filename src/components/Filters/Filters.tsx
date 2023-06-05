import { Stack } from "@mui/material";
import { RadioButton, RadioButtonProps } from "../RadioButton/RadioButton";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CurrencyPoundRoundedIcon from "@mui/icons-material/CurrencyPoundRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";

const defaultFilters: RadioButtonProps[] = [
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
  {
    label: (
      <span>
        sort by <b>star rating</b>
      </span>
    ),
    id: "rating",
    name: "filters",
    icon: <GradeRoundedIcon />,
  },
];

export type FiltersProps = {
  radioButtons: RadioButtonProps[];
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Filters = ({
  radioButtons = defaultFilters,
  handleChange,
}: FiltersProps) => {
  return (
    <Stack onChange={handleChange}>
      {radioButtons.map((radioButton: RadioButtonProps) => (
        <RadioButton {...radioButton} key={radioButton.id} />
      ))}
    </Stack>
  );
};
