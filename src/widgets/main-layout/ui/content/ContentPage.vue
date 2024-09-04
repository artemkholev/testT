<template>
    <SidebarElem>
      <div class="sidebar">
          <ul class="navigation">
              <li><router-link class="link" to="/">Преимущества Tele2</router-link></li>
              <li><router-link class="link" to="/1">Тарифы</router-link></li>
              <li><router-link class="link" to="/2">Акции и спецпредложения</router-link></li>
              <li><router-link class="link" to="/3">Промотариф Tele2</router-link></li>
              <li><router-link class="link" to="/4">Технология eSIM</router-link></li>
              <li><router-link class="link" to="/5">Подключение нового абонента</router-link></li>
          </ul>
      </div>
    </SidebarElem>
  
    <div class="content">
        <!-- {{ $route.meta.title }} -->
        <!-- <v-divider v-if="$route.meta.title"></v-divider> -->
        <slot></slot>
    </div>
  </template>
  
  <script setup lang="js">
import { useSidebarStore } from '@/shared/stores/sidebar';

import {SidebarElem} from '@/shared/ui'

 //sidebar
const sidebarStore = useSidebarStore();
const { toggleSidebar } = sidebarStore
  </script>
  
  <style src="./ContentPage.style.scss" lang="scss" scoped />