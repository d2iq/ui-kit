import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import {
  FormMessage,
  FormSection,
  FormSectionBody,
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

const readme = require("../README.md");

const onAddSubSection = () => {
  alert("another box would be added");
};
const onRemoveSubSection = () => {
  alert("the box would be removed");
};

storiesOf("Form structure/Overall form layout", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [
        Container,
        TextInput,
        Textarea,
        ToggleInputList,
        SelectInput,
        SecondaryButton
      ]
    }
  })
  .add("FormTitle", () => (
    <Container>
      <FormTitle>Form Title</FormTitle>
      <div>Form sections go here</div>
    </Container>
  ))
  .add("FormMessage", () => {
    const appearances: {
      [key: string]: "danger" | "default" | "info" | "success" | "warning";
    } = {
      danger: "danger",
      default: "default",
      info: "info",
      success: "success",
      warning: "warning"
    };
    const appearance = select("appearance", appearances, "default");

    return (
      <Container>
        <FormMessage appearance={appearance}>
          Use the knobs to change the appearance (danger, success, etc...) of
          this message
        </FormMessage>
        <FormTitle>Form Title</FormTitle>
        <div>Form sections go here</div>
      </Container>
    );
  })
  .add("FormSection", () => (
    <Container>
      <FormSection>
        <FormSectionBody>
          <TextInput inputLabel="Name" id="name" />
          <TextInput inputLabel="Role" id="role" />
          <TextInput inputLabel="City" id="city" />
        </FormSectionBody>
      </FormSection>
    </Container>
  ))
  .add("FormSection w/ header", () => (
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
      </FormSection>
    </Container>
  ))
  .add("FormSubSection", () => (
    <Container>
      <FormSubSection>
        <TextInput inputLabel="Name" id="name" />
        <TextInput inputLabel="Role" id="role" />
        <TextInput inputLabel="City" id="city" />
      </FormSubSection>
    </Container>
  ))
  .add("related FormSubSections grouped in a FormSection", () => (
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
  ))
  .add("kitchen-sink example form layout", () => (
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
          <SecondaryButton
            iconStart={SystemIcons.Plus}
            onClick={onAddSubSection}
          >
            Add a team member
          </SecondaryButton>
        </FormSectionBody>
      </FormSection>
    </Container>
  ));
