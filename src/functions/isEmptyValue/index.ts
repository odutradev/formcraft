const isEmptyValue = (value: unknown): boolean => value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);

export default isEmptyValue;
