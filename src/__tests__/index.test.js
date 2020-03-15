import { longString, recursiveImmutableLink, recursiveLink } from "../index";
import loremIpsum from "../lorem-ipsum";

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
    test("Result is immutable", async () => {
      const result = recursiveImmutableLink(Array.from("Hello World!"));
      expect(result).toEqual(EXPECTED);
      expect(() => {
        result.child.child.value = "Hi! I'm the new value";
      }).toThrow(
        new Error(
          "Cannot assign to read only property 'value' of object '#<Object>'"
        )
      );
    });
  });

  describe("Test on long string.", () => {
    test("recursive should explose.", async () => {
      expect(() => recursiveLink(Array.from(loremIpsum))).toThrow(
        new Error("Maximum call stack size exceeded")
      );
    });

    test("pointer should do the job.", async () => {
      expect(() => longString(Array.from(loremIpsum))).toMatchSnapshot();
    });
  });
});
