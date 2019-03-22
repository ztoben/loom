<template>
  <div class="tools">
    <h1>Tools</h1>
    <h3>Color Picker</h3>
    <div class="color-picker-grid">
      <div
        v-for="(color, idx) in colors"
        :key="idx"
        :style="getStyle(color)"
        @click="handleClick(color)"
      ></div>
    </div>
    <p class="footer">
      Created by <a href="https://github.com/ztoben">ztoben</a>.
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { CHANGE_COLOR } from "../mutation-types";
import { hex } from "html-colors";

function invertColor(color) {
  let hexColor = hex(color);

  if (hexColor.indexOf("#") === 0) {
    hexColor = hexColor.slice(1);
  }

  if (hexColor.length === 3) {
    hexColor =
      hexColor[0] +
      hexColor[0] +
      hexColor[1] +
      hexColor[1] +
      hexColor[2] +
      hexColor[2];
  }

  let r = (255 - parseInt(hexColor.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hexColor.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hexColor.slice(4, 6), 16)).toString(16);

  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  let zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

export default {
  name: "Tools",
  computed: {
    ...mapState(["color"])
  },
  methods: {
    handleClick(color) {
      this.$store.commit(CHANGE_COLOR, color);
    },
    getStyle(color) {
      return {
        backgroundColor: color,
        borderColor: invertColor(color),
        borderWidth: this.color === color ? "2px" : 0,
        borderStyle: "solid"
      };
    }
  },
  data() {
    return {
      colors: [
        "black",
        "blue",
        "brown",
        "coral",
        "crimson",
        "fuchsia",
        "grey",
        "green",
        "indianRed",
        "indigo",
        "lime",
        "magenta",
        "maroon",
        "navy",
        "orange",
        "orchid",
        "pink",
        "plum",
        "purple",
        "red",
        "salmon",
        "silver",
        "teal",
        "turquoise",
        "violet",
        "white",
        "yellow"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$wrapperWidth: 15vw;
$gutter: 5px;
$noOfColumns: 4;
$noOfGutters: calc(#{$noOfColumns} - 1);
$rowHeight: calc(
  (#{$wrapperWidth} - (#{$noOfGutters} * #{$gutter})) / #{$noOfColumns}
);

.tools {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(#{$wrapperWidth} + 10px);
  background-color: lightgray;

  .color-picker-grid {
    width: $wrapperWidth;
    display: grid;
    grid-template-columns: repeat($noOfColumns, 1fr);
    grid-auto-rows: $rowHeight;
    grid-gap: $gutter;
    flex: 1;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
