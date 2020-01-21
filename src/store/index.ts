export * from '@/store/root-state';
export { StoreActions } from '@/store/store-actions';
export { StoreMutations } from '@/store/store-mutations';

import Vue from 'vue';
import Vuex from 'vuex';

import { RootState, initialState } from '@/store/root-state';
import actions from '@/store/store-actions';
import mutations from '@/store/store-mutations';
import getters from '@/store/getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: initialState,
    getters,
    mutations,
    actions,
});

export default store;
