export const recursiveLink = chars => {
  if (chars.length === 0) {
    return undefined;
  }
  return {
    value: chars.shift(),
    child: recursiveLink(chars)
  };
};

export const recursiveImmutableLink = chars => {
  if (chars.length === 0) {
    return undefined;
  }
  return Object.freeze({
    value: chars.shift(),
    child: recursiveLink(chars)
  });
};

// (async () => {
//   const linkedList = Object.freeze(recursiveLink(Array.from("Hello World!")));
//   console.log(JSON.stringify(linkedList, null, 2));
//
//   linkedList.child.child.value = "Hi! I'm the new value";
//   console.log(JSON.stringify(linkedList, null, 2));
// })();
