<template>
  <section class="output-panel">
      <div class="output-panel__container">
          <card class="output-panel__card">
            <div class="between">
              <span>Conta</span>
              <span class="output-panel__card--value">USD 73.23</span>
            </div>
            <div class="between">
              <span>Gorjeta</span>
              <span class="output-panel__card--value">USD 9.52</span>
            </div>
            <div class="between">
              <span>Total</span>
              <span class="output-panel__card--value">USD 82.52</span>
            </div>
            <div class="between">
              <span>Por pessoa</span>
              <span class="output-panel__card--value">USD 8.28</span>
            </div>
          </card>
          <card class="output-panel__card">
            <div class="center">
              <span class="output-panel__card--brl">R$ 57.56</span>
            </div>
          </card>
      </div>
  </section>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'outputPanel',
  components: {
    Card,
  },
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    value: 0,
    tip: 10,
    people: 2,
  }),
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

::v-deep .vue-slider-dot{
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
}

::v-deep .vue-slider-rail{
  background-image: linear-gradient(to right bottom, rgba(228, 218, 254, 0.7), rgba(211, 203, 252, 0.7), rgba(191, 188, 250,  0.7), rgba(168, 175, 249,  0.7), rgba(141, 162, 248,  0.7));
  border-radius: 5px;
}

.output-panel{
  height: 100%;
  & .output-panel__container{
    width: 520px;
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
    color: #818488;
    font-weight: bold;
    font-size: 16px;
    margin: 12px 0;
    display: block;
  }

  & .output-container{
    position: relative;

    & strong {
      font-size: 24px;
      position: absolute;
      top: 10px;
      left: 15px;
    }
  }

  & .output-panel__card{
    margin-top: 24px;
  }

  & .output-panel__card--value{
    color: #6d8ffe
  }

  & .output-panel__card--brl{
    font-size: 32px;
    color: #6d8ffe
  }

}

</style>
