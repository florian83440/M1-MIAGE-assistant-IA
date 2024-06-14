<!-- ChatBar.vue -->
<template>
  <div class="mainPrint" v-show="messages.length > 0">
    <div v-for="message in messages" :key="index"style="text-align: left; width: 100%;">
      {{message.date}}<span style="font-weight: bold;"> You : </span>{{message.prompt}}
      <br>
      {{message.date}}<span style="font-weight: bold;"> MIAGEGPT : </span>{{message.response}}
      <hr style="margin: 0;">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.mainPrint{
  width: 74%;
}
</style>
