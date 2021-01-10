<template>
  <button
    class="nan-switch"
    :class="{ 'nan-switch-checked': value }"
    @click="toggle"
    :disabled="disabled"
  >
    <span></span>
    <div class="nan-switch-open" v-if="value">
      <slot name="open"></slot>
    </div>
    <div class="nan-switch-close" v-else>
      <slot name="close"></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    disabled: { type: Boolean, default: false },
  },
  setup(props, context) {
    console.log("props: ", props.disabled);
    const toggle = () => {
      if (props.disabled) return;
      context.emit("update:value", !props.value);
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
  color: #fff;
  position: relative;
  cursor: pointer;
  .nan-switch-open {
    position: absolute;
    top: 0;
    left: 3px;
  }
  .nan-switch-close {
    position: absolute;

    top: 0;
    right: 3px;
  }
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
  &.nan-switch-checked {
    > span {
      left: calc(100% - #{$height2} - 2px);
    }
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
  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>