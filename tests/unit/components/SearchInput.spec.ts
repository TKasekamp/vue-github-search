import { shallowMount, createLocalVue } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('SearchInput.vue', () => {
  const createWrapper = (options: object) => shallowMount(SearchInput, {
    localVue,
    vuetify: new Vuetify(),
    ...options,
  });

  describe('when loading true', () => {
    it('is disabled and loading', () => {
      const wrapper = createWrapper({
        propsData: { loading: true },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
