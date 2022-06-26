import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props:{
    count: {
      type: Number,
      required: false,
      default: 0
    },
    setCount: {
      type: Function,
      required: false
    }
  },

  template: `<button @click="()=>setCount()" type="button">{{count}}</button>`,
});

