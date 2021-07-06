import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17-updated";

import App from "./App";
import { findByTestAttr } from "./test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return mount(<App />);
};

test("renders app component", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
