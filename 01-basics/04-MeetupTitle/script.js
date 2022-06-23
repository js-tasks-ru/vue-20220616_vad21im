import {createApp} from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  console.log(meetupId)
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  data() {
    return {
      changeRadio: 0,
      titleMeetup: ''
    }
  },
  watch: {
    changeRadio: {
      async handler() {
        if (this.changeRadio > 0 && this.changeRadio < 6) {
          let res = await fetchMeetupById(this.changeRadio)
          this.titleMeetup = res.title
        }
      }
    }
  }
}).mount('#app')
// Требуется создать Vue приложение
