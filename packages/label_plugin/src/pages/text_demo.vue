<!--
 * @LastEditTime: 2023-08-24 17:57:37
 * @Description: 
-->
<template>
  <div class="my_page">111</div>
</template>

<script lang="ts" setup>
// import { UTILS, GRAPH } from "common_plugin";
import lineContorl from "../contorls/line_contorl"
import { ref } from "vue";

const Line = new lineContorl({
  pointsNum: 2,
});
// Line.value = new GRAPH.lineContorl({ pointsNum: 2 });
// console.log(UTILS, GRAPH, "UTILS, GRAPH");

</script>

<style lang="scss" scoped></style>
