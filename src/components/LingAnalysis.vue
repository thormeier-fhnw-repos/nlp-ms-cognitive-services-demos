<template>
  <div>
    <h1>Linguistic Analysis API</h1>

    <textarea v-model="text" @press.enter="analyze"></textarea>
    <button @click="analyze">Analyze</button>

    <p>
      <strong>Results</strong>
    </p>

    <pre v-html="analysis"></pre>
  </div>
</template>

<script>
  import axios from 'axios';
  import Vue from 'vue';
  import AsyncComputed from 'vue-async-computed';

  Vue.use(AsyncComputed);

  export default {
    name: 'linganalysis',
    data() {
      return {
        keys: [
          'YOUR KEY HERE',
        ],
        text: 'Some text',
        analysis: '',
        isLoading: false,
      };
    },

    methods: {
      async analyze() {
        this.isLoading = true;

        const response = await axios.post('https://westus.api.cognitive.microsoft.com/linguistics/v1.0/analyze', {
          language: 'en',
          analyzerIds: ['22a6b758-420f-4745-8a3c-46835a67c0d2'],
          text: this.text,
        }, {
          headers: {
            'Ocp-Apim-Subscription-Key': this.keys[0],
          },
        });

        this.isLoading = false;

        this.analysis = response.data[0].result[0];
      },
    },
  };
</script>

<style>
  .loading {
    opacity: .5;
  }
</style>
