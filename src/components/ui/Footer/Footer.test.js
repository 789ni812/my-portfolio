import { findByTestAttr } from "../../../Utils/testUtils";
import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<Footer />);
});

it("renders Get in touch section", () => {
  const component = findByTestAttr(wrapper, "dt-getInTouch");
  expect(component.length).toBe(1);
});
