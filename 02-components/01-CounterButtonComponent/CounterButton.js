import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props:{
    count: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ['update:count'],
  methods: {
    increment() {
      // При клике на кнопку порождаем событие и отправляем новое значение
      this.$emit('update:count', this.count + 1);
    },
  },

  template: `<button type="button" @click="increment">{{ count }}</button>`,
});

