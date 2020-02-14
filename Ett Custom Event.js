Vue.component('controls', {
  methods: {
    onClick() {
      this.$emit('start-game', {
        credits: 100,
        name: this.name
      })
    }
  },
  props: ['name'],
  template: '<input @click="onClick" type="button">'
})

new Vue({
  el: '#app'
})