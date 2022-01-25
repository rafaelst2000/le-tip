<template>
  <section class="input-panel">
      <div class="input-panel__card">
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
          </card>

          <card class="input-panel__range">
            <div class="between">
              <span>Gorjeta</span>
              <span class="input-panel__range--value">{{ tip }}%</span>
            </div>
            <vue-slider
              v-model="tip"
              dot-size="18"
              height="12px"
              :min="10"
              :max="20"
              :interval="1"
              tooltip="none"
             />

            <div class="between">
              <span>Pessoas</span>
              <span class="input-panel__range--value">{{ people }}</span>
            </div>
            <vue-slider
              v-model="people"
              dot-size="18"
              height="12px"
              :min="2"
              :max="16"
              :interval="1"
              tooltip="none"
             />
          </card>
      </div>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component'
import Card from '../components/Card.vue'
import Toggle from '../components/Toggle.vue'
export default {
  name: 'InputPanel',
  components: {
    Card,
    Toggle,
    VueSlider
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

.input-panel{
  height: 100%;
  width: 100%;
  & .input-panel__card{
    width: 520px;
    border-radius: 10px;
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

  & .input-panel__range--value{
    color: #6d8ffe
  }
}

@media (max-width: 1060px) { 
  .input-panel{
    height: 100%;
      & .input-panel__card{
        width: 320px;
        max-width: 100%;
    }
  }
}

@media (max-width: 1060px) { 
  .input-panel{
    height: 100%;
      & .input-panel__card{
        width: 100%;
        max-width: 100%;
    }
  }
}

</style>
