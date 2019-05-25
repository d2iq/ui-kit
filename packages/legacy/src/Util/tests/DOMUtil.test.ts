import DOMUtil from "../DOMUtil";

describe("DOMUtil", () => {
  describe("#closest", () => {
    it(
      "should should return the parent element when provided a selector and " +
        "element where the element is a child of the selection",
      () => {
        var el = {
          parentElement: {
            id: "something-fake",
            matches: () => {
              return true;
            }
          },
          matches: () => {
            return false;
          }
        };
        var match = DOMUtil.closest(el, ".fake-selector");

        expect(match.id).toEqual("something-fake");
      }
    );

    it(
      "should should return null when provided a selector and element where " +
        "the element is not a child of the selection",
      () => {
        var el = {
          parentElement: null,
          matches: () => {
            return true;
          }
        };
        var match = DOMUtil.closest(el, ".fake-selector");

        expect(match).toEqual(null);
      }
    );

    it(
      "should should return the provided element when the provided element" +
        "matches the selector AND has a parent element",
      () => {
        var el = {
          parentElement: {
            id: "something-fake",
            matches: () => {
              return false;
            }
          },
          id: "child-element",
          matches: () => {
            return true;
          }
        };
        var match = DOMUtil.closest(el, ".fake-selector");

        expect(match.id).toEqual("child-element");
      }
    );
  });

  describe("#getNodeClearance", () => {
    beforeEach(() => {
      DOMUtil.getViewportHeight = () => {
        return 600;
      };

      DOMUtil.getViewportWidth = () => {
        return 600;
      };
    });

    it("should return the element's distance from all edges", () => {
      let node = {
        getBoundingClientRect: () => {
          return {
            bottom: 200,
            left: 100,
            right: 200,
            top: 100
          };
        }
      };

      let clearance = DOMUtil.getNodeClearance(node);

      expect(clearance.bottom).toEqual(400);
      expect(clearance.left).toEqual(100);
      expect(clearance.right).toEqual(400);
      expect(clearance.top).toEqual(100);
    });
  });
});
