export const recursiveLinkedList = chars => {
  if (chars.length === 0) {
    return undefined;
  }
  return {
    value: chars.shift(),
    child: recursiveLinkedList(chars)
  };
};

export const recursiveImmutableLinkedList = chars => {
  if (chars.length === 0) {
    return undefined;
  }
  return Object.freeze({
    value: chars.shift(),
    child: recursiveImmutableLinkedList(chars)
  });
};

export const linkedListWithPointer = chars => {
  let result;
  while (chars.length > 0) {
    result = {
      value: chars.pop(),
      child: result
    };
  }
  return result;
};
