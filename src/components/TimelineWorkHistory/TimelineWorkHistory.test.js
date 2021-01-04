import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../Utils/testUtils";
import TimelineWorkHistory from "./TimelineWorkHistory.js";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<TimelineWorkHistory />);
});
it("should render without crashing", () => {
  const component = wrapper;
  expect(component.length).toBe(1);
});

it("Renders demo of Timeline", () => {
  const component = findByTestAttr(wrapper, "component-timelineDemo");
  expect(component.length).toBe(1);
});
