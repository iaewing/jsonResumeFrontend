import { shallowMount } from "@vue/test-utils";
import UserBasics from "@/components/UserBasics.vue";
import mockResume from "../mockResume.json";

describe("UserBasics.vue", () => {
  const user = mockResume.basics;
  it("renders the user's name", () => {
    const wrapper = shallowMount(UserBasics, { props: { user } });
    expect(wrapper.text()).toContain(user.name);
  });
});
