

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name:'App',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<template>

  <Header />

  <Main />

</template>

<style lang="scss">
  @use './scss/main.scss' as *;

</style>
