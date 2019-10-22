import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {},
      selectedCurrency: null,
    },
    mounted(){
      this.fetchCurrencies();
    },
    methods:{
      fetchCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data.rates)
        
      }
    }







  })
})
