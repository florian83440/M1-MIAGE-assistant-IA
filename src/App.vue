<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="columns">
      <Menu/>
    <div class="column is-12">
      <router-view/>
    </div>
  </div>
</template>
