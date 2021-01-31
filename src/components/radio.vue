<template>
  <div class="example">
    <nan-radio :label="1" v-model="radio">男</nan-radio>
    <nan-radio label="sex" v-model="radio">女</nan-radio>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const radio = ref(1);
    // console.log("radio: ", radio);
    return { radio };
  },
};
</script>

<style>
</style>