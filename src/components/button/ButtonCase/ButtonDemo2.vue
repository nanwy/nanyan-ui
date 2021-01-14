<demo>
可以选择禁用,或者loading
</demo>
<template>
  <div>
    <div style="margin-bottom: 10px">
      <NanButton disabled>默认按钮</NanButton>
      <NanButton theme="danger" loading>危险按钮</NanButton>
      <NanButton theme="success" outline disabled>成功按钮</NanButton>
      <NanButton theme="info" outline loading>普通按钮</NanButton>
    </div>
  </div>
</template>
<script lang='ts'>
import NanButton from "../../../lib/Button/button.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    NanButton,
  },
  setup() {
    const model = ref(3);
    return {
      model,
    };
  },
});
</script>

<style>
</style>