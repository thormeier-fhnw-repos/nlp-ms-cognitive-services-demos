<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Index</router-link>
        </li>
        <li>
          <router-link to="/spellcheck">Spellckeck</router-link>
        </li>
        <li>
          <router-link to="/textanalysis">Text analysis</router-link>
        </li>
        <li>
          <router-link to="/weblang">Web language model</router-link>
        </li>
        <li>
          <router-link to="/linganalysis">Language analysis</router-link>
        </li>
      </ul>
    </nav>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 90vw;
  margin: 0 auto;
  color: #2c3e50;
  font-size: 16px;
}

nav {
  background-color: #0f0f0f;
}
nav ul {
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
  padding: 20px;
}
nav ul li * {
  color: #f0f0f0;
  text-decoration: none;
}
</style>
