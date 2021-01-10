<template>
  <div class="markdown-body" v-html="content"></div>
</template>

<script lang='ts'>
import { ref } from "vue";
// import md from "../markdown/intro.md";
export default {
  props: {
    path: {
      type: String,
    },
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.path).then((res) => {
      content.value = res.default;
    });
    return {
      content,
    };
  },
};
</script>

<style>
</style>