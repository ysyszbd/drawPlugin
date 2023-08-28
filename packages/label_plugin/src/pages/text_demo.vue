<!--
 * @LastEditTime: 2023-08-28 17:16:47
 * @Description: 
-->
<template>
  <div class="my_page">
    <bigDraw
      :base_config="{
        bg_color: '#666',
        width: 1920,
        height: 1280,
        src: demo_img
      }"
    />
  </div>
</template>

<script lang="ts" setup>
// import { UTILS, GRAPH } from "common_plugin";
import lineContorl from "../contorls/line_contorl";
import { bigDraw } from "../components/components";
import { ref } from "vue";
import demo_img from "./3.jpg";

console.log(demo_img, "demo_img");

const Line = new lineContorl({
  pointsNum: 2,
});
// Line.value = new GRAPH.lineContorl({ pointsNum: 2 });
// console.log(UTILS, GRAPH, "UTILS, GRAPH");
</script>

<style lang="scss" scoped></style>
