<template>
  <div class="demo-input">
    <nan-input
      v-for="item in ['primary', 'success', 'warn', 'error', 'info']"
      :key="item"
      :status="item"
      style="margin-left: 8px"
    />
    <nan-input preicon="nan-icon-search"></nan-input>
    <nan-input clearable="true"></nan-input>
  </div>
</template>
<script>
export default {
  name: "input-demo",
};
</script>

<style>
</style>