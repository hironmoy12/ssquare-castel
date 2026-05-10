import { emiSettings, formatCurrency, getRangeProgress } from "../utils/emiUtils";

export default function EmiCalculator({ emiState }) {
  const {
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
  } = emiState;

  return (
    <section className="emi-section">
      <div className="container">
        <div className="emi-section__header">
          <p className="section-label">Home Loan</p>
          <h2 className="section-title">Calculate Your EMI</h2>
          <p className="emi-section__intro">
            We make homeownership hassle-free with easy financing options,
            flexible terms, and quick approvals.
          </p>
        </div>

        <div
          className={`emi-calculator ${isEmiResultVisible ? "" : "emi-calculator--pending"}`}
        >
          <div className="emi-controls">
            <div className="emi-control">
              <div className="emi-control__top">
                <label htmlFor="loan-amount">Loan Amount</label>
                <span>{formatCurrency(loanAmount)}</span>
              </div>
              <input
                id="loan-amount"
                type="range"
                min={emiSettings.amount.min}
                max={emiSettings.amount.max}
                step={emiSettings.amount.step}
                value={loanAmount}
                onChange={(event) => setLoanAmount(Number(event.target.value))}
                style={{
                  "--range-progress": `${getRangeProgress(loanAmount, emiSettings.amount.min, emiSettings.amount.max)}%`,
                }}
              />
              <div className="emi-control__limits">
                <span>₹5L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            <div className="emi-control">
              <div className="emi-control__top">
                <label htmlFor="interest-rate">Interest Rate (Per Annum)</label>
                <span>{interestRate.toFixed(1)}%</span>
              </div>
              <input
                id="interest-rate"
                type="range"
                min={emiSettings.rate.min}
                max={emiSettings.rate.max}
                step={emiSettings.rate.step}
                value={interestRate}
                onChange={(event) =>
                  setInterestRate(Number(event.target.value))
                }
                style={{
                  "--range-progress": `${getRangeProgress(interestRate, emiSettings.rate.min, emiSettings.rate.max)}%`,
                }}
              />
              <div className="emi-control__limits">
                <span>5%</span>
                <span>18%</span>
              </div>
            </div>

            <div className="emi-control">
              <div className="emi-control__top">
                <label htmlFor="loan-tenure">Loan Tenure</label>
                <span>
                  {tenureValue} {tenureUnit}
                </span>
              </div>
              <input
                id="loan-tenure"
                type="range"
                min={activeTenureSettings.min}
                max={activeTenureSettings.max}
                step={activeTenureSettings.step}
                value={tenureValue}
                onChange={(event) =>
                  setTenureValue(Number(event.target.value))
                }
                style={{
                  "--range-progress": `${getRangeProgress(tenureValue, activeTenureSettings.min, activeTenureSettings.max)}%`,
                }}
              />
              <div className="emi-control__limits">
                <span>{tenureUnit === "years" ? "1yr" : "12mo"}</span>
                <span>{tenureUnit === "years" ? "30 yrs" : "360mo"}</span>
              </div>
              <div className="emi-toggle" aria-label="Choose tenure unit">
                <button
                  type="button"
                  className={tenureUnit === "months" ? "is-active" : ""}
                  onClick={() => handleTenureUnitChange("months")}
                >
                  Months
                </button>
                <button
                  type="button"
                  className={tenureUnit === "years" ? "is-active" : ""}
                  onClick={() => handleTenureUnitChange("years")}
                >
                  Years
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary emi-calculate-button"
              onClick={() => setIsEmiResultVisible(true)}
            >
              Calculate EMI
            </button>
          </div>

          {isEmiResultVisible && (
            <div className="emi-result">
              <p className="emi-result__label">Monthly EMI</p>
              <strong>{formatCurrency(emiDetails.monthlyEmi)}</strong>
              <div className="emi-result__divider" />
              <div className="emi-result__totals">
                <div>
                  <span>Total Interest</span>
                  <strong>{formatCurrency(emiDetails.totalInterest)}</strong>
                </div>
                <div>
                  <span>Total Payment</span>
                  <strong>{formatCurrency(emiDetails.totalPayment)}</strong>
                </div>
              </div>
              <div className="emi-breakup">
                <div
                  className="emi-breakup__bar"
                  style={{
                    "--principal-share": `${emiDetails.principalShare}%`,
                  }}
                />
                <div className="emi-breakup__legend">
                  <span>
                    <i className="emi-breakup__dot emi-breakup__dot--principal" />
                    Principal
                  </span>
                  <span>
                    <i className="emi-breakup__dot emi-breakup__dot--interest" />
                    Interest
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
