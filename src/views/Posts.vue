<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:33:44
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:33:52
 * @FilePath: \starry-life-admin\src\views\Posts.vue
 * @Description: 
-->
<template>
    <div>
        <h1>Posts</h1>
        <el-table :data="posts" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="title" label="Title" width="180" />
            <el-table-column prop="author" label="Author" />
        </el-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
    { id: 1, title: 'First Post', author: 'John Doe' },
    { id: 2, title: 'Second Post', author: 'Jane Doe' },
    { id: 3, title: 'Third Post', author: 'Bob Smith' },
])
</script>