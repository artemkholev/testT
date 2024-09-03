<template>
    <div class="sidebar-backdrop" @click="toggleSidebar" v-if="isOpenSidebar"></div>
    <transition name="slide">
        <div v-if="isOpenSidebar"
                class="sidebar-panel">
            <slot></slot>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/shared/stores/sidebar';
import { storeToRefs } from 'pinia';

//sidebar
const sidebarStore = useSidebarStore();
const { isOpenSidebar } = storeToRefs(sidebarStore);
const { toggleSidebar } = sidebarStore

defineOptions({
    name: 'sidebar-elem',
})
</script>

<style src="./SidebarElem.style.scss" lang="scss" scoped />