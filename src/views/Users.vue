<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:33:14
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:33:26
 * @FilePath: \starry-life-admin\src\views\Users.vue
 * @Description: 
-->
<template>
    <div>
        <h1>Users</h1>
        <el-table :data="users" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="email" label="Email" />
        </el-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
])
</script>