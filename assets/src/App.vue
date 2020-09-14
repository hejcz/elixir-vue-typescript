<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 500 425">
      <g v-for="(row, rid) in board.as2dimArray()" :key="rid">
        <image
          v-on:click="clickOnBoard(rid, uid)"
          v-for="(unit, uid) in row"
          :key="uid"
          :href="unitById(unit.id, unit.active)"
          width="100"
          height="100"
          :transform="`translate(${uid * 86.5 + Math.abs(2 - rid) * 86.5 / 2}, ${rid * 75}), rotate(${(unit.rotation - 1) * 60 + 30}, 50, 50)`"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import { Board, Unit } from "./board";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  board: Board = Board.empty();

  unitById(id: string | null, active: boolean): string {
    if (active) {
      return "/images/empty_active.svg";
    }
    return "/images/empty.svg";
  }

  clickOnBoard(row: number, column: number) {
    console.log(row + " " + column);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
