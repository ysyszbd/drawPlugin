<!--
 * @LastEditTime: 2023-08-28 16:40:11
 * @Description: 
-->
<template>
  <div class="draw_box" :style="`background-color: ${props.base_config?.bg_color || '#999'}; width: ${props.base_config?.width || 1920}px; height: ${props.base_config?.height || 1280}px;`">
    <div class="img_box"></div>
    <div class="handle_box"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps(["base_config"]);
const baseConfig: { [key: string]: any } = ref({});
</script>

<style lang="scss" scoped>
  .draw_box {
    background-color: #fff;
  }
</style>
