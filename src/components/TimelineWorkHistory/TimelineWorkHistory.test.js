import React from "react";
import { shallow } from "enzyme";
import TimelineWorkHistory from "./TimelineWorkHistory.js";

it("should render without crashing", () => {
  const component = shallow(<TimelineWorkHistory />);
  expect(component.length).toBe(1);
});
