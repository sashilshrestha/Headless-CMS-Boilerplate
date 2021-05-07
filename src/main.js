import { createApp } from 'vue';
import App from './App.vue';
import 'mdb-ui-kit';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app');
