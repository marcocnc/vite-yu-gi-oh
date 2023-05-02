<script>
export default {
    name:'Main'
}
</script>

<template>
    <div class="container">
        <div class="select-div pt-4">
            <select name="select" id="Select" class="mc-select">
            <option value="1">Opzione</option>
        </select>
        </div>
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