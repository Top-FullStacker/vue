import { loadLanguage } from '@/plugins/local-storage';

export interface RootState {
    tables: any;
    current: any;
    settings: any;
    lang: any;
    topMessage: any;
    menu: boolean;
    login: boolean;
    currentTable:number;
    sum:number;
    role:any;
    select:any;


}

export const initialState: RootState = {
    tables:[
        { id:1,name:'table 01', users:4,status:'busy',disabled:true},
        { id:2,name:'table 02', users:5,status:'normal',disabled:true},
        { id:3,name:'table 03', users:3,status:'busy',disabled:true},
        { id:4,name:'table 04', users:3,status:'busy',disabled:true},
        { id:5,name:'table 05', users:3,status:'normal',disabled:true},
        { id:6,name:'table 06', users:3,status:'busy',disabled:true},

    ],
    current:[
        {talbe:'1',data:[
                {id:1,check:false,disabled:true,pay:true,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                         {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                         {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                         {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                        ],total:13
                },
                {id:2,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'acira cc ',dish:[
                                            {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                            {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                            {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                            {name:'dish 4 meat soup', quantity: 1,image:'6.jpg',price:4},
                                            {name:'dish 5 meat soup', quantity: 3,image:'4.jpg',price:5}
                                            ],total:26
                },
                {id:3,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'william james',dish:[
                                            {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                            {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                            {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                            {name:'dish 4 meat soup', quantity: 3,image:'4.jpg',price:4}
                                            ],total:19
                },
                {id:4,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'hanson hunter',dish:[
                                            {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                            {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                            {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                            ],total:13
                }
        ]},
        {talbe:'2',data:[
            {id:1,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                    {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                    {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                    {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                    ],total:13
            },
            {id:2,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'acira cc ',    dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 1,image:'6.jpg',price:4},
                                        {name:'dish 5 meat soup', quantity: 3,image:'4.jpg',price:5}
                                        ],total:26
            },
            {id:3,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'william james',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 3,image:'4.jpg',price:4}
                                        ],total:19
            }
            ]},
        {talbe:'3',data:[
            {id:1,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                    {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                    {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                    {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                    ],total:13
            },
            {id:2,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'acira cc ',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 1,image:'6.jpg',price:4},
                                        {name:'dish 5 meat soup', quantity: 3,image:'4.jpg',price:5}
                                        ],total:26
            }
        ]},
        {talbe:'4',data:[
            {id:1,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                    {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                    {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                    {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                    ],total:13
            },
            {id:2,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'acira cc ',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 1,image:'6.jpg',price:4},
                                        {name:'dish 5 meat soup', quantity: 3,image:'4.jpg',price:5}
                                        ],total:26
            },
            {id:3,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'william james',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 3,image:'4.jpg',price:4}
                                        ],total:19
            },
            {id:4,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'hanson hunter',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                        ],total:13
            },
            {id:5,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'william james',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 3,image:'4.jpg',price:4}
                                        ],total:19
            },
            {id:6,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'hanson hunter',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                        ],total:13
            }
        ]},
        {talbe:'5',data:[
            {id:1,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                    {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                    {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                    {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                    ],total:13
            },
            {id:2,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'acira cc ',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 1,image:'6.jpg',price:4},
                                        {name:'dish 5 meat soup', quantity: 3,image:'4.jpg',price:5}
                                        ],total:26
            },
            {id:3,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'william james',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 1,image:'5.jpg',price:3},
                                        {name:'dish 4 meat soup', quantity: 3,image:'4.jpg',price:4}
                                        ],total:19
            },
            {id:4,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'hanson hunter',dish:[
                                        {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                        {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                        {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                        ],total:13
            }
        ]},
        {talbe:'6',data:[
            {id:1,check:false,disabled:true,pay:false,image:'https://cdn.vuetifyjs.com/images/john.jpg',name:'wesley brower',dish:[
                                    {name:'dish 1 meat soup', quantity: 2,image:'2.jpg',price:1},
                                    {name:'dish 2 meat soup', quantity: 1,image:'3.jpg',price:2},
                                    {name:'dish 3 meat soup', quantity: 3,image:'4.jpg',price:3}
                                    ],total:13
            }
        ]},

    
    ],
    settings: {},
    lang: loadLanguage(),
    topMessage: { visible: false, text: '' },
    menu: true,
    login: false,
    currentTable :0,
    sum:0,
    role:'PAY_ALL',
    select:[]
};
