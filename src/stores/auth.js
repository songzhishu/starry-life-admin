/*
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:31:06
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:31:16
 * @FilePath: \starry-life-admin\src\stores\auth.js
 * @Description:
 */
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    },
  },
})
