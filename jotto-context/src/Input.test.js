import React from "react";
import { shallow } from "enzyme";

import { findBTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders inpt box", () => {});
  });
  describe("word has been guessed", () => {
    test("renders omponent without error", () => {});
    test("does not render submit button", () => {});
  });
});

describe("update state", () => {});
