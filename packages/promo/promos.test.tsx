import React from "react";
import { mount, render } from "enzyme";
import toJSON from "enzyme-to-json";

import { PromoBanner, PromoInline } from "./";
import PromoContent from "./components/PromoContent";

describe("Promos", () => {
  const dismissHandler = jest.fn();
  const optOutHandler = jest.fn();
  it("renders PromoBanner", () => {
    expect(
      toJSON(
        render(
          <PromoBanner
            graphicSrc="http://placehold.it/350x150"
            primaryAction={<button>Primary Action</button>}
            secondaryAction={<button>Secondary Action</button>}
            headingText="Promo Banner"
            bodyContent="Some promo details"
            dismissHandler={dismissHandler}
            optOutHandler={optOutHandler}
          />
        )
      )
    ).toMatchSnapshot();
  });

  it("renders PromoBanner with a gradientStyle", () => {
    expect(
      toJSON(
        render(
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
        )
      )
    ).toMatchSnapshot();
  });

  it("renders PromoBanner with a custom background color", () => {
    expect(
      toJSON(
        render(
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
        )
      )
    ).toMatchSnapshot();
  });

  it("renders PromoInline", () => {
    expect(
      toJSON(
        render(
          <PromoInline
            graphicSrc="http://placehold.it/350x150"
            primaryAction={<button>Primary Action</button>}
            secondaryAction={<button>Secondary Action</button>}
            headingText="Promo Inline"
            bodyContent="Some promo details"
            dismissHandler={dismissHandler}
            optOutHandler={optOutHandler}
          />
        )
      )
    ).toMatchSnapshot();
  });

  it("calls optOutHandler when the opt out checkbox is checked", () => {
    const component = mount(
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
    component.find("input").simulate("change", { target: { checked: true } });
    expect(optOutHandler).toHaveBeenCalled();
  });

  it("calls optOutHandler when the opt out checkbox is checked", () => {
    const component = mount(
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
    component.find('[aria-label*="system-close"]').simulate("click");
    expect(dismissHandler).toHaveBeenCalled();
  });
});
