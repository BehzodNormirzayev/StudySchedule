<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/Headertutor.vue';
import AsideComponent from '@/components/Asidetutor.vue';



const headerStyle = {
    backgroundColor: '#ffffff',
};
const contentStyle = {
    backgroundColor: '#',
};
const siderStyle = {
    width:'300px',
    backgroundColor: '#ffffff',
};

</script>

<template>
    <a-layout style="height: 100vh;">
        <a-layout-sider :style="siderStyle" class="aside-block">
            <aside-component />
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="headerStyle">
                <header-component />
            </a-layout-header>
            <a-layout-content :style="contentStyle" class="overflow-auto p-4">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>



</template>

<style scoped>
:deep(.ant-layout .ant-layout-header) {
    height: 72px;
    line-height: 72px;
}

.aside-block {
    width: 300px;

    @media (max-width:1024px) {
        width: 250px;
    }

}
</style>
