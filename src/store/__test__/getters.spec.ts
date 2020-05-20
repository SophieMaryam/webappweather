import { getters } from "../getters";

describe("Getters on Mount", () => {
  const state = {
    dataReceived: false,
    startLoading: false,
    cityName: "",
    temperature: undefined,
    weather: {}
  };
  it("returns dataReceived as false when state is false", () => {
    const result = getters.dataReceived(state);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });

  it("returns startLoading as false when state is false", () => {
    const result = getters.startLoading(state);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });

  it("returns cityName as empty string", () => {
    const result = getters.cityName(state);
    const expectedResult = "";
    expect(result).toBe(expectedResult);
  });

  it("returns temperature as undefined", () => {
    const result = getters.temperature(state);
    const expectedResult = undefined;
    expect(result).toBe(expectedResult);
  });

  it("returns weather as empty object", () => {
    const result = getters.weather(state);
    const expectedResult = {};
    expect(result).toStrictEqual(expectedResult);
  });
});

describe("Getters after API request", () => {
  const state = {
    dataReceived: true,
    startLoading: true,
    cityName: "Amsterdam",
    temperature: 20,
    weather: {
      data: [
        {
          valid_date: "2020-05-20",
        },
      ]
    }
  };
  it("returns dataReceived as true when state is true", () => {
    const result = getters.dataReceived(state);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("returns startLoading as true when state is true", () => {
    const result = getters.startLoading(state);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("returns cityName as Amsterdam", () => {
    const result = getters.cityName(state);
    const expectedResult = "Amsterdam";
    expect(result).toBe(expectedResult);
  });

  it("returns temperature as 20", () => {
    const result = getters.temperature(state);
    const expectedResult = 20;
    expect(result).toBe(expectedResult);
  });

  it("returns weather with data", () => {
    const result = getters.weather(state);
    const expectedResult = {
        data: [
          {
            valid_date: "2020-05-20",
          },
        ]
      };
    expect(result).toStrictEqual(expectedResult);
  });
});
