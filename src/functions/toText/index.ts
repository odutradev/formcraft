const toText = (value: unknown): string => (value === undefined || value === null ? "" : String(value));

export default toText;
