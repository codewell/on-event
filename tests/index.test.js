const onEvent = require("../lib");

const add = (event, a, b) => {
  return event + a + b;
};

test("Add some numbers", () => {
  expect(onEvent(add, 3, 7)(5)).toBe(15);
});
