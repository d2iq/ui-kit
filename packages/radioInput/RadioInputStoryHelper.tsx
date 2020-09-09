import * as React from "react";

interface RenderProps {
  changeHandler: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
  checkedValue: string;
}
interface RadioInputStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactElement;
  checkedValue?: string;
}

const RadioInputStoryHelper = (props: RadioInputStoryHelperProps) => {
  const [checkedValue, setCheckedValue] = React.useState<string | undefined>(
    props.checkedValue
  );
  const changeHandler = e => {
    setCheckedValue(e.target.value);
  };

  return props.children({
    changeHandler,
    checkedValue
  });
};

export default RadioInputStoryHelper;
