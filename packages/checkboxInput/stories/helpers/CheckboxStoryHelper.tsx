import * as React from "react";

interface RenderProps {
  changeHandler: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
interface CheckboxStoryHelperProps {
  children: (renderProps: RenderProps) => JSX.Element;
}

const CheckboxStoryHelper = ({ children }: CheckboxStoryHelperProps) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleChange = e => {
    setIsChecked(e.target.checked);
  };

  return children({
    changeHandler: handleChange,
    isChecked
  });
};

export default CheckboxStoryHelper;
