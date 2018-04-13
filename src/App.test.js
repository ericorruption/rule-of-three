import React from "react";
import App from "./App";

import { create } from "react-test-renderer";

const app = create(<App />);

it("renders without crashing", () => expect(app.toJSON()).toMatchSnapshot());

it("behaves as expected", () => {
  const expected = {
    a: 125,
    b: 100,
    c: 100,
    result: 80
  };
  const instance = app.getInstance();

  // TODO test event handlers instead?
  instance.handleChangeText("a", 125);
  instance.handleChangeText("b", 100);
  instance.handleChangeText("c", 100);

  expect(instance.state).toMatchObject(expected);
});
