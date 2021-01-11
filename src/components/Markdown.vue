<template>
  <div class="markdown-body" v-html="content"></div>
</template>

<script lang='ts'>
import { ref } from "vue";
// import md from "../markdown/intro.md";
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style>
</style>