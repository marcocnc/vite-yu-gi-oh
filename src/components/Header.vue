<script>
export default {
    name:'Header'
}
</script>

<template>
    <div class="mc-container d-flex align-items-center px-4 py-3">
        <img src="../../public/img/logo.png" alt="logo">
        <span>Yu-Gi-Oh! API</span>
    </div>
  </template>

<style lang="scss" scoped>
    @use '../scss/partials/vars' as *;
    
    .mc-container{
        background-color: $color_white;
        img{
                width: 200px;
                object-fit: cover;
                vertical-align: middle;
            }

            span{
                font-size: 22px;
                font-weight: bold;
            }
    }

   
</style>