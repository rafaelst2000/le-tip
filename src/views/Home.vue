<template>
  <section>
    <h1>Le/Tip</h1>
    <div class="home">
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
  data: () => ({
    isMobile: false
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
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
