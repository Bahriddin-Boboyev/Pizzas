export const cartSlice = (content, max, start, end) => {
  if (content.length > max) {
    return `${content.slice(start, end)}...`;
  } else {
    return content;
  }
};
