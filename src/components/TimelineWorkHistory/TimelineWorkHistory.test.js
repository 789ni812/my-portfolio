const { shallow } = require("enzyme");

it("should render without crashing", () => {
  shallow(<TimelineWorkHistory />);
});
