<template>
  <div>
    <div>
      <nan-button @click="x = true">打开dialog</nan-button>
      <nan-dialog v-model="x" title="标题">
        <strong>加粗的内容</strong>
        <template #footer>
          <nan-button @click="x = false">确定</nan-button>
          <nan-button theme="light" @click="x = false">取消</nan-button>
        </template>
      </nan-dialog>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
// import NanDialog from "../lib/dialog/dialog.vue";
import NanButton from "../lib/Button/button.vue";
export default defineComponent({
  components: {
    // NanDialog,
    NanButton,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = true;
    };

    return { x, toggle };
  },
});
</script>

<style>
</style>