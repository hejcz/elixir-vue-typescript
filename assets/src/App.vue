<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 500 425">
      <g v-for="(row, rid) in board" :key="rid">
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

class Unit {
  constructor(
    private rotation: number,
    private active: boolean,
    private id: string | null
  ) {}

  static empty() {
    return new Unit(1, false, null);
  }
}

function flatBoardToNested(board: Unit[]): Unit[][] {
  return [3, 4, 5, 4, 3]
    .map((count) => board.splice(0, count))
    .map((hexes) => hexes.map((hex) => (hex === null ? Unit.empty() : hex)));
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  board: Unit[][] = flatBoardToNested(Array(19).fill(null));

  unitById(id: string | null, active: boolean): string {
    if (active) {
      return "/images/empty_active.svg";
    }
    return "/images/empty.svg";
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
