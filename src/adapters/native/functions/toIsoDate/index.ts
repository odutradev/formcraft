const toIsoDate = (date: Date): string => [date.getFullYear(), date.getMonth() + 1, date.getDate()].map((part) => String(part).padStart(2, "0")).join("-");

export default toIsoDate;
