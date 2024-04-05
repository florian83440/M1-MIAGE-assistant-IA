<script setup>
import Menu from './components/Menu.vue'
import Main from "@/components/Main.vue";
</script>

<template>
  <div class="columns">
    <div class="column is-2">
      <Menu/>
    </div>
    <div class="column is-10">
      <Main/>
    </div>
  </div>
</template>
