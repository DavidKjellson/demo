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

Vue.component('greet', {
  props: {
    playerName: {
      default: 'Player',
      type: String
    }
  },
  template: `<div>Välkommen, {{ playerName }}!</div>`
})

Vue.component('game', {
  data() {
    return {
      name: null
    }
  },
  methods: {
    onStartGame(payload) {
      this.name = payload.name
    }
  },
  template: `
    <div>
      <controls name="Alice" @start-game="onStartGame"></controls>
      <greet :player-name="name"></greet>
    </div>
  `
})

new Vue({
  el: '#app'
})