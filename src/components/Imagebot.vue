<template>
  <div class="columns">
    <div class="column is-7">
      <div id="generatedImage">
        <img v-if="generatedImage" :src="generatedImage" alt="Generated Image" />
      </div>
    </div>
    <div id="imagePromptcontainer" class="column is-5">
      <imagePrompt @send-message="sendRequest"/>
    </div>
  </div>
</template>

<script>
import imagePrompt from "@/components/ImagePrompt.vue";
import axios from 'axios';

export default {
  components: {
    imagePrompt
  },
  data() {
    return {
      messages: [],
      endpointURL: 'http://localhost:3001/image',
      generatedImage: '' // Add this to store the generated image URL
    };
  },
  methods: {
    async getChats() {
      try {
        const response = await axios.get('http://localhost:3001/images');
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
    async sendRequest(requestData) {
      if (requestData === '') return;

      const promptData = new FormData();
      promptData.append('promptText', requestData.promptText);
      promptData.append('imageType', requestData.imageType );
      promptData.append('imageShape', requestData.imageShape );
      promptData.append('imageSupport',  requestData.imageSupport);
      promptData.append('imageBackground', requestData.imageBackground );
      promptData.append('imageStyle', requestData.imageStyle );
      promptData.append('generatedImage', requestData.generatedImage );

      try {
        const response = await fetch(this.endpointURL, {
          method: 'POST',
          body: promptData
        });

        const data = await response.json();
        console.log(data);
        this.generatedImage = data.imageUrl; // Update the image URL here

      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style>

#generatedImage {
  margin: 20px;
}

#imagePromptcontainer{
  margin-top: 20px;
  background-color: white;

}
</style>
