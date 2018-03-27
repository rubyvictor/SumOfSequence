const sequenceSum = require("./sequenceSum");

describe("sequenceSum() func tests", () => {
  it("sequenceSum(2, 6, 2) should return 12", () => {
    expect(sequenceSum(2, 6, 2)).toEqual(12);
  });

  it("sequenceSum(1, 5, 1 should return 15", () => {
    expect(sequenceSum(1, 5, 1)).toEqual(15);
  });

  it("sequenceSum(1, 5, 3) should return 5", () => {
    expect(sequenceSum(1, 5, 3)).toEqual(5);
  });
});
