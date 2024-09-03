<template>
    <SidebarElem>
      <div class="sidebar">
        
      </div>
    </SidebarElem>
  
    <div class="content">
        <!-- {{ $route.meta.title }} -->
        <!-- <v-divider v-if="$route.meta.title"></v-divider> -->
        <slot></slot>
    </div>
  </template>
  
  <script setup lang="js">
 import {SidebarElem} from '@/shared/ui'
  </script>
  
  <style src="./ContentPage.style.scss" lang="scss" scoped />