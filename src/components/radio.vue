<template>
  <div class="example">
    <nan-radio :label="1" v-model="radio">男</nan-radio>
    <nan-radio label="sex" v-model="radio">女</nan-radio>
    <nan-radio label="kk" disabled v-model="radio">女2</nan-radio>
    <nan-radio label="ll" v-model="radio">女1</nan-radio>
    <nan-radio-group v-model="radio1" border>
      <nan-radio :label="5">女2</nan-radio>
      <nan-radio label="ll">女1</nan-radio>
    </nan-radio-group>
    <nan-radio-group v-model="radio1" button>
      <nan-radio :label="5">女2</nan-radio>
      <nan-radio label="ll">女1</nan-radio>
    </nan-radio-group>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const radio = ref(1);
    const radio1 = ref(5);
    // console.log("radio: ", radio);
    return { radio, radio1 };
  },
};
</script>

<style>
</style>