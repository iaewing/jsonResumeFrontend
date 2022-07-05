import { mount } from "@vue/test-utils";
import UserLocation from "@/components/UserLocation.vue";
import mockResume from "../mockResume.json";
import { Address } from "@/types";

describe("UserLocation.vue", () => {
  const location = mockResume.basics.location;
  it("renders the full location", () => {
    const wrapper = mount(UserLocation, { props: { location } });
    expect(wrapper.isVisible()).toBe(true);
    Object.values(location).forEach((value) => {
      expect(wrapper.text()).toContain(value);
    });
  });
});
