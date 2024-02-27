
it('should calculate the monthly rate correctly', function () {
  const values1 = { amount: 10000, years: 5, rate: 5 };
    const result1 = calculateMonthlyPayment(values1);
    expect(result1).toEqual('188.71');

    const values2 = { amount: 20000, years: 10, rate: 3.5 };
    const result2 = calculateMonthlyPayment(values2);
    expect(result2).toEqual('202.76');
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 15000, years: 7, rate: 6.25 };
    const result = calculateMonthlyPayment(values);
    const decimalPlaces = (result.split('.')[1] || []).length;
    expect(decimalPlaces).toBe(2);
});

/// etc
