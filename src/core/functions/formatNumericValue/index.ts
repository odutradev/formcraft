const currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const formatNumericValue = (value: string | number, type: "currency" | "percentage"): string => {
  const digits = String(value).replace(/\D/g, "");
  if (!digits) return "";
  const amount = Number.parseInt(digits, 10) / 100;
  if (type === "percentage") return amount.toFixed(2).replace(".", ",");
  return currencyFormatter.format(amount);
};

export default formatNumericValue;
