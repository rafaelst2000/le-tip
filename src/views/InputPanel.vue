<template>
  <section class="input-panel">
      <div class="input-panel__card">
          <h1>Le/Tip</h1>

          <card>
            <span>Moeda</span>
            <div class="center">
             <toggle /> 
            </div>

            <span>Valor</span>
            <div class="input-container">
              <strong>$</strong>
             <input type="number" name="value" v-model="value">
            </div>
            {{value}}
          </card>

          <card class="input-panel__range">
            <span>Moeda</span>
            <div class="center">
             <toggle /> 
            </div>

            <span>Valor</span>
            <div class="input-container">
              <strong>$</strong>
             <input type="number" name="value" v-model="value">
            </div>
            {{value}}
          </card>
      </div>
  </section>
</template>

<script>
import Card from '../components/Card.vue'
import Toggle from '../components/Toggle.vue'
export default {
  name: 'InputPanel',
  components: {
    Card,
    Toggle
  },
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    value: 0
  }),
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.input-panel{
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;

  & .input-panel__card{
    width: 520px;
    background-image: linear-gradient(to right bottom, rgba(228, 218, 254, 0.5), rgba(211, 203, 252, 0.5), rgba(191, 188, 250, 0.5), rgba(168, 175, 249, 0.5), rgba(141, 162, 248, 0.5));
    height: calc(100vh - 40px);
    border-radius: 10px;
    padding: 20px;
  }

  & h1 {
    font-size: 48px;
    text-align: center;
    margin-top: 8px;
    color: #fff

  }

  & span {
    color: #d1dce7;
    font-weight: bold;
    font-size: 16px;
    margin: 12px 0;
    display: block;
  }

  & .input-container{
    position: relative;

    & strong {
      font-size: 24px;
      position: absolute;
      top: 10px;
      left: 15px;
    }
  }

  & .input-panel__range{
    margin-top: 24px;
  }
}
</style>
