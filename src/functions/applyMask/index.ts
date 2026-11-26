const slotPatterns: Record<string, RegExp> = { "0": /\d/, a: /[a-zA-Z]/, "*": /\S/ };

const fillMask = (mask: string, input: string): string => {
  if (!mask || !input) return "";
  const maskChar = mask[0];
  const remainingMask = mask.slice(1);
  const slotPattern = slotPatterns[maskChar];

  if (!slotPattern) {
    const remainingInput = input.startsWith(maskChar) ? input.slice(1) : input;
    const tail = fillMask(remainingMask, remainingInput);
    return tail ? `${maskChar}${tail}` : "";
  }

  const matchIndex = [...input].findIndex((char) => slotPattern.test(char));
  if (matchIndex === -1) return "";
  return `${input[matchIndex]}${fillMask(remainingMask, input.slice(matchIndex + 1))}`;
};

const applyMask = (value: string, mask: string | RegExp, previousValue: string): string => {
  const upperValue = value.toUpperCase();
  if (typeof mask === "string") return fillMask(mask, upperValue);
  if (!upperValue || mask.test(upperValue)) return upperValue;
  return previousValue;
};

export default applyMask;
