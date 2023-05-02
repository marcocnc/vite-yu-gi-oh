
<script>
import Card from './Card.vue';
import {store} from '../data/store';

export default {
    name: 'CardsContainer',
    components:{
        Card,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="card-wrapper mt-4">
        <div class="content-cards px-5 pt-5">
            <div class="pages p-3 d-flex align-items-center">
                <span>You found...</span>
            </div>
        </div>

        <div class="cards-container d-flex flex-wrap px-5">
            <Card 
            v-for="card in store.gameCards"
            :key="card.id"
            :name="card.name"
            :archetype="card.archetype"
            :image="card.card_images"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
    .card-wrapper{
        background-color: $color_white;
        min-height: 200px;

        .pages{
            background-color: #212529;

            span{
                color: $color_white;
            }
        }
    }
</style>