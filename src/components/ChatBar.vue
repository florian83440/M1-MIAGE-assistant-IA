<template>
  <div class="mainPrint" ref="chatContainer" v-show="messages.length > 0">
    <div v-for="message in messages" :key="message.date" style="text-align: left; width: 100%;">
      <div style="text-align: center">{{ message.date }}</div>
      <div style="text-align: right"><span style="font-weight: bold;"> You : </span>{{ message.prompt }}</div>
      <br>
      <div style="text-align: left"><span style="font-weight: bold;"> MIAGEGPT : </span>{{ message.response }}</div>
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
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      const container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
    }
  }
};
</script>