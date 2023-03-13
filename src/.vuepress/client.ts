// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client';
import Headline from './components/Headline.vue';

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Headline', Headline);
  },
});
