<template>
  <div>
    <h1>
      Web Language Model API
    </h1>

    <textarea v-model="text"></textarea>

    <p>
      <strong>Split result: </strong>
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
  name: 'weblang',
  data() {
    return {
      keys: [
        'YOUR KEY HERE',
      ],
      text: 'sometextthatislikelytobesplitatsomepoint',
    };
  },

  asyncComputed: {
    async correctedText() {
      const response = await axios.post(`https://westus.api.cognitive.microsoft.com/text/weblm/v1.0/breakIntoWords?model=query&text=${encodeURIComponent(this.text)}`,
        {},
        {
          headers: { 'Ocp-Apim-Subscription-Key': this.keys[0] },
          data: this.text,
        },
      );

      return response.data.candidates[0].words;
    },
  },
};
</script>
