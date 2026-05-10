export const emiSettings = {
  amount: {
    min: 500000,
    max: 50000000,
    step: 100000,
  },
  rate: {
    min: 5,
    max: 18,
    step: 0.1,
  },
  tenure: {
    years: {
      min: 1,
      max: 30,
      step: 1,
    },
    months: {
      min: 12,
      max: 360,
      step: 1,
    },
  },
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const getRangeProgress = (value, min, max) =>
  ((value - min) / (max - min)) * 100;
