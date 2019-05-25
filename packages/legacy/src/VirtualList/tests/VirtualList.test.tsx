import React from "react";
import { shallow } from "enzyme";
import VirtualList from "../VirtualList";

describe("VirtualList", () => {
  describe("#getBox box that defines the visible part of the list", () => {
    it("matches the viewport when starting at 0 and filling the viewport", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: view.top,
        bottom: view.bottom
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(1000);
    });

    it("matches the viewport when starting at 0 and overfilling the viewport", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: 0,
        bottom: 2000
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(1000);
    });

    it("matches the top half of the viewport when starting at 0 and only filling the first half", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: 0,
        bottom: 500
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(500);
    });

    it("matches the bottom half of the viewport when starting halfway down", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: 500,
        bottom: 1500
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(500);
    });

    it("matches the bottom half of the list when scrolled 500px past the bottom of the list", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 500,
        bottom: 1500
      };

      var list = {
        top: 0,
        bottom: 1000
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(500);
      expect(box.bottom).toBe(1000);
    });

    it("matches the mid-section of the list when scrolled down appropriately", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 1000,
        bottom: 2000
      };

      var list = {
        top: 0,
        bottom: 3000
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(1000);
      expect(box.bottom).toBe(2000);
    });

    it("fills the list box when the viewbox is larger", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 2000
      };

      var list = {
        top: 500,
        bottom: 1500
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(1000);
    });
  });

  describe("renderer that calculates the items to render (and to not render)", () => {
    var viewport = 1000;
    var itemHeight = 200;
    var itemCount = 20;

    it("shows the first 5 items at the top of the viewport", () => {
      var windowScrollY = 0;
      var offsetTop = 0;
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        0
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(4);
    });

    it("shows the last 5 items at the bottom of the viewport", () => {
      var windowScrollY = 3000;
      var offsetTop = 0;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        0
      );

      expect(result.firstItemIndex).toBe(15);
      expect(result.lastItemIndex).toBe(19);
    });

    it("shows 6 items if the viewport starts in the middle of an item", () => {
      var windowScrollY = 100;
      var offsetTop = 0;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        0
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(5);
    });

    it("shows the first 3 (2.5 items) if the list starts halfway down the page", () => {
      var windowScrollY = 0;
      var offsetTop = viewport / 2;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        0
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(2);
    });

    it("shows the last 3 (2.5 items) if the viewport is scrolled 500px past the bottom of the list", () => {
      var windowScrollY = 3500;
      var offsetTop = 0;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        0
      );

      expect(result.firstItemIndex).toBe(17);
      expect(result.lastItemIndex).toBe(19);
    });

    it("shows all items if the list is smaller than the viewbox", () => {
      var windowScrollY = 0;
      var offsetTop = 100;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        4,
        0
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(3);
    });

    it("shows items that are in the viewport and buffer", () => {
      var windowScrollY = 0;
      var offsetTop = 0;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        5
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(9);
    });

    it("does not show items after the viewport, beyond the buffer", () => {
      var windowScrollY = 0;
      var offsetTop = 1000;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        5
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(4);
    });

    it("does not show items before the viewport, beyond the buffer", () => {
      var windowScrollY = 4000;
      var offsetTop = 0;

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        windowScrollY,
        viewport,
        offsetTop,
        itemHeight,
        itemCount,
        5
      );

      expect(result.firstItemIndex).toBe(15);
      expect(result.lastItemIndex).toBe(19);
    });

    it("shows items before and after the viewport, in the buffer", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      var result = instance.getItems(
        1000,
        viewport,
        0,
        itemHeight,
        itemCount,
        5
      );

      expect(result.firstItemIndex).toBe(0);
      expect(result.lastItemIndex).toBe(14);
    });

    it("renders only required items", () => {
      var renderItemSpy = jasmine.createSpy("renderItemSpy");

      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var instance = component.instance() as VirtualList;

      instance.getItemsToRender(
        { itemHeight: 20, renderItem: renderItemSpy },
        { items: Array.from({ length: 2 }), bufferStart: 2 * 20 }
      );

      expect(renderItemSpy.calls.count()).toBe(2);
      expect(renderItemSpy.calls.allArgs()).toEqual([
        [undefined, 2],
        [undefined, 3]
      ]);
    });
  });

  describe("with some content", () => {
    it("renders something", () => {
      var renderItem = () => {
        return <span key={Math.random()}>item</span>;
      };
      var renderBufferItem: any = () => {
        return <span key={Math.random()}>item</span>;
      };

      var component = shallow(
        <VirtualList
          items={[1]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var tableContents = component.find("span");

      expect(tableContents.length).toBe(3);
    });
  });

  describe("with failing renderItem", () => {
    it("renders properly filling the viewport", () => {
      var renderItem = () => {
        throw Error("fail");
      };
      var renderBufferItem: any = () => {
        return;
      };

      var component = shallow(
        <VirtualList
          items={[<li key="1">1</li>]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: view.top,
        bottom: view.bottom
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(1000);
    });
  });

  describe("with failing renderBufferItem", () => {
    it("renders properly filling the viewport", () => {
      var renderItem: any = () => {
        return;
      };

      var renderBufferItem = () => {
        throw Error("fail");
      };

      var component = shallow(
        <VirtualList
          items={[<li key="1">1</li>]}
          itemHeight={10}
          renderItem={renderItem}
          renderBufferItem={renderBufferItem}
        />
      );

      var view = {
        top: 0,
        bottom: 1000
      };

      var list = {
        top: view.top,
        bottom: view.bottom
      };

      var instance = component.instance() as VirtualList;

      var box = instance.getBox(view, list);

      expect(box.top).toBe(0);
      expect(box.bottom).toBe(1000);
    });
  });
});
