<script>
import CardsContainer from './CardsContainer.vue';
import { store } from '../data/store';
export default {
    name:'Main',
    data(){
        return{
            store
        }
    },
    components:{
        CardsContainer,
    }
}
</script>

<template>
    <div class="container">

        <!-- Filter -->
        <div class="select-div pt-4 ms-2">
            <select name="select" id="Select" class="mc-select" v-model="store.cardTypeFiltered">   

                <option value="" selected>Choose a type</option>
                <option v-for="(typeCard, index) in store.cardsType" :key = "index" :value="type" @click="$emit('filterType')"> {{typeCard}} </option>
                
            </select>
        </div>

        <!-- Container Card -->
        <CardsContainer />
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

    .mc-select{
        border-radius: 7px;
        padding: 10px 30px;

        select{
            text-align: left;
        }
    }

</style>