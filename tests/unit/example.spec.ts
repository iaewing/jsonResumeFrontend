import { shallowMount } from "@vue/test-utils";
import WorkExperience from "@/components/WorkExperience.vue";

describe("WorkExperience.vue", () => {
  it("renders props.company when passed", () => {
    const company = "Vehikl";
    const wrapper = shallowMount(WorkExperience, {
      props: { company },
    });
    expect(wrapper.text()).toMatch(company);
  });
});
