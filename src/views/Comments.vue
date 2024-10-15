<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:34:10
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:34:19
 * @FilePath: \starry-life-admin\src\views\Comments.vue
 * @Description: 
-->
<template>
    <div>
        <h1>Comments</h1>
        <el-table :data="comments" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="content" label="Content" width="180" />
            <el-table-column prop="author" label="Author" />
        </el-table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const comments = ref([
    { id: 1, content: 'Great post!', author: 'John Doe' },
    { id: 2, content: 'I agree!', author: 'Jane Doe' },
    { id: 3, content: 'Thanks for sharing', author: 'Bob Smith' },
])
</script>