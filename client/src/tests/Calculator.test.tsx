import calculateFee from "../functions/calculateFee";

describe("calculateFee", () => {
  it("should return 0 if cartValue is 100", () => {
    const props = {
      cartValue: 100,
      deliveryDistance: 800,
      numberOfItems: 5,
      deliveryHour: 14,
      deliveryMinute: 30,
      deliveryDate: new Date("2023-09-10"),
    };
    expect(calculateFee(props)).toBe(0);
  });

  test("for additional items", () => {
    const props = {
      cartValue: 20,
      deliveryDistance: 800,
      numberOfItems: 10,
      deliveryHour: 9,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-28"),
    };
    expect(calculateFee(props)).toBe(5);
  });

  test("for additional distance", () => {
    const props = {
      cartValue: 20,
      deliveryDistance: 2000,
      numberOfItems: 5,
      deliveryHour: 9,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-28"),
    };

    expect(calculateFee(props)).toBe(4.5);
  });

  test("for additional distance and items", () => {
    const props = {
      cartValue: 20,
      deliveryDistance: 2000,
      numberOfItems: 10,
      deliveryHour: 9,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-28"),
    };

    expect(calculateFee(props)).toBe(7);
  });

  test("for additional distance and items and friday rush time", () => {
    const props = {
      cartValue: 20,
      deliveryDistance: 2000,
      numberOfItems: 12,
      deliveryHour: 18,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-27"),
    };

    expect(calculateFee(props)).toBe(9.6);
  });

  test("for max delivery fee", () => {
    const props = {
      cartValue: 1,
      deliveryDistance: 100000,
      numberOfItems: 100,
      deliveryHour: 18,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-27"),
    };
    expect(calculateFee(props)).toBe(15);
  });

  test("for bulk fee", () => {
    const props = {
      cartValue: 10,
      deliveryDistance: 800,
      numberOfItems: 12,
      deliveryHour: 10,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-27"),
    };
    expect(calculateFee(props)).toBe(6);
  });

  test("for bulk fee and friday rush", () => {
    const props = {
      cartValue: 5,
      deliveryDistance: 800,
      numberOfItems: 12,
      deliveryHour: 17,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-27"),
    };
    expect(calculateFee(props)).toBe(13.2);
  });

  test("for extra distance and friday rush", () => {
    const props = {
      cartValue: 10,
      deliveryDistance: 1501,
      numberOfItems: 4,
      deliveryHour: 17,
      deliveryMinute: 3,
      deliveryDate: new Date("2023-01-27"),
    };
    expect(calculateFee(props)).toBe(4.8);
  });
});
