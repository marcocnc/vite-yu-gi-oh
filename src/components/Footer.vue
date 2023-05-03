<script>
import { store } from '../data/store'
export default {
    name:'Footer',
    data(){
        return{
            store
        }
    },

    methods:{
        nextPrev(value){
            store.cardsOffset += value;
            this.$emit('startSearch')
        }
    }
}
</script>

<template>
    <footer
      class="d-flex justify-content-center p-3">
      <button
      @click="nextPrev(-store.visibleCards)"
      class="btn btn-warning mx-4"
      v-if="store.cardsOffset > 0">prev</button>
        <button @click="nextPrev(store.visibleCards)" class="btn btn-info">next</button>
    </footer>
</template>

<style>

</style>