import App from '@/App.vue';
import { createApp } from 'vue';
import { apolloClient } from '@/client/apolloClient';
import { DefaultApolloClient } from '@vue/apollo-composable';
import '@/style.css';

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');
