<demo>
边框用法
</demo>
<template>
  <div>
    <div style="margin-bottom: 10px">
      <NanButton outline>默认按钮</NanButton>
      <NanButton theme="danger" outline>危险按钮</NanButton>
      <NanButton theme="success" outline>成功按钮</NanButton>
      <NanButton theme="info" outline>普通按钮</NanButton>
    </div>
    <div style="margin-bottom: 10px">
      <NanButton theme="dark" outline>暗黑按钮</NanButton>
      <NanButton theme="warning" outline>警告按钮</NanButton>
      <NanButton theme="light" outline>亮白按钮</NanButton>
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