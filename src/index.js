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
    child: recursiveImmutableLink(chars)
  });
};

export const longString = chars => {
  let result;
  while (chars.length > 0) {
    result = {
      value: chars.pop(),
      child: result
    };
  }
  return result;
};
