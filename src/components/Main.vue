<script>
import CardsContainer from './CardsContainer.vue';

export default {
    name:'Main',
    components:{
        CardsContainer,
    }
}
</script>

<template>
    <div class="container">

        <!-- Filter -->
        <div class="select-div pt-4 ms-2">
            <select name="select" id="Select" class="mc-select">

                <option value="1">Opzione</option>
                
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