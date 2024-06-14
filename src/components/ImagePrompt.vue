<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <div class="field">
        <label for="">Que souhaitez-vous? </label>
        <div class="control">
          <textarea class="textarea" v-model="promptText" placeholder="Entrez votre description ici"></textarea>
        </div>
      </div>

    </div>
    <div class="field column is-12">
      <label>Type d'image à générer</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="imageType">
            <option value="A line art drawing of">A line art drawing of</option>
            <option value="A blue color ballpoint pen drawing of">A blue color ballpoint pen drawing of</option>
            <option value="A colored pencil drawing of">A colored pencil drawing of</option>
            <option value="An aquarel drawing of">An aquarel drawing of</option>
            <option value="An ink drawing of">An ink drawing of</option>
            <option value="A pastel art drawing of">A pastel art drawing of</option>
            <option value="A painting drawing of">A painting drawing of</option>
            <option value="A 3D render drawing of">A 3D render drawing of</option>
            <option value="A photo drawing of">A photo drawing of</option>
            <option value="A black and white photo">A black and white photo</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field column is-12">
      <label>Forme de l'image</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="imageShape" >
            <option value="Heart-shaped">Heart-shaped</option>
            <option value="Square-shaped">Square-shaped</option>
            <option value="Rounded">Rounded</option>
            <option value="Cylinder shaped">Cylinder shaped</option>
          </select>
        </div>
      </div>
    </div>


    <div class="field column is-12">
      <label>Support de l'image</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="imageSupport">
            <option value="On a wooden table">On a wooden table</option>
            <option value="On a glass table">On a glass table</option>
            <option value="On the pavement">On the pavement</option>
            <option value="On a rock">On a rock</option>
          </select>
        </div>
    </div>
    </div>

    <div class="field column is-12">
      <label>Fond de l'image</label>
      <div class="control">
        <div class="select is-fullwidth">
      <select v-model="imageBackground">
        <option value="Blurred city lights background">Blurred city lights background</option>
        <option value="Blurred forest background">Blurred forest background</option>
        <option value="Paradisiacal beach background">Paradisiacal beach background</option>
      </select>
    </div>
      </div>
    </div>

    <div class="field column is-12">
      <label>Style général de l'image</label>
      <div class="control">
        <div class="select is-fullwidth">
      <select v-model="imageStyle">
        <option value="With an arabic design">With an arabic design</option>
        <option value="With an art deco design">With an art deco design</option>
        <option value="With a modern design">With a modern design</option>
        <option value="With a geometrical design">With a geometrical design</option>
      </select>
    </div>
      </div>
    </div>

    <button class="button is-fullwidth" @click="sendMessage">Générer l'image</button>

    <div v-if="generatedImage">
      <img :src="generatedImage" alt="Image générée">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      promptText: '',
      imageType: '',
      imageShape: '',
      imageSupport: '',
      imageBackground: '',
      imageStyle: '',
      generatedImage: ''
    };
  },
  methods:{
    sendMessage() {
          const requestData = {
            promptText: this.promptText,
            imageType: this.imageType,
            imageShape: this.imageShape,
            imageSupport: this.imageSupport,
            imageBackground: this.imageBackground,
            imageStyle: this.imageStyle
        };

        this.$emit('send-message', requestData);

        this.promptText = '';
        this.imageType = '';
        this.imageShape = '';
        this.imageSupport = '';
        this.imageBackground = '';
        this.imageStyle = '';
    }
  }
}

</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
select {
  width: 100%;
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: rgb(36, 123, 136);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: rgb(29, 98, 109);
  transform: translateY(-2px);
}

button:active {
  background-color: rgb(25, 85, 95);
  transform: translateY(0);
}

img {
  max-width: 100%;
  margin-top: 20px;
}

</style>
