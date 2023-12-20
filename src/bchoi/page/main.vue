<template>
  <verticalSlide></verticalSlide>
</template>
<script>
import verticalSlide from '@/bchoi/layout/layoutBody.vue'
export default {
  name: 'main',
  components: {
    verticalSlide,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0 auto;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  max-width: 750px;
}
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
