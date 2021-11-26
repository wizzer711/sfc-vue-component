import { shallowMount } from "@vue/test-utils";
import FeaturesCentered2x2Grid from "../FeaturesCentered2x2Grid.vue";

describe("Features Centered", () => {
  it("renders preHeading when passed", () => {
    const preHeading = "Pre Heading";
    const wrapper = shallowMount(FeaturesCentered2x2Grid, {
      propsData: { preHeading: "Pre Heading" }
    });
    expect(wrapper.text()).toMatch(preHeading);
  });
  it("renders heading when passed", () => {
    const heading = "Heading";
    const wrapper = shallowMount(FeaturesCentered2x2Grid, {
      propsData: { heading: "Heading" }
    });
    expect(wrapper.text()).toMatch(heading);
  });
  it("renders description when passed", () => {
    const description = "Description";
    const wrapper = shallowMount(FeaturesCentered2x2Grid, {
      propsData: { description: "Description" }
    });
    expect(wrapper.text()).toMatch(description);
  });
});
