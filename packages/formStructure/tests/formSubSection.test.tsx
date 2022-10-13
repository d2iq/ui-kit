import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { FormSubSection } from "..";

describe("Form structure components", () => {
  it("renders top-level form structure components", () => {
    const onRemoveFn = jest.fn();
    const { getByTestId } = render(
      <FormSubSection onRemove={onRemoveFn}>
        <div>Form sub-section content</div>
      </FormSubSection>
    );

    expect(onRemoveFn).not.toHaveBeenCalled();
    fireEvent.click(getByTestId("formSubSection-removeButton"));
    expect(onRemoveFn).toHaveBeenCalled();
  });
});
