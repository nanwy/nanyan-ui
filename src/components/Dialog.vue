<template>
  <div>
    <nan-button @click="toggle">打开dialog</nan-button>
    <nan-dialog :visible="x"></nan-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import NanDialog from "/@/lib/dialog/dialog.vue";
import NanButton from "/@/lib/Button/button.vue";
export default defineComponent({
  components: {
    NanDialog,
    NanButton,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
      console.log("x.value: ", x.value);
    };
    return { x, toggle };
  },
});
</script>

<style>
</style>