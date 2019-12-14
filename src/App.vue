<template>
  <main-page></main-page>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    MainPage: Main
  }
}
</script>

<style>
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
