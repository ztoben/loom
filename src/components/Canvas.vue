<template>
  <div :style="cssProps" class="canvas">
    <h1>Loom</h1>
    <div class="controls-container">
      <h2>Canvas</h2>
      <label>
        Canvas size:
        <select v-model="size">
          <option>8</option>
          <option>16</option>
          <option>32</option>
          <option>64</option>
        </select>
      </label>
    </div>
    <div class="grid">
      <div
        v-for="(square, idx) in canvas"
        :key="idx"
        :style="getStyle(square)"
        @mouseenter="event => colorSquare(idx, event)"
        @click="colorSquare(idx)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { NEW_CANVAS, UPDATE_CANVAS } from "../mutation-types";

export default {
  name: "Canvas",
  data() {
    return {
      size: 32
    };
  },
  computed: {
    ...mapState(["canvas"]),
    cssProps() {
      return {
        "--noOfColumns": this.size
      };
    }
  },
  created() {
    this.newCanvas();
  },
  watch: {
    size: function() {
      this.newCanvas();
    }
  },
  methods: {
    createCanvas(size) {
      return new Array(size * size).fill({ color: "white" });
    },
    newCanvas() {
      const canvas = this.createCanvas(this.size);

      this.$store.commit(NEW_CANVAS, canvas);
    },
    colorSquare(position, event) {
      if (!event || event.buttons === 1)
        this.$store.commit(UPDATE_CANVAS, { position });
    },
    getStyle(square) {
      return {
        backgroundColor: square.color
      };
    }
  }
};
</script>

<style scoped lang="scss">
.canvas {
  $wrapperWidth: calc(80vh - 20px);
  $gutter: 1px;
  $noOfColumns: var(--noOfColumns);
  $noOfGutters: calc(#{$noOfColumns} - 1);
  $rowHeight: calc(
    (#{$wrapperWidth} - (#{$noOfGutters} * #{$gutter})) / #{$noOfColumns}
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgray;
  flex: 1;

  .controls-container {
    width: $wrapperWidth;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid {
    width: $wrapperWidth;
    display: grid;
    grid-template-columns: repeat($noOfColumns, 1fr);
    grid-auto-rows: $rowHeight;
    grid-gap: $gutter;
    background-color: black;
    border: 1px solid black;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
