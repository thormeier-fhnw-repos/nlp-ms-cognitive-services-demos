<template>
  <div>
    <h1>
      Bing Spell Check API
    </h1>

    <textarea v-model="text"></textarea>

    <p>
      <strong>Corrected result: </strong>
    </p>
    <p v-html="correctedText"></p>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';

Vue.use(AsyncComputed);

export default {
  name: 'spellcheck',
  data() {
    return {
      keys: [
        'YOUR KEY HERE',
      ],
      text: 'Some text',
    };
  },

  asyncComputed: {
    async correctedText() {
      const response = await axios.get(`https://api.cognitive.microsoft.com/bing/v5.0/spellcheck?text=${encodeURIComponent(this.text)}&mkt=en-us`, {
        headers: { 'Ocp-Apim-Subscription-Key': this.keys[0] },
        data: this.text,
      });

      const tokens = response.data.flaggedTokens;

      if (tokens.length === 0) {
        return this.text;
      }

      let text = this.text;

      tokens.forEach((token) => {
        const search = token.token;
        const replaceWith = `<span class="corrected">${token.suggestions[0].suggestion}</span>`;

        text = text.replace(search, replaceWith);
      });

      return text;
    },
  },
};

</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  font-size: 16px;
}
.corrected {
  color: #f00;
  text-decoration: underline;
  text-decoration-style: wavy;
}
</style>
