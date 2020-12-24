<template>
  <button
    class="nan-switch"
    :class="{ 'nan-switch-checked': value }"
    @click="toggle"
  >
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

<style lang="scss">
$height: 22px;
$height2: $height - 4px;
.nan-switch {
  height: $height;
  width: $height * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $height/2;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
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
  &.nan-switch-checked {
    background: #1890ff;
  }
  &.nan-switch-checked > span {
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
  &.nan-switch-checked:active {
    > span {
      width: $height2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>