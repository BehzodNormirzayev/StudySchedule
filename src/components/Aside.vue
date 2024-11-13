<template>
    <div class="flex  justify-center p-2">
        <div class="flex items-center gap-2"> <img src="../assets/logo.jpg" alt="" height="50" width="50">
            <span class="font-bold"> Study Name</span>
        </div>
    </div>
    
    <a-menu mode="inline" default-selected-keys="['1']">
        <a-menu-item key="1">
            <ProfileOutlined />
            <span>Уроки</span>
            <a-badge count="6" style="margin-left: 8px" />
        </a-menu-item>

        <a-menu-item key="2">
            <CheckSquareOutlined />
            <span>Задачи</span>
            <a-badge count="9" style="margin-left: 8px; background-color: #52c41a" />
            <a-badge count="407" style="margin-left: 4px; background-color: #f5222d" />
        </a-menu-item>

        <a-menu-item key="3" :class="{ 'ant-menu-item-selected': $route.path === '/client' }">
            <UserOutlined />
            <span>Клиенты</span>
        </a-menu-item>

        <a-menu-item key="4">
            <TeamOutlined />
            <span>Группы</span>
        </a-menu-item>

        <a-menu-item key="5">
            <UsergroupAddOutlined />
            <span>Педагоги</span>
        </a-menu-item>

        <a-menu-item key="6">
            <PhoneOutlined />
            <span>Звонки</span>
        </a-menu-item>

        <a-menu-item key="7" disabled>
            <LockOutlined />
            <span>Доступ в CRM</span>
        </a-menu-item>
    </a-menu>
</template>

<script setup>
import { ref } from 'vue';

import {
    ProfileOutlined,
    CheckSquareOutlined,
    UserOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    PhoneOutlined,
    LockOutlined
} from '@ant-design/icons-vue';

</script>

<style scoped>
.site-layout-background {
    background: #fff;
}
</style>