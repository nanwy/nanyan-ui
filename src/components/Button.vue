<template>
  <div>
    Button 的文档
    <Button
      @click="onClick"
      @focus="onClick"
      @mouseover="onClick"
      theme="button"
      >你好</Button
    >
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" theme="link"
      >你好</Button
    >
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" theme="text"
      >你好</Button
    >
    <Button @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
  </div>
</template>

<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("dianji ");
    };
    return { onClick };
  },
};
</script>

<style>
</style>