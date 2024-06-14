<template>
  <div class="mainContent">
    <div class="screenPrint">
      <ChatBar :messages="messages"/>
    </div>
    <ChatPrompt @send-message="sendRequest"/>
  </div>
</template>

<script>
import ChatPrompt from './ChatPrompt.vue';
import ChatBar from './ChatBar.vue';
import axios from 'axios';

export default {
  components: {
    ChatPrompt,
    ChatBar
  },
  data() {
    return {
      messages: [],
      endpointURL: 'http://localhost:3001/chat'
    };
  },
  mounted() {
    this.getChats();
  },
  methods: {
    async getChats() {
      try {
        const response = await axios.get('http://localhost:3001/chats');
        this.messages = response.data.map(chat => {
          return {
            date: new Date(chat.date).toLocaleString(),
            prompt: chat.prompt,
            response: chat.response
          };
        });
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    },
    async sendRequest(prompt) {
      if (prompt === '') return;

      const promptData = new FormData();
      promptData.append('prompt', prompt);
      promptData.append('max_tokens', 1);

      try {
        const response = await fetch(this.endpointURL, {
          method: 'POST',
          body: promptData
        });

        const data = await response.json();
        console.log(data);

        let messageToShow = data.choices[0].message.content;

        const userMessage = {
          date: new Date().toLocaleString(),
          prompt: `${prompt}`,
          response: `${messageToShow}`
        };

        this.messages.push(userMessage);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>