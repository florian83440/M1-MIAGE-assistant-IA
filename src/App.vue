<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="columns">
    <div class="column is-2">
      <Menu/>
    </div>
    <div class="column is-10">
      <router-view/>
    </div>
  </div>
</template>
