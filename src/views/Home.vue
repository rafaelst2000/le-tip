<template>
  <section>
    <h1>Le/Tip</h1>
    <div  class="home">
      <input-panel />
      <output-panel />
    </div>
  </section>
</template>

<script>
import InputPanel from './InputPanel.vue'
import OutputPanel from './OutputPanel.vue'
export default {
  name: 'Home',
  components: {
    OutputPanel,
    InputPanel
  },
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 48px;
}
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-content: center;
  max-width: 1100px;
}
</style>
