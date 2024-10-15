/*
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 14:22:46
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:31:52
 * @FilePath: \starry-life-admin\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Posts from '../views/Posts.vue'
import Comments from '../views/Comments.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
