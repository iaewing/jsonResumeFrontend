import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders the application title", () => {
    const wrapper = shallowMount(App);
    const appTitle = wrapper.find('[aria-label="Application Title"]');
    expect(appTitle.exists()).toBe(true);
  });
});
