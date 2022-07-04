import { mount } from "@vue/test-utils";
import UserLocation from "@/components/UserLocation.vue";
import mockResume from "../mockResume.json";
import { Address } from "@/types";

describe("UserLocation.vue", () => {
  const location = mockResume.basics.location;
  it("renders the location", () => {
    const wrapper = mount(UserLocation, { props: { location } });
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.text()).toEqual(location);
    let key: keyof Address;
    for (key in location) {
      expect(wrapper.text()).toContain(location[key]);
    }
  });
});
