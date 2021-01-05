import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./Utils/testUtils.js";

import App from "./App";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<App />);
});

it("Should render without crashing", () => {
  const component = wrapper;
  expect(component.length).toBe(1);
});

it("TimelineWorkHistory component renders", () => {
  const component = findByTestAttr(wrapper, "component-timelineWorkHistory");
  expect(component.length).toBe(1);
});

it("Header component renders", () => {
  const component = findByTestAttr(wrapper, "component-Header");
  expect(component.length).toBe(1);
});
