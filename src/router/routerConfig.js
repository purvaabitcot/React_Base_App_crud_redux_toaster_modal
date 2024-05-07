import { ROUTES } from 'utils/common/constant/constant'
import { PrivateLayout, PublicLayout } from './routerLayout'
import Login from 'pages/Login'
import Users from 'pages/Users'
import AddUsers from 'pages/Users/AddUsers'
import ViewUser from 'pages/Users/ViewUser'
import EditUser from 'pages/Users/EditUser'

export const publicRoutes = [
  {
    key: 'login',
    path: ROUTES.LOGIN_PATH,
    component: Login,
    layout: PublicLayout
  }
]

export const privateRoutes = [
  {
    key: 'users',
    path: ROUTES.USERS_PATH,
    component: Users,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'addUsers',
    path: ROUTES.ADD_USERS_PATH,
    component: AddUsers,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'viewUsers',
    path: ROUTES.VIEW_USER_PATH,
    component: ViewUser,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'updateUser',
    path: ROUTES.UPDATE_USER_PATH,
    component: EditUser,
    exact: true,
    layout: PrivateLayout
  },
]