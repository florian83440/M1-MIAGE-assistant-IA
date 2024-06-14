import './assets/main.css'
import 'bulma/css/bulma.min.css'

import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

import FontAwesomeIcon from './fontAwesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app')
