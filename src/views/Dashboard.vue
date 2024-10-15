<!--
 * @Author: lihailong lihailong@hdkj123.com
 * @Date: 2024-10-15 15:32:38
 * @LastEditors: lihailong lihailong@hdkj123.com
 * @LastEditTime: 2024-10-15 15:35:00
 * @FilePath: \starry-life-admin\src\views\Dashboard.vue
 * @Description: 
-->
<template>
    <div>
        <h1>Dashboard</h1>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Total Users</span>
                        </div>
                    </template>
                    <div class="card-content">
                        1000
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Total Posts</span>
                        </div>
                    </template>
                    <div class="card-content">
                        500
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Total Comments</span>
                        </div>
                    </template>
                    <div class="card-content">
                        2000
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
// Dashboard component logic
</script>

<style scoped>
.box-card {
    margin-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-content {
    font-size: 24px;
    font-weight: bold;
}
</style>