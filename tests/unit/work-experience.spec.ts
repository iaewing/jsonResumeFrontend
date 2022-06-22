import { shallowMount } from "@vue/test-utils";
import WorkExperience from "@/components/WorkExperience.vue";
import mockResume from "../mockResume.json";

describe("WorkExperience.vue", () => {
  const company = mockResume.work[0];
  it("does not display the company prop by default", () => {
    const wrapper = shallowMount(WorkExperience, {
      props: { company },
    });
    const companyTest = wrapper.find('[aria-label="Company Name"]');
    expect(companyTest.exists()).toBe(false);
  });

  it("can toggle whether the company details are displayed", async () => {
    const wrapper = shallowMount(WorkExperience, {
      props: { company },
    });
    expect(wrapper.find('[aria-label="Company Name"]').exists()).toBe(false);
    const toggle = wrapper.find("button");
    await toggle.trigger("click");
    expect(wrapper.text()).toContain(company.position);
    await toggle.trigger("click");
    expect(wrapper.text()).not.toContain(company.position);
  });
});
