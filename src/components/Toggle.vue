<template>
  <div class="toggle">
    <div @click="input = 'EUR'" class="toggle__item left" :class="toggle === 'EUR' ? 'toggle__item--active' : ''">
      <span>EUR</span>
    </div>
    <div @click="input = 'USD'" class="toggle__item right" :class="toggle === 'USD' ? 'toggle__item--active' : ''">
      <span>USD</span>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toogle',
  components: {},
  props: {
    toggle: {
      type: String,
      default: 'EUR'
    }
  },
  computed: {
    input: {
      get() {
        return this.toggle
      },
      set(newVal) {
        this.$emit('update:toggle', newVal)
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.toggle{
  width: 360px;
  border: 2px solid #6d8ffe;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center; 
  justify-items: center;
  cursor: pointer;
  color: #6d8ffe;
  font-weight: bold;

  & .toggle__item{
    width: 100%;
    height: 100%;
    padding: 8px 0;
    text-align: center;
  }
}

.left {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.right {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.toggle__item--active{
  background: #6d8ffe;
  color: white;
}

@media (max-width: 1060px) { 
  .toggle {
    width: 100%;
  }
}
</style>
