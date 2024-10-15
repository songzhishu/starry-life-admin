<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 14:22:46
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:30:07
 * @FilePath: \starry-life-admin\src\App.vue
 * @Description: 
-->
<template>
  <el-container class="app-container">
    <el-aside width="200px" v-if="isLoggedIn">
      <el-menu default-active="/dashboard" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/dashboard">
          <el-icon>
            <DataLine />
          </el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon>
            <User />
          </el-icon>
          <span>Users</span>
        </el-menu-item>
        <el-menu-item index="/posts">
          <el-icon>
            <Document />
          </el-icon>
          <span>Posts</span>
        </el-menu-item>
        <el-menu-item index="/comments">
          <el-icon>
            <ChatLineRound />
          </el-icon>
          <span>Comments</span>
        </el-menu-item>
      </el-menu>
      <el-button @click="logout" type="danger" class="logout-btn">Logout</el-button>
    </el-aside>
    <el-container>
      <el-header>
        <h2>Blog Admin</h2>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { DataLine, User, Document, ChatLineRound } from '@element-plus/icons-vue'

const router = useRouter()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style>
.app-container {
  height: 100vh;
}

.el-aside {
  background-color: #545c64;
}

.el-menu {
  height: calc(100% - 50px);
}

.logout-btn {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>