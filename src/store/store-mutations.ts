import { RootState } from './root-state';
import { saveLanguage } from '@/plugins/local-storage';

export const enum StoreMutations {
    'StoreSetting' = 'storeSetting',
    'StoreGraphData' = 'storeGraphData',
    'StoreRabbitConfig' = 'storeRabbitConfig',
    'StoreLanguage' = 'storeLanguage',
    'StoreTopMessage' = 'storeTopMessage',
    'SetMenu' = 'setMenu',
    'SetLogin' = 'setLogin',
    'SetCurrent' = 'setCurrent',
    'SetRole' = 'setRole',
    'SetComplete' = 'setComplete',
    'SetSelect' = 'setSelect',
    'SetDisable' = 'setDisable',
    'SetCheck' = 'setCheck'
}

export default {
    storeSetting(state: RootState, settings: any) {
        state.settings = settings;
    },

    storeLanguage(state: RootState, lang: any) {
        state.lang = lang;
        saveLanguage(lang);
    },

    storeTopMessage(state: RootState, top: any) {
        state.topMessage = top;
    },

    setMenu(state: RootState, val: boolean | undefined) {
        if (val === undefined || null) {
            state.menu = !state.menu;
        }
        else {
            state.menu = val;
        }
    },

    setLogin(state: RootState, val: boolean | undefined) {
        if (val === undefined || null) {
            state.login = false;
        }
        else {
            state.login = val;
        }
    },
    setCurrent(state: RootState,val:number | undefined){
        if (val === undefined || null) {
            state.currentTable = 0;
        }
        else {
            state.currentTable = val;
        }
    },
    setRole(state: RootState,val:string | undefined){
        state.role = val;
    },
    setComplete(state: RootState,val:number){
        var id = val;
        state.tables[id].disabled = false;
    },
    setCheck(state:RootState,val:number){
        state.select.push(val);
        var i;
        for(i=0;i<state.current[state.currentTable].data.length;i++){
            if(state.current[state.currentTable].data[i].id == val){
                state.current[state.currentTable].data[i].check = true;
            }
        }
    },
    setSelect(state: RootState){
        var i;

        for(i = 0; i < state.current.length; i++){console.log("dfdfdf|");
            state.current[state.currentTable].data[i].disabled = false;
        }
    },
    setDisable(state: RootState){
        var i;

        for(i = 0; i < state.current.length; i++){
            state.current[state.currentTable].data[i].disabled = true;
            state.current[state.currentTable].data[i].check = true;
        }
    }
};
