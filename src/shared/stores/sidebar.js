import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpenSidebar = ref(false);

  //methods
  const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
  };

  return { isOpenSidebar, toggleSidebar };
});