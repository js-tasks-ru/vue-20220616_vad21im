import {createApp} from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
  data() {
    return {
      logic: {
        num1: 0,
        num2: 0,
        sum: 0,
        radio: ''
      }
    }
  },
  watch: {
    logic: {
      deep: true,
      handler() {
        if (this.logic.radio === "sum") {
          this.logic.sum = this.logic.num1 + this.logic.num2
        }else if(this.logic.radio === "subtract"){
          this.logic.sum = this.logic.num1 - this.logic.num2
        }else if(this.logic.radio === "multiply"){
          this.logic.sum = this.logic.num1 * this.logic.num2
        }else if(this.logic.radio === "divide"){
          this.logic.sum = this.logic.num1 / this.logic.num2
        }
      }
    }
  }
}).mount('#app')
