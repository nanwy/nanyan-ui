<template>
  <div class="main-content">
    <div class="example">
      <div class="demo-input">
        <nan-input preicon="nan-icon-search"></nan-input>
        <nan-input clearable style="margin-left: 8px"></nan-input>
        <nan-input disabled style="margin-left: 8px"></nan-input>
        <nan-input
          showPassword
          placeholder="请输入密码"
          style="margin-left: 8px"
          :maxlength="4"
        ></nan-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "input-demo",
};
</script>

<style>
</style>