<template>
    <div class="flex  justify-center p-2">
        <div class="flex items-center gap-2"> <img src="../assets/logo.jpg" alt="" height="50" width="50">
            <span class="font-bold"> Study Name here</span>
        </div>
    </div>

    <a-menu mode="inline" default-selected-keys="['1']">

        <router-link to="sheduletutor">
            <a-menu-item key="1" :class="{ 'ant-menu-item-selected': $route.path === '/tutor/sheduletutor' }">
                <ProfileOutlined />
                <span>Расписания</span>
                <a-badge count="6" style="margin-left: 8px" />
            </a-menu-item>
        </router-link>

       

       
        <router-link to="messagestutor">
            <a-menu-item key="3" :class="{ 'ant-menu-item-selected': $route.path === '/tutor/messagestutor' }">
                <UserOutlined />
                <span>Сообшение</span>
            </a-menu-item>
        </router-link>

        <RouterLink to="profile">
            <a-menu-item key="4" :class="{ 'ant-menu-item-selected': $route.path === '/tutor/profile' }">
                <UsergroupAddOutlined />
                <span>Мой профил</span>
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