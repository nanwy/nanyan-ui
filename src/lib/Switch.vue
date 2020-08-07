<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);

      console.log("点击", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$height: 22px;
$height2: $height - 4px;
button {
  height: $height;
  width: $height * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $height/2;
  transition: all 0.2s;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $height2;
    width: $height2;
    background: white;
    border-radius: $height2/2;
    transition: all 0.2s;
  }
  &.checked {
    background: #1890ff;
  }
  &.checked > span {
    left: calc(100% - #{$height2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $height2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $height2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>