import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

const setup = () => {
  return mount(<App />);
};

test("renders app component", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
