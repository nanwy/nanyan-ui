<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NanRadioGroup",
  props: {
    modelValue: String,
    button: Boolean,
    border: Boolean,
  },
};
</script>

<style>
</style>