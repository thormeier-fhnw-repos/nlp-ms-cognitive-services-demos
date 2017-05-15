<template>
  <div>
    <h1>Text Analysis API</h1>

    <textarea v-model="text" @press.enter="analyze"></textarea>
    <button @click="analyze">Analyze</button>

    <p>
      <strong>Results</strong>
    </p>

    <ul :class="{ loading: isLoading }">
      <li>
        <strong>Language:</strong> {{ analysis.language.name }} ({{ analysis.language.score }})
      </li>
      <li>
        <strong>Sentiment:</strong> {{ analysis.sentiment }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import Vue from 'vue';
  import AsyncComputed from 'vue-async-computed';

  Vue.use(AsyncComputed);

  export default {
    name: 'textanalysis',
    data() {
      return {
        keys: [
          'YOUR KEY HERE',
        ],
        text: 'Some text',
        analysis: {
          language: {
            name: 'Unknown',
            score: 0.0,
          },
          sentiment: 0.5,
        },
        isLoading: false,
      };
    },

    methods: {
      async analyze() {
        this.isLoading = true;

        const responseLanguage = await axios.post('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages', {
          documents: [{
            id: 1,
            text: this.text,
          }],
        }, {
          headers: {
            'Ocp-Apim-Subscription-Key': this.keys[0],
          },
        });

        const responseSentiment = await axios.post('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {
          documents: [{
            id: 1,
            text: this.text,
          }],
        }, {
          headers: {
            'Ocp-Apim-Subscription-Key': this.keys[0],
          },
        });

        this.isLoading = false;

        this.analysis = {
          language: responseLanguage.data.documents[0].detectedLanguages[0],
          sentiment: responseSentiment.data.documents[0].score,
        };
      },
    },


  };
</script>

<style>
  .loading {
    opacity: .5;
  }
</style>
