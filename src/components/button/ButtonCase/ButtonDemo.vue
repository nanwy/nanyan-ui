<demo>
常规用法
</demo>
<template>
  <div>
    <div style="margin-bottom: 10px">
      <nan-button>默认按钮</nan-button>
      <nan-button theme="danger">危险按钮</nan-button>
      <nan-button theme="success">成功按钮</nan-button>
      <nan-button theme="info">普通按钮</nan-button>
    </div>
    <div style="margin-bottom: 10px">
      <NanButton theme="dark">暗黑按钮</NanButton>
      <NanButton theme="warning">警告按钮</NanButton>
      <NanButton theme="light">亮白按钮</NanButton>
      <NanButton theme="cyberpunk" cyberpunkText="赛博朋克"></NanButton>
    </div>
  </div>
</template>
<script lang='ts'>
// import NanButton from "../../../lib/Button/button.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    // NanButton,
  },
  setup() {
    const model = ref(0);
    return {
      model,
    };
  },
});
</script>

<style>
</style>