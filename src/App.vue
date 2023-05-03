<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Loading from './components/partials/Loading.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import {store} from './data/store';

export default {
  name:'App',
  components:{
    Header,
    Loading,
    Main,
    Footer
  },
  data(){
    return{
      store
    }
  },

  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl, {
        params:{
          num: store.visibleCards,
          offset: store.cardsOffset
        }
      })
        .then( result =>{
          console.log(result.data);
          store.gameCards = result.data.data;
          store.isLoading = false;
        })
    }
  },

  mounted(){
    this.getApi()
  }
}
</script>

<template>

  <Header />
  <Loading v-if="store.isLoading" />

  <Main />

  <Footer @startSearch="getApi" />
  
</template>

<style lang="scss">
  @use './scss/main.scss' as *;

</style>
