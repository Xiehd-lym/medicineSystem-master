import Main from '@/views/Main.vue';

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录 - 医疗后台管理系统 '
    },
    component: () => import('@/views/login.vue')
};

export const registRouter = {
    path: '/regist',
    name: 'regist',
    meta: {
        title: '注册 - 医疗后台管理系统'
    },
    component: () => import('@/views/regist.vue')
};

export const registResult = {
    path: '/regist-result',
    name: 'regist-result',
    meta: {
        title: '注册结果 - 医疗后台管理系统'
    },
    component: () => import('@/views/regist-result.vue')
};

export const reset = {
    path: '/reset',
    name: 'reset',
    meta: {
        title: '重置密码 - 医疗后台管理系统'
    },
    component: () => import('@/views/reset.vue')
};

export const relateRouter = {
    path: '/relate',
    name: 'relate',
    meta: {
        title: '绑定账号 - 医疗后台管理系统 '
    },
    component: () => import('@/views/relate.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'change-pass', title: '修改密码', name: 'change_pass', component: () => import('@/views/change-pass/change-pass.vue') },
        { path: 'add', title: '添加', name: 'add', component: () => import('@/views/template/new-window/add.vue') },
        { path: 'edit', title: '编辑', name: 'edit', component: () => import('@/views/template/new-window/edit.vue') }
    ]
};

export const appRouter = [];

export const routers = [
    loginRouter,
    registRouter,
    registResult,
    reset,
    relateRouter,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page403
];
