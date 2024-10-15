<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:34:32
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:34:40
 * @FilePath: \starry-life-admin\src\views\Login.vue
 * @Description: 
-->
<template>
    <div class="login-container">
        <el-card class="login-card">
            <template #header>
                <h3 class="login-title">Login</h3>
            </template>
            <el-form :model="form" @submit.prevent="onSubmit">
                <el-form-item label="Username">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">Login</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
    username: '',
    password: ''
})

const onSubmit = () => {
    // Here you would typically make an API call to verify credentials
    // For this example, we'll just simulate a successful login
    authStore.login()
    router.push('/dashboard')
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    width: 400px;
}

.login-title {
    text-align: center;
}
</style>