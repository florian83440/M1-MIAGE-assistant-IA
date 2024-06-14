<template>
  <div class="field is-grouped entryText">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="Type your question..." v-model="prompt" @keyup.enter="sendMessage">
    </p>
    <p class="control">
      <button class="button" style="background-color: var(--main-color); color: white" @click="sendMessage">
        Send
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prompt: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.prompt !== '') {
        this.$emit('send-message', this.prompt);
        this.prompt = '';
      }
    }
  }
};
</script>