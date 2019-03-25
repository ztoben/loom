<template>
  <div class="tools">
    <h1>Tools</h1>
    <sketch-picker
      @input="updateColor"
      :value="color"
      :presetColors="colors"
    ></sketch-picker>
    <p class="footer">
      Created by <a href="https://github.com/ztoben">ztoben</a>.
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { CHANGE_COLOR } from "../mutation-types";
import { Sketch } from "vue-color";

export default {
  name: "Tools",
  components: {
    "sketch-picker": Sketch
  },
  computed: {
    ...mapState(["color"])
  },
  methods: {
    updateColor({ rgba }) {
      this.$store.commit(CHANGE_COLOR, rgba);
    }
  },
  data() {
    return {
      colors: [
        "red",
        "maroon",
        "orange",
        "darkorange",
        "yellow",
        "green",
        "lime",
        "navy",
        "blue",
        "indigo",
        "turquoise",
        "purple",
        "violet",
        "black",
        "grey",
        "white"
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
  width: calc(#{$wrapperWidth} + 10px);
  background-color: lightgray;

  .footer {
    margin-top: auto;
  }
}
</style>
