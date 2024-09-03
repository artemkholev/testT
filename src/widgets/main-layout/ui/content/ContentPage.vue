<template>
    <sidebar-elem>
      <div class="sidebar">
        
      </div>
    </sidebar-elem>
  
    <div class="content">
        <!-- {{ $route.meta.title }} -->
        <!-- <v-divider v-if="$route.meta.title"></v-divider> -->
        <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
 
  </script>
  
  <style src="./ContentPage.style.scss" lang="scss" scoped />