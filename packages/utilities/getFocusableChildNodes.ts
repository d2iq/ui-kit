// https://github.com/theKashey/focus-lock/blob/master/src/utils/tabbables.js
const focusableNodeSelectors = [
  "button:enabled:not([readonly])",
  "select:enabled:not([readonly])",
  "textarea:enabled:not([readonly])",
  "input:enabled:not([readonly])",

  "a[href]",
  "area[href]",

  "iframe",
  "object",
  "embed",

  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
].join(",");

export const getFirstFocusableChildNode = (
  element: HTMLElement
): HTMLElement | null => {
  if (element.matches(focusableNodeSelectors)) {
    return element;
  }
  return element.querySelector(focusableNodeSelectors);
};

export const getAllFocusableChildNodes = (
  element: HTMLElement
): HTMLElement[] => {
  const focusableNodeList =
    element.querySelectorAll(focusableNodeSelectors) || [];
  return [].slice.call(focusableNodeList);
};
