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
      console.warn('err');
      store.isLoading = true;
      axios.get(store.apiUrl, {
        params:{
          num: store.visibleCards,
          offset: store.cardsOffset,
          type: store.cardTypeFiltered 
        }
      })
        .then( result =>{
          console.log(result.data);
          store.gameCards = result.data.data;
          store.isLoading = false;
        })
    },

    getCardType(){
      axios.get(store.apiUrl)
        .then(result =>{
          console.log('result.data.data', result.data.data);
  
          result.data.data.forEach(item => {
            if (!store.cardsType.includes(item.type)) {
              store.cardsType.push(item.type);
            }
          });
          console.log(store.cardsType);
        })
      },
      
  },

  mounted(){
    this.getApi();
    this.getCardType();
  }
}
</script>

<template>

  <Header />
  <Loading v-if="store.isLoading" />

  <Main @filterType="getApi"/>

  <Footer @startSearch="getApi" />
  
</template>

<style lang="scss">
  @use './scss/main.scss' as *;

</style>
