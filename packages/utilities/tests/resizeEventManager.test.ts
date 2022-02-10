import resizeEventManager from "../resizeEventManager";

describe("resizeEventManager", () => {
  describe("add/remove handlers", () => {
    beforeEach(() => {
      // it's necessary to return 0 for tests to pass
      // due to expected number return
      jest.spyOn(window, "requestAnimationFrame").mockImplementation(cb => {
        cb(0);
        return 0;
      });
    });

    it("can be triggered globally", () => {
      const testHandler = jest.fn();

      resizeEventManager.add(testHandler);
      window.dispatchEvent(new Event("resize"));

      expect(testHandler).toHaveBeenCalled();
      resizeEventManager.remove(testHandler);
    });

    it("removes global listener when all listeners are removed", () => {
      const removeSpy = jest.spyOn(window, "removeEventListener");

      const testHandler1 = jest.fn();
      const testHandler2 = jest.fn();

      resizeEventManager.add(testHandler1);
      resizeEventManager.add(testHandler2);

      resizeEventManager.remove(testHandler1);
      expect(removeSpy).not.toHaveBeenCalled();
      resizeEventManager.remove(testHandler2);
      expect(removeSpy).toHaveBeenCalled();
    });
  });
});
