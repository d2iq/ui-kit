import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import {
  CaptionText,
  DangerText,
  HeadingText1,
  HeadingText2,
  HeadingText3,
  InteractiveText,
  MonospaceText,
  SmallText,
  SuccessText,
  Text,
  TextBlock,
  WarningText
} from "../";

expect.addSnapshotSerializer(createSerializer());

const allComponents = [
  Text,
  CaptionText,
  DangerText,
  HeadingText1,
  HeadingText2,
  HeadingText3,
  InteractiveText,
  MonospaceText,
  SmallText,
  SuccessText,
  WarningText
];

describe("Typography", () => {
  it("renders all default", () => {
    allComponents.forEach(component => {
      const TypographyComponent = component;
      const { asFragment } = render(
        <TypographyComponent tag="p" wrap="wrap" align="left">
          content
        </TypographyComponent>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Text", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <Text
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          color="black"
          size="s"
          className="test"
        >
          content
        </Text>
      );

      expect(asFragment()).toMatchSnapshot();
    });
    it("renders all wrap variants", () => {
      type WrapVariant = "truncate" | "nowrap" | "wrap";

      ["truncate", "nowrap", "wrap"].forEach(wrapVariant => {
        const { asFragment } = render(
          <Text
            tag="p"
            align="left"
            size="m"
            weight="normal"
            color="black"
            wrap={wrapVariant as WrapVariant}
          >
            content
          </Text>
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("CaptionText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <CaptionText align="center" tag="span" wrap="nowrap">
          content
        </CaptionText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("DangerText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <DangerText
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          size="l"
        >
          content
        </DangerText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("HeadingText", () => {
    it("renders all props all HeadingText variants", () => {
      [HeadingText1, HeadingText2, HeadingText3].forEach(component => {
        const HeadingComponent = component;
        const { asFragment } = render(
          <HeadingComponent color="black" align="center" tag="h1" wrap="nowrap">
            content
          </HeadingComponent>
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("InteractiveText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <InteractiveText
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          size="l"
        >
          content
        </InteractiveText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("MonospaceText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <MonospaceText
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          size="l"
          color="black"
        >
          content
        </MonospaceText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("SmallText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <SmallText
          color="black"
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
        >
          content
        </SmallText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("SuccessText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <SuccessText
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          size="l"
        >
          content
        </SuccessText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("WarningText", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <WarningText
          align="center"
          tag="span"
          wrap="nowrap"
          weight="medium"
          size="l"
        >
          content
        </WarningText>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("TextBlock", () => {
    it("renders all props", () => {
      const { asFragment } = render(
        <TextBlock>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </TextBlock>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
