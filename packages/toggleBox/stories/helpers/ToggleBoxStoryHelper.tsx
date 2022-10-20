import * as React from "react";

interface ToggleBoxStoryHelperState {
  isActive: boolean;
}

interface RenderProps {
  changeHandler?: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
  isActive?: boolean;
}
interface ToggleBoxStoryHelperProps {
  children: (renderProps: RenderProps) => JSX.Element;
}

const ToggleBoxStoryHelper = ({ children }: ToggleBoxStoryHelperProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleChange = e => {
    setIsActive(e.target.checked);
  };

  return children({
    changeHandler: handleChange,
    isActive
  });
};

export default ToggleBoxStoryHelper;
