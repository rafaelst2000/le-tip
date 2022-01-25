<template>
  <section>
    <h1>Le/Tip</h1>
    <div class="home">
      <input-panel :is-mobile="isMobile" @input="handleInput($event)" />
      <output-panel v-show="!isMobile" :is-mobile="isMobile"/>
    </div>
    <div v-if="isMobile" @click="handleFloatActionButton" class="icon">{{floatActionButton}}</div>
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
  data: () => ({
    isMobile: false,
    floatActionButton: '>',
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 720
    },
    handleFloatActionButton() {

    },
    handleInput(data){
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    background: white;
    color: #6d8ffe;
    font-weight: bold;
    border-radius: 50%;
    font-size: 32px;
    position: absolute;
    right: 20px;
  }
}
h1 {
  text-align: center;
  font-size: 48px;
}
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  max-width: 1100px;
}

@media (max-width: 720px) { 
  section {
    display: block;
  }
  .home {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 100%;
  }
}
</style>
