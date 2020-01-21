import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route } from 'vue-router';
import { getToken, setToken } from '@/plugins/local-storage';
import { refreshToken } from '@/apis/login';
import store, { StoreMutations } from '@/store';
const whiteList = ['/login'];

router.beforeEach((to: Route, from: Route, next: any) => {
    NProgress.start();
    const token = getToken();
    if (token) {
        refreshToken(token).then((o: any) => {
            const valid = typeof o.data === 'string';
            setToken(o.data);
            if (valid) {
                store.commit(StoreMutations.SetLogin, true);
                if (to.path === '/login') {
                    next({ path: '/' });
                    NProgress.done();
                } else {
                    next();
                }
            } else {
                store.commit(StoreMutations.SetLogin, false);
                if (whiteList.indexOf(to.path) !== -1) {
                    next();
                } else {
                    next(`/login?redirect=${to.path}`);
                    NProgress.done();
                }
            }
        }).catch(() => {
            store.commit(StoreMutations.SetLogin, false);
            if (whiteList.indexOf(to.path) !== -1) {
                next();
            } else {
                next(`/login?redirect=${to.path}`);
                NProgress.done();
            }
        });
    } else {
        store.commit(StoreMutations.SetLogin, false);
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});
