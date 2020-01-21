import { StoreMutations } from '@/store/store-mutations';
export const enum StoreActions {
    'LoadSettings' = 'getSettings',
    'StoreGraphData' = 'storeGraphData',
    'StoreRabbitConfig' = 'storeRabbitConfig',
    'SaveSettings' = 'saveSettings',
    'StoreLanguage' = 'storeLanguage',
    'StoreTopMessage' = 'storeTopMessage',
    'SetCurrentTable' = 'setCurrentTable',
    'SetRole' = 'setRole',
    'SetComplete' = 'setComplete',
    'SetSelect' = 'setSelect',
    'SetDisable' = 'setDisable',
    'SetCheck' = 'setCheck'
}

export default {
    storeLanguage({ commit, dispatch }, lang: any) {
        commit(StoreMutations.StoreLanguage, lang);
    },

    storeTopMessage({ commit, dispatch }, top: any) {
        commit(StoreMutations.StoreTopMessage, top);
    },
    setCurrentTable({ commit,dispatch }, val: number){
        commit(StoreMutations.SetCurrent,val);
    },
    setRole({ commit,dispatch}, val:string){
        commit(StoreMutations.SetRole,val);
    },
    setComplete({ commit,dispatch},val:number){
        commit(StoreMutations.SetComplete,val);
    },
    setSelect({ commit,dispatch}){
    
        commit(StoreMutations.SetSelect);
    },
    setDisable({ commit,dispatch}){
    
        commit(StoreMutations.SetDisable);
    },
    setCheck({ commit,dispatch},val:number){
        commit(StoreMutations.SetCheck,val);
    }
};
