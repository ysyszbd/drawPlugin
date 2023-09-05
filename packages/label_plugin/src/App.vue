<!--
 * @LastEditTime: 2023-09-05 11:37:15
 * @Description: 
-->
<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import "./assets/css/reset.scss";

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
