const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) => {
  return (
    <div className="bg-white p-3 rounded-lg flex items-center justify-between">
      <div className="w-1/2">
        <label className="text-sm text-gray-500">{label}</label>
        <input
          type="number"
          className="w-full rounded-md bg-gray-100 px-2 py-1"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <label className="text-sm text-gray-500">Currency</label>
        <select
          className="w-1/3 rounded p-2"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
