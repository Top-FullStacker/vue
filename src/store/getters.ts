import { RootState } from '@/store/root-state';
export default {
    login: (state: RootState) => state.login,
    lang: (state: RootState) => state.lang,
    menu: (state: RootState) => state.menu,
    table: (state: RootState) => state.currentTable,
    tablelist: (state: RootState) => state.tables,
    userlist: (state: RootState) => state.current,
};
