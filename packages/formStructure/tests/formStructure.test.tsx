import React from "react";
import { render } from "@testing-library/react";

import {
  FormMessage,
  FormSection,
  FormSectionBody,
  FormSectionHeader,
  FormSubSection,
  FormTitle
} from "..";

describe("Form structure components", () => {
  it("renders top-level form structure components", () => {
    const { asFragment } = render(
      <>
        <FormMessage appearance="warning">Form message content</FormMessage>
        <FormTitle>Form Title Content</FormTitle>
        <FormSection>
          <FormSectionBody>
            <div>Form section body content</div>
          </FormSectionBody>
        </FormSection>
        <FormSection>
          <FormSectionHeader
            title="Section title"
            subtitle="Section subtitle"
          />
          <FormSectionBody>
            <FormSubSection>
              <div>Form sub-section content</div>
            </FormSubSection>
          </FormSectionBody>
        </FormSection>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
