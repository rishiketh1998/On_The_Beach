import styled from "@emotion/styled";

const StyledItem = styled.div`
  display: flex;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 1px;
`;

const StyledRadioButton = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  visibility: hidden;
  position: absolute;
  &:checked + label {
    background-color: #17317f;
    color: #fff;
  }
`;

const RadioButtonLabel = styled.label`
  cursor: pointer;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #fff;
  color: #3b4889;
  justify-content: space-between;
  padding: 0 15px;
`;

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: JSX.Element | string;
  icon?: JSX.Element | null;
  id: string;
  name: string;
  backgroundColor?: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  const { label, icon, id, name } = props;
  return (
    <>
      <StyledItem>
        <StyledRadioButton
          type="radio"
          id={id}
          name={name}
          defaultChecked={props.defaultChecked}
        />
        <RadioButtonLabel htmlFor={id}>
          {label} {icon}
        </RadioButtonLabel>
      </StyledItem>
    </>
  );
};
