import {recursiveImmutableLink, recursiveLink} from "../index";

describe("Toto", () => {
  const EXPECTED = {
    child: {
      child: {
        child: {
          child: {
            child: {
              child: {
                child: {
                  child: {
                    child: {
                      child: {
                        child: {
                          child: undefined,
                          value: "!"
                        },
                        value: "d"
                      },
                      value: "l"
                    },
                    value: "r"
                  },
                  value: "o"
                },
                value: "W"
              },
              value: " "
            },
            value: "o"
          },
          value: "l"
        },
        value: "l"
      },
      value: "e"
    },
    value: "H"
  };

  describe("Test of recursiveLink.", () => {
    test("Result is not immutable", () => {
      const result = recursiveLink(Array.from("Hello World!"));
      expect(result).toEqual(EXPECTED);
      result.child.child.value = "Hi! I'm the new value";
      expect(result).not.toEqual(EXPECTED);
    });
  });

  describe("Test of recursiveImmutableLink.", () => {
    test("Result is not immutable", () => {
      const result = recursiveImmutableLink(Array.from("Hello World!"));
      expect(result).toEqual(EXPECTED);
      result.child.child.value = "Hi! I'm the new value";
      expect(result).toEqual(EXPECTED);
    });
  });
});
