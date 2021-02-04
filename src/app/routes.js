import Loadable from 'react-loadable';
import Loading from './Loading';

const routes = [
    {
        path: '/',
        component: Loadable({
            loader: () => import('../modules/home'),
            loading: Loading
        }),
        exact: true,
        title: '首页',
        icon: 'home',
        hideBreadcrumb: true
    }, {
        title: '个人中心',
        path: '/profile',
        component: Loadable({
            loader: () => import('../modules/profile'),
            loading: Loading
        }),
        hideOnMenu: true
    }, {
        path: '/designer',
        title: '设计器',
        icon: 'menu-unfold',
        component: Loadable({
            loader: () => import('../modules/designerBug'),
            loading: Loading
        })
    }, {
        path: '/executor',
        title: '执行器',
        icon: 'menu-unfold',
        component: Loadable({
            loader: () => import('../modules/executorBug'),
            loading: Loading
        })
    }, {
        path: '/oc',
        title: '管控平台',
        icon: 'menu-unfold',
        component: Loadable({
            loader: () => import('../modules/ocBug'),
            loading: Loading
        })
    }, {
        path: '/user',
        title: '系统用户',
        icon: 'team',
        component: Loadable({
            loader: () => import('../modules/user'),
            loading: Loading
        })
    }
];

export default routes;
