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

describe("Employment entries", () => {
  it("Renders Currently available for work", () => {
    const component = findByTestAttr(wrapper, "dt-AvailableForWork");
    expect(component.length).toBe(1);
  });

  it("Renders Panlogic", () => {
    const component = findByTestAttr(wrapper, "dt-Panlogic");
    expect(component.length).toBe(1);
  });

  it("Renders Ensemble", () => {
    const component = findByTestAttr(wrapper, "dt-Ensemble");
    expect(component.length).toBe(1);
  });

  it("Renders Tictrac", () => {
    const component = findByTestAttr(wrapper, "dt-Tictrac");
    expect(component.length).toBe(1);
  });

  it("Renders Electric Word", () => {
    const component = findByTestAttr(wrapper, "dt-ElectricWord");
    expect(component.length).toBe(1);
  });
  it("Renders AVG", () => {
    const component = findByTestAttr(wrapper, "dt-AVG");
    expect(component.length).toBe(1);
  });

  it("Renders LGT", () => {
    const component = findByTestAttr(wrapper, "dt-LGT");
    expect(component.length).toBe(1);
  });

  it("Renders Moneynet", () => {
    const component = findByTestAttr(wrapper, "dt-Moneynet");
    expect(component.length).toBe(1);
  });

  it("Renders Budget Direct", () => {
    const component = findByTestAttr(wrapper, "dt-BudgetDirect");
    expect(component.length).toBe(1);
  });

  it("Renders BBC", () => {
    const component = findByTestAttr(wrapper, "dt-BBC");
    expect(component.length).toBe(1);
  });

  it("Renders MinistryOfSound", () => {
    const component = findByTestAttr(wrapper, "dt-MinistryOfSound");
    expect(component.length).toBe(1);
  });

  it("Renders Unreal", () => {
    const component = findByTestAttr(wrapper, "dt-Unreal");
    expect(component.length).toBe(1);
  });

  it("Renders self Employed", () => {
    const component = findByTestAttr(wrapper, "dt-selfEmployed");
    expect(component.length).toBe(1);
  });

  it("Renders Sound Engineer", () => {
    const component = findByTestAttr(wrapper, "dt-soundEngineer");
    expect(component.length).toBe(1);
  });
});
