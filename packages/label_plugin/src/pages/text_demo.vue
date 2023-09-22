<!--
 * @LastEditTime: 2023-09-21 14:28:58
 * @Description: 
-->
<template>
  <div class="my_page">
    <!-- 操作控制 -->
    <div class="handle_tools">
      <div
        v-for="(ele, index) in handleTools"
        :key="index"
        class="tool_item"
        @click="handleAdd(ele.key, true)"
      >
        {{ ele.value }}
      </div>
      <div class="handle_over">结束</div>
    </div>
    <mainDraw
      :base_config="{
        bg_box_color: '#666',
        width: 1220,
        height: 813,
        src: demo_img,
        canvas_id: 'DRAW_CANVAS',
      }"
      :contorls="{
        line: line,
        '2D': null,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
// import { UTILS, GRAPH } from "common_plugin";
import lineContorl from "../contorls/line_contorl";
import { mainDraw } from "../components/components";
import { getCurrentInstance, onMounted, ref } from "vue";
import demo_img from "./3.jpg";

const app: any = getCurrentInstance(),
  line: any = ref(null),
  handleTools = [
    {
      key: "line",
      value: "线条",
    },
    {
      key: "2D",
      value: "2D",
    },
    {
      key: "ray",
      value: "箭头",
    },
  ];
onMounted(() => {
  line.value = new lineContorl({
    pointsMaxNum: 2,
    exceed: true,
  })
});
function handleAdd(key: string, sign: boolean) {
  app.appContext.config.globalProperties.$publicContorl.recordFun(
    key,
    sign,
    "add"
  );
}
</script>

<style lang="scss" scoped>
.my_page {
  width: 100%;
  height: 100%;
  position: relative;
  .handle_tools {
    width: auto;
    display: flex;
    align-items: center;
    background: #c1bebe;
    border-radius: 8px;
    position: absolute;
    padding: 10px 0;
    top: 10px;
    left: 10px;
    z-index: 50;
    border: 2px solid #fff;
    .tool_item {
      width: 80px;
      box-sizing: border-box;
      padding: 0 20px;
      border-right: 1px solid #fff;
      color: #fff;
      cursor: pointer;
    }
    .tool_item:last-child {
      border-right: none;
    }
    .handle_over {
      padding: 0 20px;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>
