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
