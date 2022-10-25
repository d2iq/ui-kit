import React from "react";
import { render } from "@testing-library/react";

import { PromoBanner, PromoInline } from "./";
import PromoContent from "./components/PromoContent";

describe("Promos", () => {
  const dismissHandler = jest.fn();
  const optOutHandler = jest.fn();
  it("renders PromoBanner", () => {
    const { asFragment } = render(
      <PromoBanner
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Banner"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders PromoBanner with a gradientStyle", () => {
    const { asFragment } = render(
      <PromoBanner
        gradientStyle="lightBlue"
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Banner"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders PromoBanner with a custom background color", () => {
    const { asFragment } = render(
      <PromoBanner
        bgColor="purpleLighten5"
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Banner"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders PromoInline", () => {
    const { asFragment } = render(
      <PromoInline
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Inline"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls optOutHandler when the opt out checkbox is checked", () => {
    const { container } = render(
      <PromoContent
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Inline"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );

    expect(optOutHandler).not.toHaveBeenCalled();
    const checkboxEl = container.querySelector(
      "input[type=checkbox]"
    ) as HTMLInputElement;
    expect(checkboxEl.checked).toBeFalsy();
    checkboxEl.click();
    expect(checkboxEl.checked).toBeTruthy();
    expect(optOutHandler).toHaveBeenCalled();
  });

  it("calls dismissHandler when close button is clicked", () => {
    const { getByTestId } = render(
      <PromoContent
        graphicSrc="http://placehold.it/350x150"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
        headingText="Promo Inline"
        bodyContent="Some promo details"
        dismissHandler={dismissHandler}
        optOutHandler={optOutHandler}
      />
    );

    expect(dismissHandler).not.toHaveBeenCalled();
    const closeButton = getByTestId("dismissButton") as HTMLButtonElement;
    closeButton.click();
    expect(dismissHandler).toHaveBeenCalled();
  });
});
