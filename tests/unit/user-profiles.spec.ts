import { shallowMount } from "@vue/test-utils";
import UserProfiles from "@/components/UserProfiles.vue";
import mockResume from "../mockResume.json";

describe("UserProfiles.vue", () => {
  const profiles = mockResume.basics.profiles;
  it("renders the user's name", () => {
    const wrapper = shallowMount(UserProfiles, { props: { profiles } });
    expect(wrapper.isVisible()).toBe(true);
  });
});
