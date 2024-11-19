<template>
    <div class="flex  justify-center p-2">
        <div class="flex items-center gap-2"> <img src="../assets/logo.jpg" alt="" height="50" width="50">
            <span class="font-bold"> Study Name here</span>
        </div>
    </div>

    <a-menu mode="inline" default-selected-keys="['1']">

        <router-link to="lessons">
            <a-menu-item key="1" :class="{ 'ant-menu-item-selected': $route.path === '/dashboard/lessons' }">
                <ProfileOutlined />
                <span>Уроки</span>
                <a-badge count="6" style="margin-left: 8px" />
            </a-menu-item>
        </router-link>

        <router-link to="classes">
            <a-menu-item key="2" :class="{ 'ant-menu-item-selected': $route.path === '/dashboard/classes' }">
                <CheckSquareOutlined />
                <span>Классы</span>
            </a-menu-item>
        </router-link>

        <router-link to="messages">
            <a-menu-item key="3" :class="{ 'ant-menu-item-selected': $route.path === '/dashboard/messages' }">
                <UserOutlined />
                <span>Сообшение</span>
            </a-menu-item>
        </router-link>

        <RouterLink to="teachers">
            <a-menu-item key="4" :class="{ 'ant-menu-item-selected': $route.path === '/dashboard/teachers' }">
                <UsergroupAddOutlined />
                <span>Педагоги</span>
            </a-menu-item>
        </RouterLink>


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