import Util from "../Util";

describe("Util", () => {
  describe("#extend", () => {
    it("should not change any properties if passed a single argument", function() {
      var originalObj: any = {
        a: 5,
        b: 10,
        c: 15
      };
      var newObj = Util.extend(originalObj);

      for (const key of originalObj) {
        expect(newObj[key]).toEqual(originalObj[key]);
      }
    });

    it("should combine properties with the source", () => {
      var originalObj = {
        a: 5,
        b: 10,
        c: 15
      };

      var source = {
        a: "changed prop"
      };

      var newObj = Util.extend(originalObj, source);
      expect(newObj.a).toEqual("changed prop");
    });

    it("should handle multiple arguments", () => {
      var originalObj = {
        a: 5,
        b: 10,
        c: 15
      };

      var obj1 = {
        a: "changed prop",
        b: "changed prop"
      };

      var obj2 = {
        a: "overrode prop"
      };

      var newObj = Util.extend(originalObj, obj1, obj2);
      expect(newObj.a).toEqual("overrode prop");
      expect(newObj.b).toEqual("changed prop");
    });

    it("should not do anything if not passed an obj", () => {
      var originalObj = {
        a: 5,
        b: 10,
        c: 15
      };
      var string = "string";
      var func: any = () => {
        return;
      };
      func.fakeProp = "faked prop";
      var nullVal = null;

      var newObj = Util.extend(originalObj, string, func, nullVal);

      for (const key of newObj) {
        expect(newObj[key]).toEqual(originalObj[key]);
      }
    });
  });

  describe("#exclude", () => {
    it("doesn't exclude any properties", () => {
      var object = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };
      var expectedResult = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };
      expect(Util.exclude(object, [])).toEqual(expectedResult);
    });

    it("excludes one property", function() {
      var object = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };
      var expectedResult = {
        foo: "foo",
        baz: "baz"
      };
      expect(Util.exclude(object, ["bar"])).toEqual(expectedResult);
    });

    it("excludes multiple properties", function() {
      var object = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };
      var expectedResult = {
        baz: "baz"
      };
      expect(Util.exclude(object, ["foo", "bar", "qux"])).toEqual(
        expectedResult
      );
    });

    it("doesn't modify the original object", function() {
      var object = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };
      var expectedResult = {
        foo: "foo",
        bar: "bar",
        baz: "baz"
      };

      Util.exclude(object, ["bar"]);
      expect(object).toEqual(expectedResult);
    });
  });

  describe("#capitalize", () => {
    it("capitalizes the string correctly", () => {
      expect(Util.capitalize("kenny")).toEqual("Kenny");
    });

    it("returns null if input is not a string", () => {
      expect(Util.capitalize(10)).toEqual(null);
    });

    it("does nothing if string is already capitalized", () => {
      var capitalizedString = "Name";
      expect(Util.capitalize(capitalizedString)).toEqual(capitalizedString);
    });
  });

  describe("#sortBy", () => {
    it("should not mutate original collection", () => {
      var collection = [
        { name: "c", value: 1 },
        { name: "t", value: 3 },
        { name: "a", value: 3 }
      ];
      let result = Util.sortBy(collection, "value");

      expect(result !== collection).toBeTruthy();
    });

    it("should sort collection by prop", () => {
      var collection = [
        { name: "c", value: 1 },
        { name: "t", value: 3 },
        { name: "a", value: 3 }
      ];
      let result = Util.sortBy(collection, "name");

      expect(result).toEqual([
        { name: "a", value: 3 },
        { name: "c", value: 1 },
        { name: "t", value: 3 }
      ]);
    });

    it("should use custom compare function", () => {
      var collection = [
        { name: "c", value: 1 },
        { name: "t", value: 3 },
        { name: "a", value: 3 }
      ];
      let result = Util.sortBy(collection, (a, b) => {
        var delta = a.value - b.value;
        return delta / Math.abs(delta || 0);
      });

      expect(result).toEqual([
        { name: "c", value: 1 },
        { name: "t", value: 3 },
        { name: "a", value: 3 }
      ]);
    });
  });
});
