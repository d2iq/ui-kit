import React from "react";

import { FormSubSection } from "..";
import { mount } from "enzyme";

describe("Form structure components", () => {
  it("renders top-level form structure components", () => {
    const onRemoveFn = jest.fn();
    const formSubSection = mount(
      <FormSubSection onRemove={onRemoveFn}>
        <div>Form sub-section content</div>
      </FormSubSection>
    );

    const removeButton = formSubSection.find("button");
    expect(onRemoveFn).not.toHaveBeenCalled();
    removeButton.simulate("click");
    expect(onRemoveFn).toHaveBeenCalled();
  });
});
