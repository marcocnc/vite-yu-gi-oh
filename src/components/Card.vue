<script>
export default {
    name:'Card',
    props:{
        image: Array,
        name: String,
        archetype: String,
    }
}
</script>

<template>
 
    
    <div class="mc-card">
        <div class="mc-card-image">
            <img :src="image[0].image_url">
        </div>
        <div class="mc-card-text">
            <h3>{{name}}</h3>
            <p>{{archetype}}</p>
        </div>
    </div>
    
    
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
    
        .mc-card{
            margin: 10px 10px 15px;
            width: calc(100% / 5 - 20px);
            background-color: $primary_color;
            border: 1px solid #000;
        
            .mc-card-image{
    
                img{
                    width: 100%; 
                }
            }
            

            .mc-card-text{
                h3{
                    color: $color_white;
                    text-align: center;
                }

                p{
                    text-align: center;
                }
            }
        }
        
    
</style>