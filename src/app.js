import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {},
      selectedCurrency: null,
      rate: null
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
      // rate: function() {
      //   for (rate, this.selectedCurrency) of this.currencies
      //   return rate
      // }
    }







  })
})
