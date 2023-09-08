<!--
 * @LastEditTime: 2023-09-08 16:10:44
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
    @mousedown="mouseDownExceed"
  >
    <!-- 绘制区域--小区域--默认只能在这个区域内绘制图形 -->
    <div
      class="main_box"
      :style="baseStyle"
      @mousedown="mouseDownFun"
      @mousemove="mouseMoveFun"
    >
      <!-- 图片 -->
      <img
        :src="props.base_config.src"
        alt=""
        :style="baseStyle"
        class="main_item bg_img"
      />
      <!-- 绘制canvas -->
      <canvas
        :id="`${
          props.base_config?.canvas_id
            ? props.base_config?.canvas_id
            : 'draw_canvas'
        }`"
        class="main_item"
      ></canvas>
      <canvas id="handle_canvas" class="main_item"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, getCurrentInstance } from "vue";
import baseContorl from "../contorls/base_contorl";

const props = defineProps(["base_config", "contorls"]);
const app: any = getCurrentInstance(),
  baseStyle = ref(
    `width: ${(props.base_config?.width || 1920) * 0.9}px; height: ${
      (props.base_config?.height || 1280) * 0.9
    }px;`
  ),
  publicContorl = app.appContext.config.globalProperties.$publicContorl,
  base_contorl: any = ref(null);
onMounted(() => {
  const canvas_dom = document.getElementById(
    props.base_config?.canvas_id ? props.base_config?.canvas_id : "draw_canvas"
  ) as HTMLCanvasElement;
  const handle_canvas_dom = document.getElementById(
    "handle_canvas"
  ) as HTMLCanvasElement;
  canvas_dom!.width = (props.base_config?.width || 1920) * 0.9;
  canvas_dom!.height = (props.base_config?.height || 1280) * 0.9;
  handle_canvas_dom!.width = (props.base_config?.width || 1920) * 0.9;
  handle_canvas_dom!.height = (props.base_config?.height || 1280) * 0.9;
  base_contorl.value = new baseContorl(
    canvas_dom,
    "DRAW_DOM",
    handle_canvas_dom
  );
});
// 图片操作区域的移动事件
function mouseMoveFun(e) {
  e.stopPropagation();
  const contorl = props.contorls[publicContorl.drawConfig.type];
  if (!contorl) return;
  contorl.moveFun(base_contorl.value.drawContext, e.offsetX, e.offsetY);
}
// 图片操作区域的点击事件
function mouseDownFun(e) {
  e.stopPropagation();
  const contorl = props.contorls[publicContorl.drawConfig.type];
  if (!contorl) return;
  console.log(e, "e----mouseDownFun");
  base_contorl.value.drawPoint(e.offsetX, e.offsetY);
  contorl.downFun(base_contorl.value.handleContext, e.offsetX, e.offsetY);

}
// 大操作区域的点击事件
function mouseDownExceed(e) {
  const contorl = props.contorls[publicContorl.drawConfig.type];
  if (!contorl.configData.exceed) return;
  console.log(e, "e----mouseDownExceed");
}

function resizeWheel(e: any) {
  base_contorl.value.resizeWheel(e);
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
    z-index: 200;
    overflow: inherit;
    .main_item {
      position: absolute;
      left: 0;
      top: 0;
      color: rgb(255, 0, 0);
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
