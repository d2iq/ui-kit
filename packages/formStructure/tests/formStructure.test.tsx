import React from "react";

import {
  FormMessage,
  FormSection,
  FormSectionBody,
  FormSectionHeader,
  FormSubSection,
  FormTitle
} from "..";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Form structure components", () => {
  it("renders top-level form structure components", () => {
    expect(
      toJSON(
        render(
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
        )
      )
    ).toMatchSnapshot();
  });
});
