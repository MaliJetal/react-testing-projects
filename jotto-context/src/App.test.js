import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17-updated";

import App from "./App";
import { findByTestAttr } from "./test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders app component", () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
