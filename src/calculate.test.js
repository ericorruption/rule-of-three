import calculate from "./calculate";

it("returns 0 when the signature is incorrect", () =>
  expect(calculate({})).toBe(0));

it("calculates based on rule of 3", () => {
  expect(
    calculate({
      a: 0,
      b: 0,
      c: 0
    })
  ).toBe(0);

  expect(
    calculate({
      a: 125,
      b: 100,
      c: 100
    })
  ).toBe(80);
});
