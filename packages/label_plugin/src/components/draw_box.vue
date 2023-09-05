<!--
 * @LastEditTime: 2023-08-30 17:45:36
 * @Description: 
-->
<template>
  <!-- 绘制区域--大区域--允许用户设置某些图形坐标在大区域内 -->
  <div
    id="DRAW_DOM"
    class="draw_box"
    :style="`background-color: ${
      props.base_config?.bg_box_color || '#999'
    }; width: ${props.base_config?.width || 1920}px; height: ${
      props.base_config?.height || 1280
    }px;`"
    @mousewheel="resizeWheel"
  >
    <!-- 绘制区域--小区域--默认只能在这个区域内绘制图形 -->
    <div class="main_box" :style="baseStyle">
      <!-- 图片 -->
      <img :src="props.base_config.src" alt="" class="main_item bg_img" />
      <!-- 绘制canvas -->
      <canvas id="draw_canvas" class="canvas_css main_item"></canvas>
      <canvas id="handle_canvas" ></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, onMounted } from "vue";
import publicContorl from "../contorls/public_contorl";

const props = defineProps(["base_config"]);
const baseConfig: { [key: string]: any } = ref({}),
  baseStyle = ref(
    `width: ${(props.base_config?.width || 1920) * 0.9}px; height: ${
      (props.base_config?.height || 1280) * 0.9
    }px;`
  ),
  public_contorl: any = ref(null);

onMounted(() => {
  const canvas_dom = document.getElementById(
    "draw_canvas"
  ) as HTMLCanvasElement;
  public_contorl.value = new publicContorl(canvas_dom, "DRAW_DOM");
});
function resizeWheel(e: any) {
  public_contorl.value.resizeWheel(e);
}
</script>

<style lang="scss" scoped>
.draw_box {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transform-origin: 0px 0;
  .main_box {
    position: relative;
    .main_item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .bg_img {
      pointer-events: none;
      overflow: inherit;
    }
    .canvas_css {
    }
  }
}
</style>
