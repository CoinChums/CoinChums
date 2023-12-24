import * as React from "react";
import "react-native";
import renderer from "react-test-renderer";
import {Home} from "../src/screens";

describe("App test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
