import { Stack } from "@mui/material";
import { RadioButton, RadioButtonProps } from "../RadioButton/RadioButton";

export type FiltersProps = {
  radioButtons: RadioButtonProps[];
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Filters = ({ radioButtons, handleChange }: FiltersProps) => {
  return (
    <Stack onChange={handleChange}>
      {radioButtons.map((radioButton: RadioButtonProps) => (
        <RadioButton {...radioButton} key={radioButton.id} />
      ))}
    </Stack>
  );
};
