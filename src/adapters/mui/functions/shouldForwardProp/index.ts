const shouldForwardProp = (prop: PropertyKey): boolean => typeof prop !== "string" || !prop.startsWith("$");

export default shouldForwardProp;
