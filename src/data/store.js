import {reactive} from 'vue';

export const store = reactive({
    apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php',

    gameCards: [],

    cardTypeFiltered : null,

    visibleCards: 10,

    cardsOffset: 0,

    cardsType : [],

    isLoading: true
})