import Vue from "vue";
import Vuex from "vuex";
import { CHANGE_COLOR, NEW_CANVAS, UPDATE_CANVAS } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: { r: 255, g: 0, b: 0, a: 1 },
    canvas: []
  },
  mutations: {
    [CHANGE_COLOR](state, color) {
      state.color = color;
    },
    [UPDATE_CANVAS](state, { position, color }) {
      const canvas = JSON.parse(JSON.stringify(state.canvas));

      canvas[position].color = color || state.color;

      state.canvas = canvas;
    },
    [NEW_CANVAS](state, canvas) {
      state.canvas = JSON.parse(JSON.stringify(canvas));
    }
  },
  actions: {}
});
