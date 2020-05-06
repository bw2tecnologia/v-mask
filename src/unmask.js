/**
 * Returns text without mask-provided delimiters
 * @example
 * unMask('11:12', '##:##'); // -> 1112
 *
 * @param {String} text - String to clean (input value)
 * @param {String} [wholeMask] - Mask format, like `####-##`
 * @returns {string} Cleaned text
 */
export default function (text, wholeMask) {
  for (let maskIndex = 0; maskIndex < wholeMask.length; maskIndex += 1) {
    const maskChar = wholeMask.charAt(maskIndex);
    switch (maskChar) {
      case "#":
        break;
      case "A":
        break;
      case "?":
        break;
      case "N":
        break;
      case "X":
        break;
      default:
        text = text.replace(maskChar, "");
    }
  }

  return text;
}
