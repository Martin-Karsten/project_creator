import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const PasswordRequest = () => import('~/pages/auth/password/email').then(m => m.default || m)

const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const Projects = () => import('~/pages/project/create').then(m => m.default || m)

const Charts = () => import('~/pages/charts/charts').then(m => m.default || m)
const LineChart = () => import('~/pages/charts/lineChart').then(m => m.default || m)
const BarChart = () => import('~/pages/charts/barChart').then(m => m.default || m)

const routes = [
  { path: '/', name: 'welcome', component: Welcome },
  { path: '/home', name: 'home', component: Home },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordRequest },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword },
      { path: 'project', name: 'settings.project', component: SettingsPassword },
    ] },

    { path: '/charts', name: 'charts', component: Charts},
    { path: '/charts/lineChart', name: 'lineChart', component: LineChart},
    { path: '/charts/barChart', name: 'barChart', component: BarChart},

  {path: '/project',
   component: Projects,
   children: [
    //  { path: '', redirect: { name: 'project.create'} },
     { path: 'create', name: 'project.create', component: Projects},
     { path: ':id', name: 'project.view', component: Projects}
   ]
  }
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
