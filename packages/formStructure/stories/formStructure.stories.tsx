import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  FormMessage,
  FormSection,
  FormSectionBody,
  FormSectionFooter,
  FormSectionHeader,
  FormSubSection,
  FormTitle
} from "../";
import { Container } from "../../styleUtils/layout";
import { TextInput } from "../../textInput";
import { Textarea } from "../../textarea";
import { ToggleInputList } from "../../toggleInputList";
import { SelectInput } from "../../selectInput";
import { SecondaryButton } from "../../button";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { CaptionText } from "../../styleUtils/typography";

const onAddSubSection = () => {
  alert("another box would be added");
};
const onRemoveSubSection = () => {
  alert("the box would be removed");
};

export default {
  title: "Forms/Form structure",
  subcomponents: {
    FormMessage,
    FormSection,
    FormSectionBody,
    FormSectionFooter,
    FormSectionHeader,
    FormSubSection,
    FormTitle
  }
} as Meta;

const Template: Story = args => (
  <Container>
    <FormTitle {...args}>Form Title</FormTitle>
    <div>Form sections go here</div>
  </Container>
);

export const Default = Template.bind({});

export const _FormMessage = args => {
  return (
    <Container>
      <FormMessage {...args}>
        Use the Control panel to change the appearance of the message.
      </FormMessage>
      <FormTitle {...args}>Form Title</FormTitle>
      <div>Form sections go here</div>
    </Container>
  );
};

export const _FormSection = args => (
  <Container>
    <FormSection>
      <FormSectionBody>
        <TextInput inputLabel="Name" id="name" />
        <TextInput inputLabel="Role" id="role" />
        <TextInput inputLabel="City" id="city" />
      </FormSectionBody>
    </FormSection>
  </Container>
);

export const FormSectionWithHeaderAndFooter = args => (
  <Container>
    <FormSection>
      <FormSectionHeader
        title="Form Section"
        subtitle="This is an optional subtitle that provides more detail about this section of the form"
      />
      <FormSectionBody>
        <TextInput inputLabel="Name" id="name" />
        <TextInput inputLabel="Role" id="role" />
        <TextInput inputLabel="City" id="city" />
      </FormSectionBody>
      <FormSectionFooter>
        <CaptionText>
          Here is a caption with supporting info about this section of the form
        </CaptionText>
      </FormSectionFooter>
    </FormSection>
  </Container>
);

export const _FormSubSection = args => (
  <Container>
    <FormSubSection>
      <TextInput inputLabel="Name" id="name" />
      <TextInput inputLabel="Role" id="role" />
      <TextInput inputLabel="City" id="city" />
    </FormSubSection>
  </Container>
);

export const RelatedFormSubSectionsGroupedInAFormSection = args => (
  <Container>
    <FormSection>
      <FormSectionHeader
        title="Team Members"
        subtitle="The details you provide will be used to create each team member to your specifications"
      />
      <FormSectionBody>
        <FormSubSection onRemove={onRemoveSubSection}>
          <TextInput inputLabel="Name" id="name.1" />
          <TextInput inputLabel="Role" id="role.1" />
          <TextInput inputLabel="City" id="city.1" />
        </FormSubSection>
        <FormSubSection onRemove={onRemoveSubSection}>
          <TextInput inputLabel="Name" id="name.2" />
          <TextInput inputLabel="Role" id="role.2" />
          <TextInput inputLabel="City" id="city.2" />
        </FormSubSection>
      </FormSectionBody>
    </FormSection>
  </Container>
);

export const ExampleFormLayout = args => (
  <Container>
    <FormMessage appearance="warning">
      There are already a bunch of teams. Are you sure you want another one?
    </FormMessage>
    <FormTitle>Team Generator</FormTitle>
    <FormSection>
      <FormSectionBody>
        <TextInput
          inputLabel="Name"
          hintContent="Names must be alphanumeric"
          id="name"
        />
        <Textarea inputLabel="Description" id="teamDesc" />
        <SelectInput
          inputLabel="Methodology"
          options={[
            { value: "agile", label: "Agile" },
            { value: "kanban", label: "Kanban" },
            { value: "scrumban", label: "Scrumban" },
            { value: "somethingElse", label: "Something else" }
          ]}
          id="region"
        />
        <ToggleInputList
          listLabel="Languages used"
          items={[
            { inputLabel: "Go", id: "go", value: "go" },
            { inputLabel: "JavaScript", id: "js", value: "js" },
            { inputLabel: "Python", id: "python", value: "python" },
            { inputLabel: "Ruby", id: "ruby", value: "ruby" }
          ]}
          id="languages"
        />
      </FormSectionBody>
    </FormSection>
    <FormSection>
      <FormSectionHeader
        title="Team Members"
        subtitle="The details you provide will be used to create each team member to your specifications"
      />
      <FormSectionBody>
        <FormSubSection onRemove={onRemoveSubSection}>
          <TextInput inputLabel="Name" id="name.1" />
          <TextInput inputLabel="Role" id="role.1" />
          <TextInput inputLabel="City" id="city.1" />
        </FormSubSection>
        <FormSubSection onRemove={onRemoveSubSection}>
          <TextInput inputLabel="Name" id="name.2" />
          <TextInput inputLabel="Role" id="role.2" />
          <TextInput inputLabel="City" id="city.2" />
        </FormSubSection>
        <SecondaryButton iconStart={SystemIcons.Plus} onClick={onAddSubSection}>
          Add a team member
        </SecondaryButton>
      </FormSectionBody>
    </FormSection>
  </Container>
);
