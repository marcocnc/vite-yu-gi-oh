
<script>
import Card from './Card.vue';

export default {
    name: 'CardsContainer',
    components:{
        Card,
    }
}
</script>

<template>
    <div class="card-wrapper mt-4">
        <div class="content-cards p-4">
            <div class="pages p-3 d-flex align-items-center">
                <span>You found...</span>
            </div>

            <Card />
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