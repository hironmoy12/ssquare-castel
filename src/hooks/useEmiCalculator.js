import { useMemo, useState } from "react";
import { emiSettings } from "../utils/emiUtils";

export const useEmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureUnit, setTenureUnit] = useState("years");
  const [tenureValue, setTenureValue] = useState(20);
  const [isEmiResultVisible, setIsEmiResultVisible] = useState(false);

  const activeTenureSettings = emiSettings.tenure[tenureUnit];
  const tenureInMonths =
    tenureUnit === "years" ? tenureValue * 12 : tenureValue;

  const emiDetails = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const monthlyEmi =
      monthlyRate === 0
        ? loanAmount / tenureInMonths
        : (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, tenureInMonths)) /
          (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    const totalPayment = monthlyEmi * tenureInMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyEmi: Math.round(monthlyEmi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principalShare: Math.max(
        0,
        Math.min(100, (loanAmount / totalPayment) * 100),
      ),
    };
  }, [interestRate, loanAmount, tenureInMonths]);

  const handleTenureUnitChange = (nextUnit) => {
    if (nextUnit === tenureUnit) return;

    setTenureValue((currentValue) => {
      if (nextUnit === "months") return currentValue * 12;
      return Math.max(
        emiSettings.tenure.years.min,
        Math.round(currentValue / 12),
      );
    });
    setTenureUnit(nextUnit);
  };

  return {
    loanAmount,
    setLoanAmount,
    interestRate,
    setInterestRate,
    tenureUnit,
    tenureValue,
    setTenureValue,
    isEmiResultVisible,
    setIsEmiResultVisible,
    activeTenureSettings,
    emiDetails,
    handleTenureUnitChange,
  };
};
