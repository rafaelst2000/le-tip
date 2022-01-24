<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  padding: 20px;
}

</style>
