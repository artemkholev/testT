<template>
  <component :is="$route.meta.layout || 'div'" v-cloak>
    <router-view />
  </component>
</template>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>