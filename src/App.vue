<template>
  <div id="app">
    <div class="canvas-container">
      <Tools />
      <Canvas />
    </div>
  </div>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import Tools from "./components/Tools.vue";

export default {
  name: "app",
  components: {
    Canvas,
    Tools
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;

  .canvas-container {
    display: flex;
    flex: 1;
  }
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
